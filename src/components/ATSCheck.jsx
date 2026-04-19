import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ATSCheck = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex min-h-screen bg-background font-body text-on-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 gap-y-2">
        <div className="text-2xl font-black text-blue-700 dark:text-blue-500 mb-8 px-4">Resumise</div>
        <nav className="space-y-1">
          <Link to="/" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:translate-x-1 transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/ozgecmislerim" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:translate-x-1 transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="description">description</span>
            <span>Özgeçmişim</span>
          </Link>
          <Link to="/is-eslesmeleri" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:translate-x-1 transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="handshake">handshake</span>
            <span>İş Eşleşmeleri</span>
          </Link>
          <a className="flex items-center gap-3 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 font-semibold rounded-lg shadow-sm px-4 py-3 ml-2 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
            <span>ATS Kontrolü</span>
          </a>
          <Link to="/ai-mulakat-kocu" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:translate-x-1 transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            <span>Yapay Zeka Mülakat Koçu</span>
          </Link>
        </nav>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-blue-900/5 flex items-center justify-between w-[calc(100%-16rem)] ml-64 px-8 h-16">
        <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
          <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full font-label" 
            placeholder="Yardım merkezi veya belgelerde ara..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-slate-500 hover:bg-slate-100 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-on-surface">Ahmet Yılmaz</p>
              <p className="text-[10px] text-outline uppercase tracking-wider">Premium Üye</p>
            </div>
            <img 
              alt="User Profile Avatar" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-fixed" 
              data-alt="professional headshot of a male software engineer in a minimalist tech office clean lighting blurry office background high quality photography" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnsZyrL4uL1n4Wj0rwM9difGI691BKNBh5qZWOkPr-8fd8Nuzny1KB8iDbQuvs17tGUbz-f58MP-pp5e5gWTZwuMti9k5D95rGPCKns3llYEBwvtKu4BJbnKDGUKaKl-MATzzQoVQds_Hjl7X4YLmND85xnBeeGJ8ZQizBMwlYNopGPJ3AN_xCQmcRo2GkhJUHpN76kGbVYqZXguonSeqrdGIi6SeUwYMB279BZqzu0aWqPY_HS_JjKD8DjRNNSmDgvcFQG2rDnDk"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">ATS Kontrolü</h1>
          <div className="flex items-center gap-2 mt-2 text-outline">
            <span className="material-symbols-outlined text-sm" data-icon="history">history</span>
            <p className="text-sm">Son Tarama: 2 dakika önce</p>
          </div>
        </div>

        {/* Top Summary Grid */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Radial Progress Card */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="radial-progress-container">
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
          </div>

          {/* Stats Cards */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between border-l-4 border-error">
              <div className="flex justify-between items-start">
                <div className="bg-error-container/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-error" data-icon="cancel">cancel</span>
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
                  <span className="material-symbols-outlined text-tertiary" data-icon="warning">warning</span>
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
                  <span className="material-symbols-outlined text-emerald-500" data-icon="check_circle">check_circle</span>
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
                      <span className="material-symbols-outlined" data-icon="error">error</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Karmaşık Tablo Yapısı</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">ATS sistemleri tablolar içindeki verileri okumakta %60 oranında hata yapmaktadır.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap">Çözüm Önerisi</button>
              </div>

              {/* Warning Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm group hover:bg-surface-container transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-tertiary-fixed text-tertiary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Fotoğraf Tespit Edildi</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">Modern İK filtreleri tarafsızlık adına fotoğrafsız özgeçmişleri tercih etmektedir.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap">Çözüm Önerisi</button>
              </div>

              {/* Warning Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm group hover:bg-surface-container transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-tertiary-fixed text-tertiary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined" data-icon="font_download">font_download</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface">Uygunsuz Font Tercihi</h4>
                      <p className="text-sm text-outline mt-1 max-w-md">Kullandığınız bazı fontlar OCR tarayıcıları tarafından doğru tanımlanamıyor.</p>
                    </div>
                  </div>
                </div>
                <button className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap">Çözüm Önerisi</button>
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
        <div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-6xl" data-icon="psychology">psychology</span>
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
                    <div className="h-full bg-primary rounded-full" style={{width: '92%'}}></div>
                    <div className="h-full bg-outline-variant/30" style={{width: '65%', marginLeft: '-92%', zIndex: 1}}></div>
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
                    <div className="h-full bg-primary rounded-full" style={{width: '45%'}}></div>
                    <div className="h-full bg-outline-variant/30" style={{width: '78%', marginLeft: '-45%', zIndex: 1}}></div>
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
                    <div className="h-full bg-primary rounded-full" style={{width: '84%'}}></div>
                    <div className="h-full bg-outline-variant/30" style={{width: '70%', marginLeft: '-84%', zIndex: 1}}></div>
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
                  data-alt="abstract data visualization showing career growth and benchmarking sleek lines tech blue accents clean white background minimalist business aesthetic" 
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

      {/* FAB Action (Contextual to ATS Scan) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary hover:bg-primary-container text-white h-16 px-8 rounded-full shadow-2xl shadow-primary/40 flex items-center gap-3 transition-all active:scale-95 group">
          <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
          <span className="font-bold">Yeni Taramayı Başlat</span>
        </button>
      </div>
    </div>
  );
};

export default ATSCheck;
