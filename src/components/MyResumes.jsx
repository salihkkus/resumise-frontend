import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyResumes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('personal');
  const [companyName, setCompanyName] = useState('Teknoloji A.Ş.');
  const [position, setPosition] = useState('Kıdemli Satış Temsilcisi');
  const [jobDescription, setJobDescription] = useState('Satış yaptım');
  const [showAISuggestion, setShowAISuggestion] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [selectedColor, setSelectedColor] = useState('primary');

  const resumes = [
    {
      id: 1,
      title: 'Ürün Müdürü 2024',
      lastEdited: '2 gün önce',
      preview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqkhHg7mbHYUAMK4CHx2bhdaKFAECI7AA_TVm2uysC5rbZ31CpPGWOfVvFBvC7BbnSp-2TNTdqcsWAErZsiZgQhDBPdKlcH9BE-W6J9RybAL5mCjzNoVRkiusOvY25JOyOg01G8CmHO_zePqLR_dkLSRnprVKMFYwcPvBhuoZRHlrc74uLt-bsaCgHwneLKDgcnlSgCTYXPVEmwq7RhNq1JvWchpr0FvWs-kdpeC4-tEl4hw2JQnoi-ggoM01mTJ_i2WX0FhFFu0I'
    },
    {
      id: 2,
      title: 'Yazılım Mühendisi',
      lastEdited: '1 hafta önce',
      preview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJe4Z0mUvLu08BAdhNWbHjXE0vzguNBZ2fOGD6uP67sk4XrAGBJgvUHQdeCulVUGfuWyHdMi6N_Pb_BR6yIhPa2-N-SBQuYnp8KnwukuFpwyj1K-6wSx5fkkWxDK3y_Nn_mdmhPsHCWc8KxM0d0c1iUxKkfqBKaEHSu63SyQo1cvY44PrOoUQwts6VLoILxm9zMgioiDEP4fqs3tIJpXzCVYowLtoCLuGU9b70ggiDl9_LxyJCu7rlvOMOGtHWRzIH809TO76HQ7M'
    }
  ];

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
            <a className="sidebar-active flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-primary font-bold transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>description</span>
              <span className="text-[15px]">Özgeçmişlerim</span>
            </a>
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

      {/* Main Content Area - Adjust margin to match sidebar responsiveness */}
      <main className="flex-grow lg:ml-[18%] lg:min-ml-[280px] lg:max-ml-[360px] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Özgeçmişlerim</a>
              <Link to="/yapim-asamasi" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">Şablonlar</Link>
              <Link to="/yapim-asamasi" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">İş İlanları</Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editor & History */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">
            {/* Section: Saved Resumes */}
            <section>
              <h1 className="text-4xl font-headline font-extrabold tracking-tight mb-8">Özgeçmişlerim</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
                  <div className="h-32 mb-4 bg-slate-100 rounded-2xl overflow-hidden relative">
                    <img alt="Resume Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqkhHg7mbHYUAMK4CHx2bhdaKFAECI7AA_TVm2uysC5rbZ31CpPGWOfVvFBvC7BbnSp-2TNTdqcsWAErZsiZgQhDBPdKlcH9BE-W6J9RybAL5mCjzNoVRkiusOvY25JOyOg01G8CmHO_zePqLR_dkLSRnprVKMFYwcPvBhuoZRHlrc74uLt-bsaCgHwneLKDgcnlSgCTYXPVEmwq7RhNq1JvWchpr0FvWs-kdpeC4-tEl4hw2JQnoi-ggoM01mTJ_i2WX0FhFFu0I" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <h3 className="font-bold text-on-surface">Ürün Müdürü 2024</h3>
                  <p className="text-xs text-slate-400 mt-1">Son Düzenleme: 2 gün önce</p>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 text-[11px] font-bold py-2 bg-surface-container-high rounded-lg hover:bg-primary-container hover:text-white transition-colors">Düzenle</button>
                    <button className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
                  <div className="h-32 mb-4 bg-slate-100 rounded-2xl overflow-hidden relative">
                    <img alt="Resume Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJe4Z0mUvLu08BAdhNWbHjXE0vzguNBZ2fOGD6uP67sk4XrAGBJgvUHQdeCulVUGfuWyHdMi6N_Pb_BR6yIhPa2-N-SBQuYnp8KnwukuFpwyj1K-6wSx5fkkWxDK3y_Nn_mdmhPsHCWc8KxM0d0c1iUxKkfqBKaEHSu63SyQo1cvY44PrOoUQwts6VLoILxm9zMgioiDEP4fqs3tIJpXzCVYowLtoCLuGU9b70ggiDl9_LxyJCu7rlvOMOGtHWRzIH809TO76HQ7M" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <h3 className="font-bold text-on-surface">Yazılım Mühendisi</h3>
                  <p className="text-xs text-slate-400 mt-1">Son Düzenleme: 1 hafta önce</p>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 text-[11px] font-bold py-2 bg-surface-container-high rounded-lg hover:bg-primary-container hover:text-white transition-colors">Düzenle</button>
                    <button className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
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
              {/* A4 Mockup */}
              <div className="a4-preview bg-white rounded-xl overflow-hidden p-12 border border-slate-100 flex flex-col gap-8">
                <header className="flex justify-between items-start border-b-2 border-primary pb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-on-surface">SALİH KARAKUŞ</h1>
                    <p className="text-primary font-bold text-sm mt-1">JUNIOR YAZILIM MÜHENDİSİ</p>
                  </div>
                  <div className="text-[10px] text-right text-slate-500 leading-tight">
                    <p>salih@example.com</p>
                    <p>+90 555 000 00 00</p>
                    <p>Yalova, Türkiye</p>
                  </div>
                </header>
                <section>
                  <h2 className="text-xs font-black tracking-widest text-slate-400 mb-4 uppercase">PROFESYONEL ÖZET</h2>
                  <p className="text-[11px] leading-relaxed text-slate-700">
                    SaaS ürün geliştirme süreçlerinde 8 yılı aşkın deneyime sahip, kullanıcı odaklı düşünen ve veriyle strateji kuran bir lider. Karmaşık problemleri basit çözümlere dönüştürme konusunda uzmanlaşmış, çevik metodolojilere hakim ekip yöneticisi.
                  </p>
                </section>
                <section>
                  <h2 className="text-xs font-black tracking-widest text-slate-400 mb-4 uppercase">DENEYİM</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-bold">Teknoloji A.Ş.</h3>
                        <span className="text-[9px] font-bold text-slate-400">2021 — Günümüz</span>
                      </div>
                      <p className="text-[10px] text-primary font-bold mb-2">Kıdemli Ürün Yöneticisi</p>
                      <ul className="list-disc list-inside text-[10px] text-slate-600 flex flex-col gap-1 pl-1">
                        <li>Yıllık satış hedeflerini %20 aşarak bölge birincisi oldum.</li>
                        <li>Ürün roadmap süreçlerini %30 hızlandıran yeni bir çalışma modeli kurguladım.</li>
                        <li>Pazar analizleri ile müşteri segmentasyonunu yeniden yapılandırarak churn oranını %15 düşürdüm.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-xs font-black tracking-widest text-slate-400 mb-4 uppercase">EĞİTİM</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-bold">İstanbul Teknik Üniversitesi</h3>
                        <span className="text-[9px] font-bold text-slate-400">2012 — 2016</span>
                      </div>
                      <p className="text-[10px] text-primary font-bold">İşletme Mühendisliği</p>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-xs font-black tracking-widest text-slate-400 mb-4 uppercase">YETKİNLİKLER</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-50 text-[9px] px-2 py-1 rounded-md font-bold text-slate-600 border border-slate-100">Ürün Stratejisi</span>
                    <span className="bg-slate-50 text-[9px] px-2 py-1 rounded-md font-bold text-slate-600 border border-slate-100">Agile/Scrum</span>
                    <span className="bg-slate-50 text-[9px] px-2 py-1 rounded-md font-bold text-slate-600 border border-slate-100">Data Analytics</span>
                    <span className="bg-slate-50 text-[9px] px-2 py-1 rounded-md font-bold text-slate-600 border border-slate-100">UX Research</span>
                    <span className="bg-slate-50 text-[9px] px-2 py-1 rounded-md font-bold text-slate-600 border border-slate-100">Stakeholder Management</span>
                  </div>
                </section>
                <div className="mt-auto border-t border-slate-50 pt-4 flex justify-between items-center opacity-30">
                  <span className="text-[8px] font-bold">Resumise AI Builder</span>
                  <span className="text-[8px]">Sayfa 1 / 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
  );
};

export default MyResumes;
