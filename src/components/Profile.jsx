import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notifications, setNotifications] = useState({
    highMatch: true,
    newsletter: false,
    interviewReminders: true
  });

  return (
    <div className="bg-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-8 px-4 bg-[#f8f9fb] dark:bg-slate-950 w-64 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-xl font-bold tracking-tight text-[#003d9b] dark:text-[#4d90ff]">Resumise</h1>
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-1">Kariyer Mimar</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl group" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Panel</span>
          </Link>
          <Link to="/ozgecmislerim" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl group" href="#">
            <span className="material-symbols-outlined">description</span>
            <span className="font-medium text-sm">Özgeçmişlerim</span>
          </Link>
          <Link to="/is-eslesmeleri" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl group" href="#">
            <span className="material-symbols-outlined">work_history</span>
            <span className="font-medium text-sm">İş Eşleşmeleri</span>
          </Link>
          {/* Active Tab: Profil */}
          <a className="flex items-center gap-3 px-4 py-3 text-[#0052CC] dark:text-white font-bold border-r-4 border-[#0052CC] bg-[#f3f4f6] dark:bg-slate-900 rounded-l-xl opacity-80 transition-opacity" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>person</span>
            <span className="font-bold text-sm">Profil</span>
          </a>
          <Link to="/ats-kontrolu" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl group" href="#">
            <span className="material-symbols-outlined">fact_check</span>
            <span className="font-medium text-sm">ATS Kontrolü</span>
          </Link>
          <Link to="/ai-mulakat-kocu" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl group" href="#">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-medium text-sm">Yapay Zeka Mülakat Koçu</span>
          </Link>
        </nav>
        <div className="mt-auto space-y-1">
          <div className="p-4 bg-primary-container/10 rounded-2xl mb-6">
            <p className="text-xs font-bold text-primary mb-2">Pro'ya Yükselt</p>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">Sınırsız AI analizi ve premium şablonlar için geçiş yapın.</p>
          </div>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Ayarlar</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-[#f3f4f6] dark:hover:bg-slate-800 transition-colors duration-200 rounded-xl" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-medium text-sm">Yardım Merkezi</span>
          </a>
        </div>
      </aside>

      {/* TopAppBar */}
      <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-[#ffffff]/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm shadow-slate-200/50">
        <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
          <span className="material-symbols-outlined text-outline text-sm">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2" 
            placeholder="İş, yetenek veya döküman ara..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 items-center">
            <a 
              className={`text-sm py-1 ${activeTab === 'profile' ? 'text-[#0052CC] font-bold border-b-2 border-[#0052CC]' : 'text-slate-600 hover:text-[#003d9b] transition-all'}`} 
              href="#"
              onClick={() => setActiveTab('profile')}
            >
              Profil
            </a>
            <a 
              className={`text-sm py-1 ${activeTab === 'activity' ? 'text-[#0052CC] font-bold border-b-2 border-[#0052CC]' : 'text-slate-600 hover:text-[#003d9b] transition-all'}`} 
              href="#"
              onClick={() => setActiveTab('activity')}
            >
              Aktivite
            </a>
            <a 
              className={`text-sm py-1 ${activeTab === 'billing' ? 'text-[#0052CC] font-bold border-b-2 border-[#0052CC]' : 'text-slate-600 hover:text-[#003d9b] transition-all'}`} 
              href="#"
              onClick={() => setActiveTab('billing')}
            >
              Faturalandırma
            </a>
          </div>
          <div className="h-6 w-px bg-outline-variant/30"></div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                alt="Muhammet" 
                className="w-full h-full object-cover" 
                data-alt="Close-up portrait of a young professional man with a confident expression in a clean studio setting with soft lighting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAqGCd0anH_PdEKdoXmLIkvlTJ8ns9FaKEBMyx-Qy2FHi8awrGCOArHEigLrV8-KspJjIvOU3_WktPhtLixy0xZfDexcwoxcRWbuY1w3KaZm2jYGTQ1bWuIQaZwm1YaxHjXDRCcxNI2yLwgnr83jGlHKdTw6VOGzt2QOSrHXgowofUaI1U2woqDhXmNKOIuGKoQy_b8MrBUUQrMKEHcryeKn42sNSJzWw9qIFC1tbVuDV7TfHepKvZMYmRot3IpWmPEPhyNlmOUdQ"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 pb-12 px-10 min-h-screen">
        {/* Header Section (Profile Hero) */}
        <section className="flex flex-col md:flex-row items-end gap-8 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img 
                alt="Muhammet Profile" 
                className="w-full h-full object-cover" 
                data-alt="Professional headshot of a young man with dark hair and a slight smile, studio lighting, soft gray background" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3ZGojVK2_Ognf6Gd6jOKNSCJyPF3ic9_A1hGzrFRDyCHZcOHRkamtX7V7jaVW8SaaTyAXpIvNt9a6qUOGVrVrNGCKVu4YUF41jpOgzTxtpK9jwe8SHNAfVDW6APRJS-9SHk7hecYaWOQav-V8lVncfTO95xgBts0DrdPZOfPT-mBUEOMhhq0PrNdOFN3UGzSWI1Xx0haYb1x6Kfgoj-RTYUJkIu2hnSRoX1yjGgtjx5nLkvzEwkg2klgk8qHeJFCMKxnsnOg0FA"
              />
            </div>
            <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
          </div>
          <div className="flex-1 pb-2">
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-1">Muhammet</h1>
            <p className="text-lg text-on-surface-variant font-medium">Bilgisayar Mühendisliği Öğrencisi</p>
            <div className="flex items-center gap-2 text-outline mt-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-sm font-medium">İstanbul, Türkiye</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">12</span>
              <span className="text-[10px] font-bold text-outline-variant uppercase tracking-wider text-center">Tamamlanan Mülakatlar</span>
            </div>
            <div className="bg-surface-container-low px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">45</span>
              <span className="text-[10px] font-bold text-outline-variant uppercase tracking-wider text-center">Eşleşen İşler</span>
            </div>
            <div className="bg-primary/5 border border-primary/10 px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">%88</span>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider text-center">ATS Ortalama Skoru</span>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Personal Info */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-outline-variant/5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person_outline</span>
                  Kişisel Bilgiler
                </h2>
                <button className="text-primary text-sm font-bold hover:underline">Düzenle</button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">E-posta</label>
                  <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">muhammet@example.com</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Telefon</label>
                  <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">+90 5XX XXX XX XX</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">LinkedIn</label>
                  <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">linkedin.com/in/muhammet</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">GitHub</label>
                  <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">github.com/muhammet</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Kariyer Özeti</label>
                  <span className="bg-primary-fixed text-primary px-2 py-0.5 rounded text-[10px] font-bold">AI ile Geliştirildi</span>
                </div>
                <div className="p-6 bg-surface-container-lowest border-l-4 border-primary rounded-r-2xl text-sm leading-relaxed text-on-surface-variant italic">
                  "Modern web teknolojileri üzerine uzmanlaşmış, ölçeklenebilir React uygulamaları geliştirme konusunda deneyimli bir Bilgisayar Mühendisliği öğrencisiyim. Veri bilimi ve makine öğrenmesi algoritmalarına ilgi duyuyor, projelerimde veri odaklı yaklaşımlar sergiliyorum."
                </div>
              </div>
              <div className="mt-8">
                <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1 block mb-4">Hedef Pozisyonlar</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full">React Developer</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full">Data Scientist</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full">Frontend Architect</span>
                  <button className="px-4 py-2 border-2 border-dashed border-outline-variant text-outline-variant hover:border-primary hover:text-primary rounded-full transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">add</span>
                    <span className="text-xs font-bold">Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Analysis */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* AI Skills Radar Card */}
            <div className="glass-card rounded-[24px] p-8 overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Yapay Zeka Yetkinlik Grafiği</h2>
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
                </div>
                {/* Mock Radar Chart using CSS Shapes */}
                <div className="flex justify-center my-10 relative">
                  <div className="w-48 h-48 border-2 border-outline-variant/30 rounded-full flex items-center justify-center">
                    <div className="w-36 h-36 border-2 border-outline-variant/20 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-outline-variant/10 rounded-full"></div>
                    </div>
                    {/* The "Chart" Content */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-12" viewBox="0 0 100 100">
                      <polygon fill="rgba(0, 82, 204, 0.2)" points="50,15 85,45 75,85 25,85 15,45" stroke="#0052CC" strokeWidth="2"></polygon>
                      <circle cx="50" cy="15" fill="#0052CC" r="2"></circle>
                      <circle cx="85" cy="45" fill="#0052CC" r="2"></circle>
                      <circle cx="75" cy="85" fill="#0052CC" r="2"></circle>
                      <circle cx="25" cy="85" fill="#0052CC" r="2"></circle>
                      <circle cx="15" cy="45" fill="#0052CC" r="2"></circle>
                    </svg>
                  </div>
                  <span className="absolute top-0 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Frontend</span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Problem Solving</span>
                  <span className="absolute bottom-0 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Communication</span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Backend</span>
                </div>
                <div className="mt-8 space-y-6">
                  <h3 className="text-sm font-bold text-on-surface">Beceri Envanteri</h3>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase mb-3">Teknik Yetenekler</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">TypeScript</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Python</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Docker</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase mb-3">Yumuşak Yetenekler</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Ekip Çalışması</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Analitik Düşünme</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Sunum Becerisi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Settings & Toggles */}
        <section className="mt-12">
          <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-outline-variant/5">
            <h2 className="text-xl font-bold mb-8">Hesap Ayarları & Bildirimler</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Security / Password */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">lock_reset</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Şifre Değiştir</p>
                    <p className="text-xs text-outline font-medium">Hesap güvenliğinizi korumak için periyodik olarak güncelleyin.</p>
                  </div>
                  <button className="bg-white border border-outline-variant/30 text-xs font-bold px-4 py-2 rounded-xl hover:bg-surface-container-low transition-colors">Yönet</button>
                </div>
                <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">shield_person</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">İki Faktörlü Doğrulama</p>
                    <p className="text-xs text-outline font-medium">SMS veya Authenticator uygulaması ile ek güvenlik.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input 
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary right-4" 
                      id="toggle2fa" 
                      name="toggle" 
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer" htmlFor="toggle2fa"></label>
                  </div>
                </div>
              </div>

              {/* Notification Toggles */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <div>
                    <p className="text-sm font-bold">Yeni bir %90 eşleşme olduğunda haber ver</p>
                    <p className="text-xs text-outline font-medium">Profilinize uygun fırsatları kaçırmayın.</p>
                  </div>
                  <div className="flex items-center">
                    <input 
                      checked={notifications.highMatch}
                      className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" 
                      type="checkbox"
                      onChange={(e) => setNotifications({...notifications, highMatch: e.target.checked})}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <div>
                    <p className="text-sm font-bold">E-bülten ve Kariyer İpuçları</p>
                    <p className="text-xs text-outline font-medium">AI tabanlı haftalık özet raporlar.</p>
                  </div>
                  <div className="flex items-center">
                    <input 
                      checked={notifications.newsletter}
                      className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" 
                      type="checkbox"
                      onChange={(e) => setNotifications({...notifications, newsletter: e.target.checked})}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <p className="text-sm font-bold">Mülakat Hatırlatıcıları</p>
                    <p className="text-xs text-outline font-medium">Yaklaşan görüşmeleriniz için anlık uyarılar.</p>
                  </div>
                  <div className="flex items-center">
                    <input 
                      checked={notifications.interviewReminders}
                      className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" 
                      type="checkbox"
                      onChange={(e) => setNotifications({...notifications, interviewReminders: e.target.checked})}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-end gap-4">
              <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-xl hover:opacity-80 transition-opacity">Değişiklikleri Geri Al</button>
              <button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">Ayarları Kaydet</button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(195, 198, 214, 0.15);
        }
        .toggle-checkbox:checked {
          right: 0;
          border-color: #0052CC;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #0052CC;
        }
      `}</style>
    </div>
  );
};

export default Profile;
