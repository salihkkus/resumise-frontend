import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [jobUrl, setJobUrl] = useState('');
  const [showInterviewBot, setShowInterviewBot] = useState(true);

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
            <a className="sidebar-active flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-primary font-bold transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>grid_view</span>
              <span className="text-[15px]">Panel</span>
            </a>
            <Link to="/ozgecmislerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">description</span>
              <span className="text-[15px] font-semibold">Özgeçmişlerim</span>
            </Link>
            <a className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]">work</span>
              <span className="text-[15px] font-semibold">İş Eşleşmeleri</span>
            </a>
            <a className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]">analytics</span>
              <span className="text-[15px] font-semibold">ATS Kontrolü</span>
            </a>
            <a className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]">psychology</span>
              <span className="text-[15px] font-semibold">Yapay Zeka Mülakat Koçu</span>
            </a>
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
            <a className="flex items-center gap-3.5 px-5 py-3 text-slate-500 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined !text-[20px]">help_center</span>
              <span className="text-sm font-semibold">Destek</span>
            </a>
            <a className="flex items-center gap-3.5 px-5 py-3 text-slate-500 hover:text-error transition-colors" href="#">
              <span className="material-symbols-outlined !text-[20px]">logout</span>
              <span className="text-sm font-semibold">Çıkış Yap</span>
            </a>
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
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Panel</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="#">Şablonlar</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="#">İş İlanları</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="ml-2 ring-2 ring-offset-2 ring-primary/10 rounded-full cursor-pointer hover:ring-primary/30 transition-all overflow-hidden w-9 h-9">
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzYKuaD5OrzzhLI78Jt88LJ05ffyKr6IsAiQ1rMYbD09-JhBmoKrK5qhAZKa5sw6QynOG1gHRQfua4ytLdpU-Ukp7Lp5AJfRhrYS4OYn4K_n2hFHTt6xjFQoPQ8Ro6n6x39Xz-sKz1yHt3Pm66Z5p0Gv1yocCGPlhI-7Ww5wR6etE5HWPKcM8TZH4tQb6BwS21MhWS8XffGsU8w2GTyGj0md5anOCgGb5GTa9LpA31qgIkUqsTBQHKPUHFiS7uRB-GecQFSDC68pU" />
              </div>
            </div>
          </div>
        </header>

        {/* Welcome Header */}
        <div className="mb-10">
          <h2 className="text-5xl font-black font-headline tracking-tight text-slate-900 mb-2">Merhaba, Muhammet</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl">
            Özgeçmişiniz şu anda <span className="text-slate-900 font-bold">Fullstack Mühendisliği</span> rollerinin <span className="text-primary font-bold">%82</span>'si ile eşleşiyor.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: ATS Score */}
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <div className="glass-card rounded-[2.5rem] p-10 flex flex-col items-center justify-between h-full shadow-premium border-blue-100/50">
              <div className="w-full">
                <h3 className="text-xl font-extrabold text-slate-900 font-headline mb-10">ATS Puanı</h3>
              </div>
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                  <span className="material-symbols-outlined !text-[200px]" style={{fontVariationSettings: '"wght" 100'}}>find_in_page</span>
                </div>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 256 256">
                  <circle className="text-slate-100" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="14"></circle>
                  <circle className="text-primary" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="158.93" strokeLinecap="round" strokeWidth="14"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl font-black font-headline text-slate-900 leading-none">%77</span>
                  <span className="text-[10px] font-black text-primary tracking-[0.25em] mt-3 uppercase">OPTİMİZE EDİLDİ</span>
                </div>
              </div>
              <div className="mt-10 text-center w-full">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-[13px] font-bold mb-4 border border-red-100">
                  <span className="material-symbols-outlined !text-[18px]">warning</span>
                  Optimizasyon Gerekiyor
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed px-6">
                  Profilinizde bugün 12 iş ilanında bulunan belirli teknik anahtar kelimeler eksik.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Features */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Resume Analysis Area */}
            <div className="glass-card rounded-[2.5rem] p-8 shadow-premium border-slate-200/40 border-2 border-dashed relative group hover:border-primary/40 transition-all">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Preview Card */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/30"></div>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">ONIZLEME_OZGECMIS_V2.PDF</span>
                  </div>
                  <div className="space-y-3 opacity-60">
                    <div className="h-3 w-3/4 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-slate-50 rounded-full"></div>
                    <div className="py-2 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-[9px] font-bold rounded-lg border border-green-100">React.js</span>
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-[9px] font-bold rounded-lg border border-green-100">Node.js</span>
                      <span className="px-2 py-1 bg-red-50 text-red-600 text-[9px] font-bold rounded-lg border border-red-100">Kubernetes</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                  </div>
                  {/* Floating Insight */}
                  <div className="absolute bottom-4 right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-primary/5 max-w-[150px] animate-bounce">
                    <p className="text-[10px] font-black text-red-500 mb-1">Eksik Kelimeler</p>
                    <p className="text-[9px] text-slate-600 font-medium leading-tight">İşverenler Kubernetes deneyimi arıyor.</p>
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-extrabold text-slate-900 font-headline mb-3">Özgeçmiş Analizi</h3>
                  <p className="text-slate-500 font-medium text-[15px] mb-6 leading-relaxed">
                    Hedef rollerinize karşı gerçek zamanlı beceri haritalama ve boşluk analizini görün.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">
                      <span className="material-symbols-outlined !text-[16px]" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                      Eşleşen (14)
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-xs font-bold border border-red-100">
                      <span className="material-symbols-outlined !text-[16px]" style={{fontVariationSettings: '"FILL" 1'}}>cancel</span>
                      Eksik (5)
                    </div>
                  </div>
                  <button className="bg-primary text-white py-4 px-8 rounded-2xl font-bold shadow-xl shadow-primary/25 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">upload_file</span>
                    Yeni Özgeçmiş Yükle
                  </button>
                </div>
              </div>
            </div>

            {/* Job Post Analysis Section */}
            <div className="glass-card rounded-[2.5rem] p-10 shadow-premium border-slate-200/40 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-primary !text-[28px]">link</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-headline text-slate-900 tracking-tight">İş İlanı Analizi</h3>
                    <p className="text-sm text-slate-500 font-semibold mt-0.5">
                      Özgeçmişinizi belirli bir rol için anında optimize edin
                      <div>
                        <br />
                        <div>
                          <span style={{color: 'rgb(67, 70, 84)', fontSize: '15px', fontWeight: '500', backgroundColor: 'rgb(255, 255, 255)'}}>
                            İlgilendiğiniz bir iş ilanının bağlantısını buraya yapıştırın; yapay zekamız mevcut özgeçmişinizle uyumluluğunu anında analiz edip geliştirme önerileri sunsun.
                          </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-primary group-focus-within:scale-110 transition-transform">search</span>
                    </div>
                    <input 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-6 pl-14 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 shadow-sm" 
                      placeholder="İş ilanı URL'sini buraya yapıştırın (LinkedIn, Indeed vb.)" 
                      type="text"
                      value={jobUrl}
                      onChange={(e) => setJobUrl(e.target.value)}
                    />
                  </div>
                  <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                    ANALİZ ET
                  </button>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -right-12 -top-12 opacity-[0.03] pointer-events-none select-none">
                <span className="material-symbols-outlined !text-[240px]" style={{fontVariationSettings: '"wght" 200'}}>travel_explore</span>
              </div>
            </div>

            {/* AI Insights Section */}
            <div className="glass-card rounded-[2.5rem] p-10 border-l-[8px] border-l-primary shadow-premium relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <span className="material-symbols-outlined text-primary !text-[24px]" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
                </div>
                <h3 className="text-2xl font-black font-headline text-slate-900 tracking-tight">Resumise Yapay Zeka Öngörüleri</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* Recommendation 1 */}
                <div className="group bg-white/50 hover:bg-white p-7 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-[0.2em] mb-4">
                    <span className="material-symbols-outlined !text-[16px]" style={{fontVariationSettings: '"FILL" 1'}}>flash_on</span>
                    HIZLI ÇÖZÜM
                  </div>
                  <p className="text-[17px] font-extrabold text-slate-900 mb-2 leading-snug">Deneyim bölümüne Python kütüphanelerini ekleyin</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Django veya Flask'tan bahsetmeniz, "Backend Lead" rolleri için görünürlüğünüzü artıracaktır.</p>
                </div>
                {/* Recommendation 2 */}
                <div className="group bg-white/50 hover:bg-white p-7 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-[0.2em] mb-4">
                    <span className="material-symbols-outlined !text-[16px]" style={{fontVariationSettings: '"FILL" 1'}}>trending_up</span>
                    ETKİ TAVSİYESİ
                  </div>
                  <p className="text-[17px] font-extrabold text-slate-900 mb-2 leading-snug">Son rolünüzde ölçülebilir metrikler kullanın</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">"API geliştirildi" yerine "API gecikmesi %30 azaltıldı" ifadesini kullanın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Interview Bot Widget */}
      <div className="fixed bottom-10 right-10 z-[60] flex flex-col items-end gap-6">
        {/* Popup Card */}
        {showInterviewBot && (
          <div className="glass-card p-8 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-white/80 w-[420px] relative overflow-hidden group hover:border-primary/30 transition-all duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <div className="flex gap-6 items-start relative z-10">
              <div className="shrink-0 relative group/avatar">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-400 rounded-3xl blur opacity-25 group-hover/avatar:opacity-50 transition duration-500"></div>
                <div className="w-16 h-16 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-2 border-white ring-4 ring-primary/5">
                  <img alt="AI Coach" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNwHeh3hGn1aw6BJLuRhpekE9txMLwYVLbiVrfJsnDqVOXlUIAXtE9b0QCN3EmPmp1sq8koHyN8bxB9_ES-hI4T2AzvZgsUG2uG7DOMrImYRF1rV42b6G9yCNpBqnHea6xWWXSRhXTWfYArKf83m2lzZELosIdGZfDwrgYr1KodGjDnSY4dSyU0b5I8a1FkPvraebFda_GvedMNgGAx_S3JMYCLUQvgixRvAAwmyyYChUAgcrmZs_ltHRUfhHAN05OANlb7UalT9I" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white z-20"></div>
              </div>
              <div className="flex-grow pt-1">
                <p className="text-[10px] font-black text-primary mb-2 uppercase tracking-[0.25em]">MÜLAKAT KOÇU</p>
                <p className="text-[17px] font-black text-slate-900 leading-tight tracking-tight">
                  <span className="text-primary font-black">Backend Geliştirici</span> rolü için deneme mülakatına hazır mısınız?
                </p>
              </div>
            </div>
            <div className="mt-8 flex gap-4 relative z-10">
              <button className="flex-grow bg-primary text-white py-4.5 rounded-[1.25rem] text-sm font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10">
                Mülakatı Başlat
              </button>
              <button 
                className="bg-slate-100 p-4.5 rounded-[1.25rem] text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all duration-300 active:scale-90"
                onClick={() => setShowInterviewBot(false)}
              >
                <span className="material-symbols-outlined !text-[20px] font-bold">close</span>
              </button>
            </div>
          </div>
        )}
        {/* Chat Trigger Button */}
        <div className="group relative">
          <div className="absolute -inset-2 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <button 
            className="relative bg-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-500"
            onClick={() => setShowInterviewBot(!showInterviewBot)}
          >
            <span className="material-symbols-outlined !text-[28px]" style={{fontVariationSettings: '"FILL" 1'}}>chat_bubble</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
