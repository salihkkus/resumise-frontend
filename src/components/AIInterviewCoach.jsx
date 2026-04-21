import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AIInterviewCoach = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecording, setIsRecording] = useState(true);
  const [interviewMode, setInterviewMode] = useState('sesli');

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
            <Link to="/ats-kontrolu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">analytics</span>
              <span className="text-[15px] font-semibold">ATS Kontrolü</span>
            </Link>
            <a className="sidebar-active flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-primary font-bold transition-all group" href="#">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>psychology</span>
              <span className="text-[15px]">Yapay Zeka Mülakat Koçu</span>
            </a>
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
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Yapay Zeka Mülakat Koçu</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="/under-construction">Mülakatlar</a>
              <a className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors" href="/under-construction">Ayarlar</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <Link to="/profil" className="ml-2 ring-2 ring-offset-2 ring-primary/10 rounded-full cursor-pointer hover:ring-primary/30 transition-all overflow-hidden w-9 h-9">
                <img alt="User" className="w-full h-full object-cover" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" />
              </Link>
            </div>
          </div>
        </header>

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Yapay Zeka Mülakat Koçu</h1>
          <div className="flex items-center gap-2 mt-2 text-outline">
            <span className="material-symbols-outlined text-sm">psychology</span>
            <p className="text-sm">Aktif mülakat: 5 dakika</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 flex flex-col gap-8 flex-grow">
          {/* 1. Preparation Panel */}
          <section className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-4xl headline-text font-extrabold tracking-tight mb-2">Hazırlık Paneli</h2>
              <p className="text-on-surface-variant max-w-xl">Mülakat simülasyonunu kişiselleştirin. AI koçumuz sizin için en uygun senaryoyu hazırlıyor.</p>
            </div>
            <div className="col-span-12 flex flex-wrap gap-4 items-center justify-end bg-surface-container-low p-4 rounded-full">
              <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm">
                <span className="text-xs font-bold text-on-surface-variant uppercase">Rol:</span>
                <span className="font-semibold text-primary">Junior Backend Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm">
                <span className="text-xs font-bold text-on-surface-variant uppercase">Zorluk:</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                <span className="material-symbols-outlined text-outline-variant text-sm">star</span>
              </div>
              <div className="flex items-center bg-primary p-1 rounded-full text-white">
                <button 
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 ${
                    interviewMode === 'sesli' ? 'bg-white text-primary shadow-sm' : ''
                  }`}
                  onClick={() => setInterviewMode('sesli')}
                >
                  <span className="material-symbols-outlined text-sm">mic</span> Sesli
                </button>
                <button 
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 ${
                    interviewMode === 'metin' ? 'bg-white text-primary shadow-sm' : ''
                  }`}
                  onClick={() => setInterviewMode('metin')}
                >
                  <span className="material-symbols-outlined text-sm">chat_bubble</span> Metin
                </button>
              </div>
            </div>
          </section>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-12 gap-8 flex-grow">
            {/* 2. Active Interview Area */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              <div className="relative flex-grow glass-panel rounded-[2rem] p-12 flex flex-col items-center justify-center text-center overflow-hidden border border-white/20">
                {/* Abstract AI Visual */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-primary" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="10 5"></circle>
                  </svg>
                </div>
                <div className="mb-12">
                  <span className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold tracking-widest uppercase mb-6">Resumise AI Coach</span>
                  <h3 className="text-4xl headline-text font-bold leading-tight max-w-2xl mx-auto text-on-surface">
                    "Bize geçmişteki teknik bir sorunu nasıl analiz ettiğinden ve çözüm sürecinden bahsedebilir misin?"
                  </h3>
                </div>
                {/* Waveform Visualization */}
                <div className="flex items-end justify-center h-24 mb-12 gap-1">
                  <div className="waveform-bar h-8"></div>
                  <div className="waveform-bar h-12"></div>
                  <div className="waveform-bar h-20"></div>
                  <div className="waveform-bar h-14"></div>
                  <div className="waveform-bar h-24"></div>
                  <div className="waveform-bar h-16"></div>
                  <div className="waveform-bar h-10"></div>
                  <div className="waveform-bar h-18"></div>
                  <div className="waveform-bar h-12"></div>
                  <div className="waveform-bar h-20"></div>
                  <div className="waveform-bar h-14"></div>
                  <div className="waveform-bar h-24"></div>
                  <div className="waveform-bar h-16"></div>
                  <div className="waveform-bar h-8"></div>
                  <div className="waveform-bar h-20"></div>
                  <div className="waveform-bar h-14"></div>
                  <div className="waveform-bar h-10"></div>
                </div>
                <button 
                  className="bg-error hover:bg-error/90 text-white flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold transition-transform active:scale-95 shadow-xl shadow-error/20"
                  onClick={() => setIsRecording(!isRecording)}
                >
                  <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>
                    {isRecording ? 'stop_circle' : 'play_circle'}
                  </span>
                  {isRecording ? 'Kaydı Durdur' : 'Kaydı Başlat'}
                </button>
              </div>
            </div>

            {/* 3. Right Analysis Panel */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col gap-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="headline-text font-bold text-xl">Canlı Performans Analizi</h4>
                  <span className="material-symbols-outlined text-primary">insights</span>
                </div>

                {/* Confidence Score Gauge */}
                <div className="relative glass-panel rounded-3xl p-6 border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Güven Puanı</p>
                      <h5 className="text-3xl font-extrabold headline-text">84%</h5>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-xl text-primary">
                      <span className="material-symbols-outlined">ecg_heart</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-[84%]"></div>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-3 italic">Konuşma hızınız ve tonlamanız dengeli görünüyor.</p>
                </div>

                {/* Technical Keyword Tracker */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Teknik Anahtar Kelimeler</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> REST API
                    </span>
                    <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> SQL
                    </span>
                    <span className="bg-outline-variant/20 text-on-surface-variant px-3 py-1.5 rounded-xl text-xs font-bold">
                      Unit Test
                    </span>
                    <span className="bg-outline-variant/20 text-on-surface-variant px-3 py-1.5 rounded-xl text-xs font-bold">
                      Kubernetes
                    </span>
                  </div>
                </div>

                {/* Progress Tracker */}
                <div className="mt-auto pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Mülakat Süreci</p>
                    <span className="font-bold text-sm">4 / 12</span>
                  </div>
                  {/* Career Timeline Node Style */}
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-grow bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-outline-variant rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-outline-variant rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-outline-variant rounded-full"></div>
                    <div className="h-1.5 flex-grow bg-outline-variant rounded-full"></div>
                  </div>
                </div>

                {/* AI Insight Overlay */}
                <div className="glass-panel p-4 rounded-2xl border border-primary/20 shadow-lg">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary-container">auto_awesome</span>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      <strong>AI İpucu:</strong> Çözümünüzden bahsederken karşılaştığınız kısıtlamaları (zaman, bütçe, donanım) vurgulamak sizi daha deneyimli gösterecektir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .waveform-bar {
          width: 3px;
          background: #0052cc;
          border-radius: 4px;
          margin: 0 2px;
        }
      `}</style>
    </div>
  );
};

export default AIInterviewCoach;
