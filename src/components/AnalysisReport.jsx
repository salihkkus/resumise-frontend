import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { analysisService } from '../services/analysisService';

const AnalysisReport = () => {
  const { analysisId } = useParams();
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { profileData } = useAuth();

  const analysis = analysisData || {};
  const {
    status = '',
    cvTitle = '',
    jobDescription = '',
    correlationId = '',
    errorMessage = '',
    matchScore = 0,
    summary = '',
    strengths = '',
    gaps = '',
    actionItems = ''
  } = analysis;

  useEffect(() => {
    const loadAnalysis = async () => {
      if (!analysisId) return;
      
      try {
        // First attempt to load analysis
        const data = await analysisService.getAnalysisById(analysisId);
        setAnalysisData(data);
        console.log('✅ Analysis loaded from backend:', data);
        
        // If status is QUEUED, set up polling
        if (data.status === 'QUEUED') {
          console.log('🔄 Analysis is queued, setting up polling...');
          const pollInterval = setInterval(async () => {
            try {
              const updatedData = await analysisService.getAnalysisById(analysisId);
              setAnalysisData(updatedData);
              console.log('🔄 Analysis status updated:', updatedData.status);
              
              // Stop polling when analysis is completed
              if (updatedData.status === 'COMPLETED') {
                clearInterval(pollInterval);
                console.log('✅ Analysis completed!');
              }
            } catch (error) {
              console.error('❌ Polling failed:', error);
            }
          }, 3000); // Poll every 3 seconds
          
          // Clean up interval on unmount
          return () => clearInterval(pollInterval);
        }
      } catch (error) {
        console.error('❌ Failed to load analysis:', error);
        setError('Analiz yüklenemedi. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    loadAnalysis();
  }, [analysisId]);

  const toggleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center gap-4 text-center max-w-md">
            <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Analiz Yükleniyor</h3>
              <p className="text-sm text-on-surface-variant">
                {status === 'QUEUED' 
                  ? 'Analiz sıraya alındı. Yapay zeka CV\'nizi işliyor, bu birkaç dakika sürebilir...'
                  : 'Analiz verileri yükleniyor...'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
        <div className="flex items-center justify-center w-full">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-error mb-4">error</span>
            <p className="text-error font-medium">{error}</p>
            <Link to="/" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white rounded-lg">
              <span className="material-symbols-outlined">arrow_back</span>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      {/* Sidebar */}
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
            <Link to="/analiz-raporu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/50 text-primary font-bold transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
              <span className="text-[15px] font-semibold">Analiz Raporu</span>
            </Link>
            <Link to="/ozgecmislerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">description</span>
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

      {/* Main Content */}
      <main className="flex-grow lg:ml-[18%] p-8 lg:p-12 transition-all duration-300" style={{ marginLeft: 'clamp(280px, 18%, 360px)' }}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Analiz Raporu</a>
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

        {/* Content Area */}
        <div className="space-y-10">
          {/* Hero Analysis Section */}
          <section className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                Analiz Raporu: <span className="text-primary">{cvTitle || 'Yüklenen CV'}</span>
              </h2>
              <p className="text-outline mt-2 text-lg">Profilinizin hedeflenen rol ile uyumluluğu detaylı olarak analiz edildi.</p>
              <div className="mt-8 flex items-center gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-[2rem] flex items-center gap-6 shadow-sm border border-outline-variant/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-primary">work</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">Analiz Durumu</p>
                    <h3 className="font-headline font-extrabold text-2xl capitalize">{status || 'Analiz Ediliyor'}</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="flex items-center gap-1 text-xs font-medium text-outline">
                        <span className="material-symbols-outlined text-sm">description</span> {cvTitle || 'CV'}
                      </span>
                      {correlationId && (
                        <span className="flex items-center gap-1 text-xs font-medium text-outline">
                          <span className="material-symbols-outlined text-sm">tag</span> ID: {correlationId.slice(0, 8)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 flex items-center justify-center rounded-full" style={{
                background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#0052cc ${matchScore || 0}%, #e1e2e4 0)`
              }}>
                <div className="text-center">
                  <span className="block text-5xl font-headline font-black text-primary">{matchScore || 0}%</span>
                  <span className="text-xs font-bold text-outline uppercase tracking-tighter">Eşleşme Skoru</span>
                </div>
              </div>
            </div>
          </section>

          {/* AI Summary Card */}
          <section className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-fixed blur-3xl opacity-50"></div>
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] p-8" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 82, 204, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline font-extrabold text-xl">Yapay Zeka Özeti</h4>
                  <p className="text-on-surface-variant leading-relaxed text-base">
                    {summary || 'Analiz özeti yükleniyor...'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strong Points */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                </div>
                <h4 className="font-headline font-bold text-xl">Güçlü Yanlar</h4>
              </div>
              <div className="space-y-4">
                {strengths ? (
                  <div className="p-4 bg-surface-container-lowest rounded-2xl">
                    <p className="text-sm text-outline-variant leading-relaxed whitespace-pre-line">
                      {strengths}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-outline-variant">
                    <span className="material-symbols-outlined text-3xl">hourglass_empty</span>
                    <p className="text-sm mt-2">Güçlü yönler analiz ediliyor...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Missing Points */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>cancel</span>
                </div>
                <h4 className="font-headline font-bold text-xl">Eksik Yanlar</h4>
              </div>
              <div className="space-y-4">
                {gaps ? (
                  <div className="p-4 bg-surface-container-lowest rounded-2xl">
                    <p className="text-sm text-outline-variant leading-relaxed whitespace-pre-line">
                      {gaps}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-outline-variant">
                    <span className="material-symbols-outlined text-3xl">hourglass_empty</span>
                    <p className="text-sm mt-2">Eksik yönler analiz ediliyor...</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Bottom Grid: CV Suggestions + Interview Prep */}
          <section className="grid grid-cols-12 gap-8">
            {/* CV Suggestions */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <h4 className="font-headline font-extrabold text-xl mb-6">Özgeçmiş Önerileri</h4>
              <div className="space-y-4">
                {[
                  "GitHub profil linkini \"Header\" kısmına ekle.",
                  "\"Distributed Systems\" anahtar kelimesini ekle.",
                  "Başarılarını % veya $ bazlı metriklerle zenginleştir.",
                  "Eğitim bölümünde tamamlanan sertifikaları öne çıkar."
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border border-outline-variant/20 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer"
                    onClick={() => toggleCheck(index)}
                  >
                    <div className="w-6 h-6 rounded-md border-2 border-primary flex items-center justify-center">
                      {checkedItems[index] && (
                        <span className="material-symbols-outlined text-xs text-primary">check</span>
                      )}
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-4 border-2 border-primary text-primary rounded-xl font-headline font-bold text-sm hover:bg-primary hover:text-white transition-all">
                Özgeçmişi Otomatik Düzenle
              </button>
            </div>

            {/* Interview Prep Questions */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-headline font-extrabold text-xl">Mülakat Hazırlığı</h4>
                <span className="text-xs font-bold text-primary px-3 py-1 bg-primary-fixed rounded-full">AI Tarafından Üretildi</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-surface-container-high rounded-[2rem] border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 bg-primary-container text-white text-[10px] rounded font-bold uppercase">Soru</span>
                    <span className="text-xs text-outline font-medium">Sistem Tasarımı</span>
                  </div>
                  <p className="font-headline font-bold text-base mb-4">"Milyonlarca kullanıcısı olan bir uygulamanın veritabanı ölçeklendirmesini nasıl yaparsınız?"</p>
                  <div className="p-4 bg-surface-container-lowest rounded-xl">
                    <p className="text-[10px] font-black text-primary uppercase mb-1 tracking-tighter">Strateji</p>
                    <p className="text-xs text-on-surface-variant">Sharding, replication ve caching stratejilerinden bahsedin. Google Cloud Spanner veya Bigtable tecrübelerinize atıfta bulunun.</p>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-high rounded-[2rem] border-l-4 border-secondary">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 bg-secondary text-white text-[10px] rounded font-bold uppercase">Soru</span>
                    <span className="text-xs text-outline font-medium">Davranışsal</span>
                  </div>
                  <p className="font-headline font-bold text-base mb-4">"Ekibinizde yaşanan teknik bir anlaşmazlığı nasıl yönettiniz?"</p>
                  <div className="p-4 bg-surface-container-lowest rounded-xl">
                    <p className="text-[10px] font-black text-secondary uppercase mb-1 tracking-tighter">Strateji</p>
                    <p className="text-xs text-on-surface-variant">STAR metodunu kullanın. Veri odaklı karar verme sürecini ve ekibin motivasyonunu nasıl koruduğunuzu anlatın.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AnalysisReport;