import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { cvService } from '../services/cvService';

const MyResumes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('personal');
  const [companyName, setCompanyName] = useState('Teknoloji A.Ş.');
  const [position, setPosition] = useState('Kıdemli Satış Temsilcisi');
  const [jobDescription, setJobDescription] = useState('Satış yaptım');
  const [showAISuggestion, setShowAISuggestion] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const { profileData } = useAuth();
  const [selectedColor, setSelectedColor] = useState('primary');
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCV, setSelectedCV] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [previewLoading, setPreviewLoading] = useState(false);

  // Load CVs from backend
  useEffect(() => {
    const loadCVs = async () => {
      try {
        const data = await cvService.getCVs();
        setResumes(data);
        console.log('✅ CVs loaded from backend:', data);
      } catch (error) {
        console.error('❌ Failed to load CVs:', error);
        setError('CV\'ler yüklenemedi. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    loadCVs();
  }, []);

  // Handle CV selection and preview
  const handleCVSelect = async (cv) => {
    setSelectedCV(cv);
    setPreviewLoading(true);
    
    try {
      console.log('🔍 Loading preview for CV:', cv.id, cv.fileName);
      const url = await cvService.getCVContentForPreview(cv.id);
      setPreviewUrl(url);
      console.log('✅ CV preview loaded:', url);
    } catch (error) {
      console.error('❌ Failed to load CV preview:', error);
      setPreviewUrl(''); // Clear preview on error
    } finally {
      setPreviewLoading(false);
    }
  };

  // Cleanup object URL when component unmounts or CV changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Handle file upload
  const handleFileUpload = async (file) => {
    try {
      const newCV = await cvService.uploadCV(file);
      setResumes(prev => [newCV, ...prev]);
      console.log('✅ New CV uploaded:', newCV);
    } catch (error) {
      console.error('❌ CV upload failed:', error);
      setError('CV yüklenemedi. Lütfen dosyayı kontrol edin.');
    }
  };

  const templates = [
    { id: 'modern', icon: 'dashboard_customize', label: 'Modern' },
    { id: 'classic', icon: 'format_list_bulleted', label: 'Klasik' },
    { id: 'minimalist', icon: 'minimize', label: 'Minimalist' },
    { id: 'creative', icon: 'palette', label: 'Kreatif' }
  ];

  const colors = [
    { id: 'primary', class: 'bg-primary' },
    { id: 'emerald', class: 'bg-emerald-500' },
    { id: 'rose', class: 'bg-rose-500' }
  ];

  const handleAIEnhance = () => {
    setJobDescription('Yıllık satış hedeflerini %20 aşarak bölge birincisi oldum.');
    setShowAISuggestion(false);
  };

  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface">
      {/* Flexible/Responsive Sidebar */}
      <aside className="hidden lg:flex flex-col fixed inset-y-0 left-0 z-50 justify-between bg-[#f1f5f9] border-r border-slate-200/60 w-[18%] min-w-[280px] max-w-[360px] transition-all duration-300">
        <div className="flex flex-col">
          <div className="p-8 pb-10">
            <h1 className="text-2xl font-extrabold text-primary tracking-tight font-headline">Resumise</h1>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Yapay Zeka Kariyer Mimarı</p>
          </div>
          <nav className="px-4 space-y-1.5">
            <Link to="/" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">grid_view</span>
              <span className="text-[15px] font-semibold">Panel</span>
            </Link>
            <Link to="/analiz-raporu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>analytics</span>
              <span className="text-[15px] font-semibold">Analiz Raporu</span>
            </Link>
            <Link to="/ozgecmislerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/50 text-primary font-bold transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>description</span>
              <span className="text-[15px] font-semibold">Özgeçmişlerim</span>
            </Link>
            <Link to="/is-eslesmeleri" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">work</span>
              <span className="text-[15px] font-semibold">İş Eşleşmeleri</span>
            </Link>
            <Link to="/ats-kontrolu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">analytics</span>
              <span className="text-[15px] font-semibold">ATS Kontrolü</span>
            </Link>
            <Link to="/ai-mulakat-kocu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">psychology</span>
              <span className="text-[15px] font-semibold">Yapay Zeka Mülakat Koçu</span>
            </Link>
            <Link to="/analizlerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">analytics</span>
              <span className="text-[15px] font-semibold">Analizlerim</span>
            </Link>
            <Link to="/profil" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">person</span>
              <span className="text-[15px] font-semibold">Profil</span>
            </Link>
          </nav>
        </div>
        <div className="p-6">
          {/* Pro Plan card */}
          <div className="bg-primary rounded-[2rem] p-6 text-white relative overflow-hidden shadow-xl shadow-primary/20 mb-6">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">PRO PLAN</p>
              <p className="text-sm font-medium leading-relaxed mb-4">Sınırsız yapay zeka özgeçmiş revizyonu ve deneme mülakatları alın.</p>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-xl text-xs hover:bg-slate-50 transition-colors shadow-lg">
                Pro'ya Yükselt
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          {/* Support and Logout */}
          <div className="space-y-1">
            <Link to="/yapim-asamasi" className="flex items-center gap-3.5 px-5 py-3 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined !text-[20px]">help_center</span>
              <span className="text-sm font-semibold">Destek</span>
            </Link>
            <Link to="/yapim-asamasi" className="flex items-center gap-3.5 px-5 py-3 text-slate-500 hover:text-error transition-colors">
              <span className="material-symbols-outlined !text-[20px]">logout</span>
              <span className="text-sm font-semibold">Çıkış Yap</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Adjust margin to match sidebar responsiveness */}
      <main className="flex-grow lg:ml-[18%] lg:min-ml-[280px] lg:max-ml-[360px] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Özgeçmişlerim</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="/under-construction">Şablonlar</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="/under-construction">İş İlanları</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <Link to="/profil" className="ml-2 ring-2 ring-offset-2 ring-primary/10 rounded-full cursor-pointer hover:ring-primary/30 transition-all overflow-hidden w-9 h-9">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src={profileData?.profileImageUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"} 
                />
              </Link>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editor & History */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">
            {/* Section: Saved Resumes */}
            <section>
              <h1 className="text-4xl font-headline font-extrabold tracking-tight mb-8">Özgeçmişlerim</h1>
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined animate-spin text-2xl text-primary">refresh</span>
                    <span className="text-sm font-medium text-on-surface-variant">Özgeçmişler yükleniyor...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="bg-error-container p-6 rounded-xl border border-error/20">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error">error</span>
                    <span className="text-error text-sm font-medium">{error}</span>
                  </div>
                </div>
              ) : resumes.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl text-outline">description</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Henüz özgeçmiş yüklenmemiş</h3>
                  <p className="text-sm text-outline-variant mb-6">İlk özgeçmişinizi yüklemek için ana sayfaya gidin</p>
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-container transition-all"
                  >
                    <span className="material-symbols-outlined">upload_file</span>
                    Özgeçmiş Yükle
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resumes.map((cv) => (
                    <div 
                      key={cv.id} 
                      className={`bg-surface-container-lowest rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden ${
                        cv.isDefault ? 'ring-2 ring-primary/20' : ''
                      }`}
                      onClick={() => handleCVSelect(cv)}
                    >
                      <div className="h-32 mb-4 bg-slate-100 rounded-2xl overflow-hidden relative">
                        {/* CV Preview Placeholder */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                          <span className={`material-symbols-outlined text-4xl ${
                            cv.isDefault ? 'text-primary' : 'text-outline-variant'
                          }`}>description</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                        {cv.isDefault && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-white text-[10px] font-bold rounded-full">
                            VARSAYILAN
                          </div>
                        )}
                      </div>
                      <h3 className="font-bold text-on-surface truncate" title={cv.title}>{cv.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 truncate" title={cv.fileName}>{cv.fileName}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-outline-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">description</span>
                          {cv.fileType.split('/')[1]?.toUpperCase() || 'FILE'}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">storage</span>
                          {(cv.fileSize / 1024).toFixed(1)} KB
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button 
                          className="flex-1 text-[11px] font-bold py-2 bg-surface-container-high rounded-lg hover:bg-primary-container hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Düzenle
                        </button>
                        <button 
                          className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* Upload Card */}
                  <div className="border-2 border-dashed border-outline-variant/50 rounded-3xl p-5 flex flex-col items-center justify-center gap-3 hover:bg-white/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary">upload_file</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold">Yeni Özgeçmiş Yükle</p>
                      <p className="text-[10px] text-slate-400">.pdf, .docx formatları</p>
                    </div>
                  </div>
                </div>
              )}
            </section>
            {/* Section: Dynamic Form Editor */}
            <section className="bg-surface-container-lowest rounded-[40px] p-8 shadow-sm">
              {/* Tabs */}
              <div className="flex gap-8 mb-10 border-b border-outline-variant/10">
                <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary transition-all">Kişisel Bilgiler</button>
                <button className="pb-4 text-sm font-medium text-slate-400 hover:text-on-surface transition-all">Deneyim</button>
                <button className="pb-4 text-sm font-medium text-slate-400 hover:text-on-surface transition-all">Eğitim</button>
              </div>
              {/* Experience Section (Simulated content) */}
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 ml-1">Şirket Adı</label>
                    <input className="bg-surface-container-low border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" type="text" value="Teknoloji A.Ş."/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 ml-1">Pozisyon</label>
                    <input className="bg-surface-container-low border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" type="text" value="Kıdemli Satış Temsilcisi"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-bold text-slate-500 ml-1">İş Tanımı &amp; Başarılar</label>
                  <div className="relative">
                    <textarea className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none" rows="4">Satış yaptım</textarea>
                    {/* AI Insight Float */}
                    <div className="absolute -right-4 -bottom-12 w-80 glass-panel p-4 rounded-3xl shadow-2xl border border-white/50 z-10 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                        <span className="text-[11px] font-bold tracking-widest uppercase">Yapay Zeka Önerisi</span>
                      </div>
                      <p className="text-[11px] text-slate-700 italic leading-relaxed">
                        "Satış yaptım" yerine: <br/>
                        <span className="text-primary font-semibold">"Yıllık satış hedeflerini %20 aşarak bölge birincisi oldum."</span>
                      </p>
                      <button className="bg-primary text-white text-[10px] font-bold py-2 rounded-xl hover:bg-primary-container transition-all">Uygula</button>
                    </div>
                    <button className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-full text-[10px] font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                      <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
                      AI ile Güzelleştir
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Right Column: Preview */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline font-bold">Canlı Önizleme</h2>
              <div className="flex gap-2">
                <button className="bg-surface-container-high hover:bg-surface-container-highest px-4 py-2 rounded-xl text-xs font-bold transition-all">Paylaş</button>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">PDF Olarak İndir</button>
              </div>
            </div>
            <div className="bg-white rounded-[40px] shadow-2xl p-4 relative">
              {/* Preview Toolbar */}
              <div className="absolute -left-16 top-10 flex flex-col gap-4">
                <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col gap-4 border border-outline-variant/10">
                  <button className="p-2 bg-primary/10 text-primary rounded-xl" title="Modern">
                    <span className="material-symbols-outlined">dashboard_customize</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all" title="Klasik">
                    <span className="material-symbols-outlined">format_list_bulleted</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all" title="Minimalist">
                    <span className="material-symbols-outlined">minimize</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all" title="Kreatif">
                    <span className="material-symbols-outlined">palette</span>
                  </button>
                </div>
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-outline-variant/10 flex flex-col items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary cursor-pointer ring-2 ring-primary/20"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-500 cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-full bg-rose-500 cursor-pointer"></div>
                </div>
              </div>
              {/* A4 Preview with Real CV Content */}
              <div className="a4-preview bg-white rounded-xl overflow-hidden p-12 border border-slate-100 flex flex-col gap-8">
                {previewLoading ? (
                  <div className="flex items-center justify-center h-[600px]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined animate-spin text-2xl text-primary">refresh</span>
                      <span className="text-sm font-medium text-slate-500">Önizleme yükleniyor...</span>
                    </div>
                  </div>
                ) : previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-[600px] border-0 rounded-lg"
                    title="CV Preview"
                    onLoad={() => console.log('✅ CV preview iframe loaded')}
                    onError={() => console.error('❌ CV preview iframe error')}
                  />
                ) : (
                  <div className="flex items-center justify-center h-[600px] text-center">
                    <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-3xl text-outline">description</span>
                    </div>
                    <h3 className="text-lg font-bold text-on-surface mb-2">Önizleme Seçimi</h3>
                    <p className="text-sm text-outline-variant">
                      {selectedCV 
                        ? `"${selectedCV.title}" için önizleme yükleniyor...`
                        : 'Önizleme görmek için bir CV seçin'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
  );
};

export default MyResumes;
