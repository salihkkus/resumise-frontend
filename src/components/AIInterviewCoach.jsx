import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AIInterviewCoach = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecording, setIsRecording] = useState(true);
  const [interviewMode, setInterviewMode] = useState('sesli');

  return (
    <div className="text-on-surface">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f4f6] dark:bg-slate-900 flex flex-col py-8 px-4 gap-y-2 shadow-[40px_0_60px_-15px_rgba(25,28,30,0.04)] z-50">
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#191c1e] dark:text-slate-100 font-headline leading-none">Resumise</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Dijital Mimar</p>
          </div>
        </div>
        <nav className="flex-grow space-y-1">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#191c1e] hover:bg-white/50 transition-all font-semibold text-sm font-headline translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Panel</span>
          </Link>
          <Link to="/ozgecmislerim" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#191c1e] hover:bg-white/50 transition-all font-semibold text-sm font-headline translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="description">description</span>
            <span>Özgeçmişlerim</span>
          </Link>
          <Link to="/is-eslesmeleri" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#191c1e] hover:bg-white/50 transition-all font-semibold text-sm font-headline translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="work_history">work_history</span>
            <span>İş Eşleşmeleri</span>
          </Link>
          <Link to="/ats-kontrolu" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#191c1e] hover:bg-white/50 transition-all font-semibold text-sm font-headline translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
            <span>ATS Kontrolü</span>
          </Link>
          {/* Active Navigation */}
          <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-[#0052CC] rounded-lg shadow-sm font-bold text-sm font-headline translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="psychology" style={{fontVariationSettings: '"FILL" 1'}}>psychology</span>
            <span>AI Mülakat Koçu</span>
          </a>
        </nav>
        <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/10">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-[#191c1e] font-headline text-sm" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Ayarlar</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-[#191c1e] font-headline text-sm" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span>Çıkış Yap</span>
          </a>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-8 h-16 bg-[#f8f9fb] dark:bg-slate-950 font-['Inter'] text-sm tracking-tight z-40 sticky top-0">
          <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 w-96">
            <span className="material-symbols-outlined text-outline mr-2" data-icon="search">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none" 
              placeholder="Arama yap..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <button className="material-symbols-outlined hover:bg-[#f3f4f6] p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
              <button className="material-symbols-outlined hover:bg-[#f3f4f6] p-2 rounded-full transition-colors" data-icon="help">help</button>
            </div>
            <div className="h-8 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-on-surface">Kerem Can</span>
              <img 
                alt="Kullanıcı Profili" 
                className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" 
                data-alt="headshot of a young professional man with a friendly smile, clean-cut, against a soft corporate background" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1N5Efq9zF2ZOMb2tokOMLYQyQZp5uUWXov-zj1NiCMqBU_RBWqZBP50d9TULuCayvOrO12ODWDOXA7qtM2TFzfmNxCFSutEjGQVPaR4BWZN2BBNQmrXKZE0CmZcD42tF3iTeWxWoLjnvz40i1SnCH68lxftnTY_HDQpDBqwj7Mas3FuGSuJpRPnYpk3wGdL_k3Dxi5SssobEoL3qrhupsaOWx5aEP3DoXV6yQ9OqmLIEk4yB2M3eH9P0agiPtdCAf5qpoiycAo0"
              />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
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
                <span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                <span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                <span className="material-symbols-outlined text-outline-variant text-sm" data-icon="star">star</span>
              </div>
              <div className="flex items-center bg-primary p-1 rounded-full text-white">
                <button 
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 ${
                    interviewMode === 'sesli' ? 'bg-white text-primary shadow-sm' : ''
                  }`}
                  onClick={() => setInterviewMode('sesli')}
                >
                  <span className="material-symbols-outlined text-sm" data-icon="mic">mic</span> Sesli
                </button>
                <button 
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 ${
                    interviewMode === 'metin' ? 'bg-white text-primary shadow-sm' : ''
                  }`}
                  onClick={() => setInterviewMode('metin')}
                >
                  <span className="material-symbols-outlined text-sm" data-icon="chat_bubble">chat_bubble</span> Metin
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
                  <span className="material-symbols-outlined" data-icon="stop_circle" style={{fontVariationSettings: '"FILL" 1'}}>
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
                  <span className="material-symbols-outlined text-primary" data-icon="insights">insights</span>
                </div>

                {/* Confidence Score Gauge */}
                <div className="relative glass-panel rounded-3xl p-6 border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Güven Puanı</p>
                      <h5 className="text-3xl font-extrabold headline-text">84%</h5>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-xl text-primary">
                      <span className="material-symbols-outlined" data-icon="ecg_heart">ecg_heart</span>
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
                      <span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span> REST API
                    </span>
                    <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span> SQL
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
                    <span className="material-symbols-outlined text-primary-container" data-icon="auto_awesome">auto_awesome</span>
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
