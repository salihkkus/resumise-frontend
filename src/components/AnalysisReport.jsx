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

  // Load analysis data from backend
  useEffect(() => {
    const loadAnalysis = async () => {
      if (!analysisId) return;
      
      try {
        const data = await analysisService.getAnalysisById(analysisId);
        setAnalysisData(data);
        console.log('✅ Analysis loaded from backend:', data);
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

  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      {/* SideNavBar Shell */}
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
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>analytics</span>
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

      {/* Main Content Canvas */}
      <main className="flex-grow lg:ml-[18%] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
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
                Analiz Raporu: <span className="text-primary">Kıdemli Fullstack Geliştirici</span>
              </h2>
              <p className="text-outline mt-2 text-lg">Profilinizin hedeflenen rol ile uyumluluğu detaylı olarak analiz edildi.</p>
              <div className="mt-8 flex items-center gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-[2rem] flex items-center gap-6 shadow-sm border border-outline-variant/10">
                  <img alt="Google Logo" className="w-16 h-16 rounded-2xl object-cover" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" />
                  <div>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">Hedef Pozisyon</p>
                    <h3 className="font-headline font-extrabold text-2xl">Google - Lead Software Engineer</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="flex items-center gap-1 text-xs font-medium text-outline"><span className="material-symbols-outlined text-sm">location_on</span> Mountain View, CA</span>
                      <span className="flex items-center gap-1 text-xs font-medium text-outline"><span className="material-symbols-outlined text-sm">payments</span> $180k - $240k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 flex items-center justify-center rounded-full" style={{
                background: 'radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#0052cc 82%, #e1e2e4 0)'
              }}>
                <div className="text-center">
                  <span className="block text-5xl font-headline font-black text-primary">%82</span>
                  <span className="text-xs font-bold text-outline uppercase tracking-tighter">Eşleşme Skoru</span>
                </div>
              </div>
            </div>
          </section>

          {/* AI Summary Card (Glassmorphism) */}
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
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline font-extrabold text-xl">Yapay Zeka Özeti</h4>
                  <p className="text-on-surface-variant leading-relaxed text-base">
                    Özgeçmişiniz, teknik derinlik ve liderlik tecrübesi açısından Google'ın beklentileriyle yüksek oranda örtüşüyor. Özellikle <strong>Node.js ve React</strong> ekosistemindeki 8 yıllık deneyiminiz büyük bir artı. Ancak, raporun detaylarında görebileceğiniz üzere, büyük ölçekli sistem tasarımı ve açık kaynak katkıları konusundaki eksiklikler %18'lik farkın temel sebebidir.
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
                  <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                </div>
                <h4 className="font-headline font-bold text-xl">Güçlü Yanlar</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-bold text-sm">Teknik Stack Uyumu</p>
                    <p className="text-xs text-outline">React, TypeScript ve Cloud mimarileri tam eşleşiyor.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-bold text-sm">Liderlik Deneyimi</p>
                    <p className="text-xs text-outline">5+ yıl ekip yönetimi tecrübesi "Lead" rolü için ideal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-bold text-sm">Performans Optimizasyonu</p>
                    <p className="text-xs text-outline">Önceki rollerdeki %40 verimlilik artışı verisi çok etkileyici.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Missing Points */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>warning</span>
                </div>
                <h4 className="font-headline font-bold text-xl">Eksiklikler</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="font-bold text-sm">Quantum Computing Temelleri</p>
                    <p className="text-xs text-outline">İş tanımındaki "tercihen" bölümünde belirtilen anahtar kelime eksik.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="font-bold text-sm">Open Source Katkısı</p>
                    <p className="text-xs text-outline">Google kültüründe önemli olan açık kaynak referansları bulunamadı.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-2xl">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="font-bold text-sm">Kalıcı Sistem Tasarımı (LSD)</p>
                    <p className="text-xs text-outline">Büyük veri ölçekleme stratejilerine dair spesifik detaylar yetersiz.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Action Plan Section */}
          <section className="grid grid-cols-12 gap-8">
            {/* Resume Recommendations Checklist */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <h4 className="font-headline font-extrabold text-xl mb-6">Özgeçmiş Önerileri</h4>
              <div className="space-y-4">
                {[
                  "GitHub profil linkini \"Header\" kısmına ekle.",
                  "\"Distributed Systems\" anahtar kelimesini ekle.",
                  "Başarılarını % veya $ bazlı metriklerle zenginleştir.",
                  "Eğitim bölümünde tamamlanan sertifikaları öne çıkar."
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-outline-variant/20 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => toggleCheck(index)}>
                    <div className="w-6 h-6 rounded-md border-2 border-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xs text-primary" style={{display: checkedItems[index] ? 'block' : 'none'}}>check</span>
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

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .font-headline {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default AnalysisReport;
