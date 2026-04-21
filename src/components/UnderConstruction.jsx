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
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen w-64 bg-[#f3f4f6] dark:bg-[#191c1e] space-y-2 p-4 shrink-0 border-r border-outline-variant/10">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined" data-icon="auto_awesome" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
          </div>
          <div>
            <h2 className="font-['Manrope'] font-extrabold text-xl text-[#0052CC]">Resumise</h2>
            <p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">AI Kariyer Mimarı</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {/* Panel */}
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-[#44474e] dark:text-[#c3c6d6] font-medium hover:bg-[#f8f9fb]/50 dark:hover:bg-[#2d2f31]/50 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Panel</span>
          </Link>
          {/* ÖzgeçmiÅ\x9flerim */}
          <Link to="/ozgecmislerim" className="flex items-center gap-3 px-4 py-3 text-[#44474e] dark:text-[#c3c6d6] font-medium hover:bg-[#f8f9fb]/50 dark:hover:bg-[#2d2f31]/50 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm">Özgeçmişlerim</span>
          </Link>
          {/* IÅ\x9f EÅ\x9fleÅ\x9fmeleri */}
          <Link to="/is-eslesmeleri" className="flex items-center gap-3 px-4 py-3 text-[#44474e] dark:text-[#c3c6d6] font-medium hover:bg-[#f8f9fb]/50 dark:hover:bg-[#2d2f31]/50 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm">İş Eşleşmeleri</span>
          </Link>
          {/* ATS Kontrolü */}
          <Link to="/ats-kontrolu" className="flex items-center gap-3 px-4 py-3 text-[#44474e] dark:text-[#c3c6d6] font-medium hover:bg-[#f8f9fb]/50 dark:hover:bg-[#2d2f31]/50 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined">assignment_turned_in</span>
            <span className="text-sm">ATS Kontrolü</span>
          </Link>
          {/* AI Mülakat Koçu (Active) */}
          <Link to="/ai-mulakat-kocu" className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#2d2f31] text-[#0052CC] dark:text-[#f8f9fb] rounded-xl shadow-sm transition-all duration-200">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>psychology</span>
            <span className="text-sm">AI Mülakat Koçu</span>
          </Link>
        </nav>
        <div className="pt-4 mt-auto border-t border-outline-variant/10 space-y-1">
          <Link to="/yapim-asamasi" className="flex items-center gap-3 px-4 py-3 text-[#44474e] dark:text-[#c3c6d6] hover:bg-[#f8f9fb]/50 dark:hover:bg-[#2d2f31]/50 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="text-sm">Yardım</span>
          </Link>
          <Link to="/yapim-asamasi" className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/20 rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="text-sm">Çıkış Yap</span>
          </Link>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* TopNavBar */}
        <header className="bg-[#f8f9fb]/80 dark:bg-[#191c1e]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full h-16 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#0052CC] dark:text-[#f8f9fb] tracking-tighter">Resumise</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="material-symbols-outlined text-[#44474e] dark:text-[#c3c6d6] hover:text-[#003d9b] p-2 rounded-full" data-icon="notifications">notifications</button>
              <button className="material-symbols-outlined text-[#44474e] dark:text-[#c3c6d6] hover:text-[#003d9b] p-2 rounded-full" data-icon="settings">settings</button>
            </div>
            <div className="h-6 w-[1px] bg-outline-variant/30"></div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
              <img alt="User profile" data-alt="Close up portrait of a professional man in his early 30s" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbuWBi-cW21IvvacGnNBeqikkS-MZWktwZnyu13yOnq05tUBqIhLdcfVjEHTcRHAwGrBieKZI9CGmBhg0qOmyD-gPq8qOSLsy7zXK_Vzg1mNKmKxYhHJp5d5P7E0_wIYrbg3WJ6UcE3HO9-Owc8pnpmXGU8p3TtrdLHJbCy8OsZN6kgrQGvzuIUVkn_V4dSk4kNa4dpkwAH_VwoNK-F8Y_xMNZWWApVqsTWPouC1AworKxIi3tm4J-7BF8FWgiF7xu8KYHqz1UiHc"/>
            </div>
          </div>
        </header>
        
        {/* Main Canvas */}
        <main className="flex-1 relative flex items-center justify-center p-8 overflow-y-auto overflow-x-hidden">
          {/* Abstract Background Decorations */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
            {/* 3D Centerpiece */}
            <div className="relative mb-12 w-full max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent rounded-full blur-3xl scale-75"></div>
              <div className="relative group">
                <img alt="3D Illustration" className="w-full h-auto max-h-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,82,204,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfRO-k6qQw_0VDUtqCtK80vOm1yj71oc4zdARDVzaBt2-E49Y9qVlS55e-hZnz_mQJxy4jfjMKmhFiz3esMJOqQRDUc1ddaW40YMNWGDbUOJsLDRfB0u3CKB8ju7GMgGeMUgh6KHrJ-bigKhu80y5a5HGULC3T9Kh_laf7XPDfuAXwZ9iVMnc_0FcOYYW9GY3wlVyYZJm3n5t8q30UfzQ_GF5GkfzZ47coh08nSah0yM2c002WIdRSEijilINKSkcOCSiMaPmiBU"/>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-4 mb-10 max-w-2xl">
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
            <Link to="/" className="mt-12 flex items-center gap-2 text-primary font-bold hover:text-primary-container transition-colors py-3 px-6 rounded-full hover:bg-primary-fixed/30 active:scale-95 transition-all">
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
              <span>Panele Geri Dön</span>
            </Link>
          </div>
        </main>
      </div>
      
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
