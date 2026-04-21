import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle notification subscription
    console.log('Notify me:', email);
    setEmail('');
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex overflow-hidden w-full">
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
      <main className="flex-grow lg:ml-[18%] p-4 lg:p-6 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-6">
          <div className="flex-grow"></div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Yapım Aşamasında</a>
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

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-8 overflow-y-auto overflow-x-hidden">
          {/* Abstract Background Decorations */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
            {/* 3D Centerpiece */}
            <div className="relative mb-8 w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent rounded-full blur-3xl scale-75"></div>
              <div className="relative group">
                <img alt="3D Illustration" className="w-full h-auto max-h-[300px] object-contain drop-shadow-[0_20px_50px_rgba(0,82,204,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfRO-k6qQw_0VDUtqCtK80vOm1yj71oc4zdARDVzaBt2-E49Y9qVlS55e-hZnz_mQJxy4jfjMKmhFiz3esMJOqQRDUc1ddaW40YMNWGDbUOJsLDRfB0u3CKB8ju7GMgGeMUgh6KHrJ-bigKhu80y5a5HGULC3T9Kh_laf7XPDfuAXwZ9iVMnc_0FcOYYW9GY3wlVyYZJm3n5t8q30UfzQ_GF5GkfzZ47coh08nSah0yM2c002WIdRSEijilINKSkcOCSiMaPmiBU"/>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-4 mb-8 max-w-2xl">
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface tracking-tight leading-tight">
                Bu Özellik <span className="text-[#0052CC]">Yolda!</span>
              </h1>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed px-4">
                Kariyerini bir üst seviyeye taşıyacak bu özellik çok yakında burada olacak. Hazır olduğunda sana haber vermemizi ister misin?
              </p>
            </div>
            
            {/* Subscription Card */}
            <form onSubmit={handleSubmit} className="glass-effect rounded-full p-2 pl-6 shadow-2xl shadow-primary/10 border border-white/40 flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
              <input 
                className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline font-medium text-base h-12 w-full" 
                placeholder="E-posta adresinizi girin..." 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="bg-primary-container text-white px-8 h-12 rounded-full font-bold whitespace-nowrap shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2" type="submit">
                <span>Bana Haber Ver</span>
                <span className="material-symbols-outlined text-sm" data-icon="send">send</span>
              </button>
            </form>
            
            {/* Secondary Action */}
            <Link to="/" className="mt-6 flex items-center gap-2 text-primary font-bold hover:text-primary-container transition-colors py-3 px-6 rounded-full hover:bg-primary-fixed/30 active:scale-95 transition-all">
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
              <span>Panele Geri Dön</span>
            </Link>
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation Overlay */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-outline-variant/10 px-6 py-3 flex justify-around items-center z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#44474e]">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Panel</span>
        </Link>
        <Link to="/ozgecmislerim" className="flex flex-col items-center gap-1 text-[#44474e]">
          <span className="material-symbols-outlined">description</span>
          <span className="text-[10px] font-bold">CV</span>
        </Link>
        <Link to="/ai-mulakat-kocu" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>psychology</span>
          <span className="text-[10px] font-bold">AI Koç</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-[#44474e]">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold">Ayarlar</span>
        </button>
      </nav>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;
