import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobMatches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchScore, setMatchScore] = useState(70);
  const [selectedJob, setSelectedJob] = useState(1);

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechFlow Systems',
      type: 'Hibrit',
      match: 85,
      icon: 'bolt',
      color: 'primary',
      published: '2 gün önce',
      tags: ['REACT', 'TYPESCRIPT'],
      aiInsight: 'Bu ilan, React ve Tailwind tecrübenle tam örtüşüyor.',
      salary: 'Senior Frontend Developer',
      whyMatched: [
        '3 yıl Python ve React deneyimi',
        'Ekip liderliği yetkinliği',
        'Önceki Fintech sektörü tecrübesi'
      ],
      missing: [
        'Docker ve Konteynerizasyon bilgisi eksik',
        'GraphQL tecrübesi aranıyor'
      ],
      aiAdvice: 'Özgeçmişine "Mikroservis Mimari" projesini eklemek ve Docker üzerinden yaptığın dağıtımları belirtmek seçilme şansını %15 artırır.'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Lead',
      company: 'SkyNet Solutions',
      type: 'Uzaktan',
      match: 72,
      icon: 'cloud',
      color: 'secondary',
      published: '5 saat önce',
      tags: ['AWS', 'KUBERNETES'],
      aiInsight: 'AWS deneyimin bir avantaj ancak GCP bilgisi isteniyor.',
      salary: 'Cloud Infrastructure Lead',
      whyMatched: [
        'AWS ve bulut altyapı deneyimi',
        'Kubernetes bilgisi mevcut',
        'DevOps kültürü hakimiyeti'
      ],
      missing: [
        'GCP deneyimi eksik',
        'Terraform bilgisi isteniyor'
      ],
      aiAdvice: 'Google Cloud Platform sertifikası almak ve Terraform projelerini özgeçmişe eklemek seçilme olasılığını %20 artırabilir.'
    }
  ];

  const selectedJobData = jobs.find(job => job.id === selectedJob);

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
            <Link to="/ozgecmislerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">description</span>
              <span className="text-[15px] font-semibold">Özgeçmelerim</span>
            </Link>
            <a className="sidebar-active flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-primary font-bold transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>ads_click</span>
              <span className="text-[15px]">İş Eşleşmeleri</span>
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

      {/* Main Content Area - Adjust margin to match sidebar responsiveness */}
      <main className="flex-grow lg:ml-[18%] lg:min-ml-[280px] lg:max-ml-[360px] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">İş Eşleşmeleri</a>
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
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKqAvIcTyoAFI8hZRlizcgYGGvNdMCtM3WMjnnhIqF17O81ARGhHO6qi7mwUvHDkFcm_ND3Oto7tzua5Dk2bgpDNxG9ExA4svg64LPSowPb372pr7YC45Kuw08aVICbUCW91dOAdtEx2FOFlGBq6LLF1QdE-ChTo3cNWS9Ow_kT4dBtSZFdH6yToCth7ZiamRMkIJ3aufzMJgsiIjAjcByT9Sa4i7o96Yxp-wwqquDcir6NQ83LM3poFyh1BD75yraZSjGo4j4oy0" />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Header & Filter Slider */}
        <section className="mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-6">Sizin İçin En İyi Eşleşmeler</h2>
          <div className="bg-surface-container-low p-6 rounded-3xl flex flex-wrap items-center gap-8 shadow-sm">
            <div className="flex-1 min-w-[300px]">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">target</span>
                  Eşleşme Skoru
                </label>
                <span className="text-primary font-bold text-sm">%{matchScore}+</span>
              </div>
              <input 
                className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-primary" 
                type="range"
                min="50"
                max="100"
                value={matchScore}
                onChange={(e) => setMatchScore(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold shadow-md cursor-pointer">Yazılım</span>
              <span className="px-4 py-2 bg-white text-on-surface-variant rounded-full text-xs font-bold hover:bg-primary-fixed transition-colors cursor-pointer">Uzaktan</span>
              <span className="px-4 py-2 bg-white text-on-surface-variant rounded-full text-xs font-bold hover:bg-primary-fixed transition-colors cursor-pointer">AI Odaklı</span>
              <span className="px-4 py-2 bg-white text-on-surface-variant rounded-full text-xs font-bold hover:bg-primary-fixed transition-colors cursor-pointer">İstanbul</span>
              <button className="ml-4 p-2 rounded-full border border-outline-variant hover:bg-white transition-all">
                <span className="material-symbols-outlined text-lg">tune</span>
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Cards */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className={`glass-card p-6 rounded-[16px] hover:shadow-xl transition-all cursor-pointer ring-2 ring-offset-4 ring-offset-surface ${
                  selectedJob === job.id ? 'ring-primary' : 'ring-transparent'
                }`}
                onClick={() => setSelectedJob(job.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className={`material-symbols-outlined text-${job.color} text-3xl`}>{job.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-lg leading-tight">{job.title}</h3>
                      <p className="text-sm text-on-surface-variant font-medium">{job.company} • {job.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle 
                          className={`text-${job.color}`} 
                          cx="24" 
                          cy="24" 
                          fill="transparent" 
                          r="20" 
                          stroke="currentColor" 
                          strokeDasharray="125.6" 
                          strokeDashoffset={125.6 - (125.6 * job.match / 100)} 
                          strokeWidth="4"
                        ></circle>
                      </svg>
                      <span className="text-[11px] font-extrabold text-primary">%{job.match}</span>
                    </div>
                  </div>
                </div>
                <div className={`bg-${job.color}/5 border-l-4 border-${job.color} p-3 rounded-r-lg mb-4`}>
                  <div className="flex gap-2">
                    <span className={`material-symbols-outlined text-${job.color} text-sm`}>auto_awesome</span>
                    <p className={`text-xs text-${job.color} font-semibold`}>{job.aiInsight}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-on-surface-variant">{job.published} yayımlandı</span>
                  <div className="flex gap-1">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: AI Analysis Panel */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-outline-variant/10 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-2xl">
                    <span className={`material-symbols-outlined text-primary text-4xl`}>{selectedJobData.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline font-extrabold text-2xl">{selectedJobData.company}</h2>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded-full">DOĞRULANMIŞ İŞVEREN</span>
                    </div>
                    <p className="text-on-surface-variant font-medium">{selectedJobData.salary} • ₺120k - ₺180k / ay</p>
                  </div>
                </div>
                <button className="p-3 rounded-xl border border-outline-variant hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Match List */}
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm text-green-600 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    Neden Eşleştin?
                  </h4>
                  <ul className="space-y-3">
                    {selectedJobData.whyMatched.map((reason, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <span className="material-symbols-outlined text-green-500 text-base mt-0.5" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Missing List */}
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm text-tertiary flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">warning</span>
                    Eksiklerin Neler?
                  </h4>
                  <ul className="space-y-3">
                    {selectedJobData.missing.map((missing, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <span className="material-symbols-outlined text-tertiary text-base mt-0.5">error_outline</span>
                        {missing}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AI Advice Card */}
              <div className="glass-card p-6 rounded-[20px] mb-8 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                  </div>
                  <span className="font-headline font-bold text-primary">AI Tavsiyesi</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed font-medium">
                  {selectedJobData.aiAdvice}
                </p>
              </div>

              {/* Action Bar */}
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-extrabold rounded-2xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-3">
                  Başvuruyu Başlat
                  <span className="material-symbols-outlined">rocket_launch</span>
                </button>
                <button className="px-6 py-4 bg-surface-container text-on-surface-variant font-bold rounded-2xl hover:bg-surface-container-high transition-all">
                  Detayları İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual Floating FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">chat_bubble</span>
          <div className="absolute right-20 bg-on-surface text-white px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            AI Kariyer Asistanına Sor
          </div>
        </button>
      </div>
    </div>
  );
};

export default JobMatches;
