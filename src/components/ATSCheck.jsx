import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ATSCheck = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
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
            <Link to="/ozgecmislerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">description</span>
              <span className="text-[15px] font-semibold">Özgeçmişlerim</span>
            </Link>
            <Link to="/is-eslesmeleri" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">work</span>
              <span className="text-[15px] font-semibold">İş Eşleşmeleri</span>
            </Link>
            <a className="sidebar-active flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-primary font-bold transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
              <span className="text-[15px]">ATS Kontrolü</span>
            </a>
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

      {/* Main Content Area */}
      <main className="flex-grow lg:ml-[18%] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">ATS Kontrolü</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="#">Raporlar</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="#">Ayarlar</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <Link to="/profil" className="ml-2 ring-2 ring-offset-2 ring-primary/10 rounded-full cursor-pointer hover:ring-primary/30 transition-all overflow-hidden w-9 h-9">
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzYKuaD5OrzzhLI78Jt88LJ05ffyKr6IsAiQ1rMYbD09-JhBmoKrK5qhAZKa5sw6QynOG1gHRQfua4ytLdpU-Ukp7Lp5AJfRhrYS4OYn4K_n2hFHTt6xjFQoPQ8Ro6n6x39Xz-sKz1yHt3Pm66Z5p0Gv1yocCGPlhI-7Ww5wR6etE5HWPKcM8TZH4tQb6BwS21MhWS8XffGsU8w2GTyGj0md5anOCgGb5GTa9LpA31qgIkUqsTBQHKPUHFiS7uRB-GecQFSDC68pU" />
              </Link>
            </div>
          </div>
        </header>

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">ATS Kontrolü</h1>
          <div className="flex items-center gap-2 mt-2 text-outline">
            <span className="material-symbols-outlined text-sm">history</span>
            <p className="text-sm">Son Tarama: 2 dakika önce</p>
          </div>
        </div>

        {/* Top Summary Grid */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Radial Progress Card */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="radial-progress-container relative w-48 h-48">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeDasharray="100, 100" strokeWidth="3"></path>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#blue-gradient)" strokeLinecap="round" strokeDasharray="78, 100" strokeWidth="3"></path>
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003d9b"></stop>
                    <stop offset="100%" stopColor="#0052cc"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline text-5xl font-black text-primary">%78</span>
                <span className="text-xs text-outline font-medium tracking-widest uppercase">ATS SKORU</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm font-medium text-slate-600">Özgeçmişiniz <span className="font-bold text-primary">%78</span> uyumlu</p>
              <p className="text-xs text-slate-500 mt-1">Son güncelleme: 2 saat önce</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between border-l-4 border-error">
              <div className="flex justify-between items-start">
                <div className="bg-error-container/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-error">cancel</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-on-surface">3</h3>
                <p className="text-error font-semibold text-sm">Kritik Hata</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between border-l-4 border-tertiary">
              <div className="flex justify-between items-start">
                <div className="bg-tertiary-fixed/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-tertiary">warning</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-on-surface">5</h3>
                <p className="text-tertiary font-semibold text-sm">Format Uyarısı</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between border-l-4 border-emerald-500">
              <div className="flex justify-between items-start">
                <div className="bg-emerald-50/50 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mt-2">Hazır</h3>
                <p className="text-emerald-600 font-semibold text-sm">Optimizasyona Hazır</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Columns */}
        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: Yapısal Analiz */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="font-headline text-2xl font-bold">Yapısal Analiz</h2>
            </div>
            <div className="space-y-4">
              {/* Error Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm group hover:bg-surface-container transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-error-container text-error p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined">error</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Karmaşık Tablo Yapısı</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">ATS sistemleri tablolar içindeki verileri okumakta %60 oranında hata yapmaktadır.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap mt-4">Çözüm Önerisi</button>
              </div>

              {/* Warning Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm group hover:bg-surface-container transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-tertiary-fixed text-tertiary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined">photo_camera</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Fotoğraf Tespit Edildi</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">Modern İK filtreleri tarafsızlık adına fotoğrafsız özgeçmişleri tercih etmektedir.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap mt-4">Çözüm Önerisi</button>
              </div>

              {/* Warning Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm group hover:bg-surface-container transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-tertiary-fixed text-tertiary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined">font_download</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Uygunsuz Font Tercihi</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">Kullandığınız bazı fontlar OCR tarayıcıları tarafından doğru tanımlanamıyor.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap mt-4">Çözüm Önerisi</button>
              </div>
            </div>
          </div>

          {/* Right Column: Keyword Intelligence */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary-container rounded-full"></div>
              <h2 className="font-headline text-2xl font-bold">Anahtar Kelime Zekası</h2>
            </div>
            <div className="glass-panel rounded-[2rem] p-8 mb-6">
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-6">Kelime Bulutu Analizi</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-md shadow-primary/20">Kubernetes</span>
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-md shadow-primary/20">TypeScript</span>
                <span className="px-4 py-2 border-2 border-dashed border-outline-variant text-outline text-sm font-semibold rounded-full">Docker</span>
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-md shadow-primary/20">React</span>
                <span className="px-4 py-2 border-2 border-dashed border-outline-variant text-outline text-sm font-semibold rounded-full">Agile</span>
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-md shadow-primary/20">Tailwind</span>
                <span className="px-4 py-2 border-2 border-dashed border-outline-variant text-outline text-sm font-semibold rounded-full">CI/CD</span>
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-md shadow-primary/20">Node.js</span>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <p className="text-sm font-bold text-on-surface mb-4">Şansını Artıracak Kelimeler:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-outline">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span><strong className="text-primary">Docker:</strong> DevOps süreçlerinde %40 daha fazla görünürlük sağlar.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-outline">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span><strong className="text-primary">CI/CD:</strong> Modern yazılım ekiplerinin en çok aradığı yetkinliktir.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-outline">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span><strong className="text-primary">Agile:</strong> Proje yönetim metodolojisi eksikliği puanınızı düşürüyor.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden mb-16 mt-10">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-6xl">psychology</span>
          </div>
          <h5 className="text-lg font-bold mb-2">AI Önerisi</h5>
          <p className="text-sm leading-relaxed text-blue-100/90">
            Yapay zekamız, özgeçmişinizdeki iş tanımlarının çok pasif olduğunu tespit etti. "Yaptım" yerine "Geliştirdim", "Yönettim" gibi etki odaklı kelimeler kullanmalısınız.
          </p>
        </div>

        {/* Bottom Section: Benchmark */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-on-surface rounded-full"></div>
            <h2 className="font-headline text-2xl font-bold">Sektör Ortalaması vs. Sen</h2>
          </div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span>İçerik Kalitesi</span>
                    <span className="text-primary">Sen: %92</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-[10px] text-outline uppercase tracking-tighter">Sektör Ortalaması: %65</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span>Görsel Hiyerarşi</span>
                    <span className="text-primary">Sen: %45</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-[10px] text-outline uppercase tracking-tighter">Sektör Ortalaması: %78</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span>Anahtar Kelime Yoğunluğu</span>
                    <span className="text-primary">Sen: %84</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-[10px] text-outline uppercase tracking-tighter">Sektör Ortalaması: %70</span>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <img
                  alt="Sektör Karşılaştırma Grafiği"
                  className="rounded-3xl shadow-xl border-8 border-surface-container-low"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq-tsOzfJQB9hqr_PClJ7b-qI0A9N3kj5sNt4axeBSX6F7FwpirFlFwY9xl-P4RWTfpGgR399zYnDtaRpIjJHR1YXiH5yP5Iqp_1BVE5FftsQBcYXdAouMdzdjXircBcg2P2QWbvvLSUE9CqLX-3Yi-OUyuJmGJuXyaZopgEu9sDCPOKq4267Ijn42H5k-0lf4B8himeqoHqikpeLMi2wglhStrmHGKkO7ZbZZSajlAcijq3hrJYDS3pdleVP9J9i383vDmGqvB98"
                />
                <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl shadow-lg border border-primary/10">
                  <p className="text-2xl font-black text-primary">+15%</p>
                  <p className="text-xs text-outline font-medium">Genel Ortalamadan Daha İyisin</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAB Action */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary hover:bg-primary-container text-white h-16 px-8 rounded-full shadow-2xl shadow-primary/40 flex items-center gap-3 transition-all active:scale-95 group">
          <span className="material-symbols-outlined">refresh</span>
          <span className="font-bold">Yeni Taramayı Başlat</span>
        </button>
      </div>
    </div>
  );
};

export default ATSCheck;