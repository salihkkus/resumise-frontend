import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-hidden">
      {/* Top Navigation */}
      <header className="w-full absolute top-0 left-0 z-50 flex justify-between items-center w-full px-8 py-6">
        <div className="text-2xl font-black tracking-tighter text-white">Resumise</div>
        <div className="hidden md:flex items-center gap-6">
          <span className="font-inter text-xs uppercase tracking-widest text-white/70">Henüz hesabınız yok mu?</span>
          <button className="bg-surface-container-lowest/10 text-white px-6 py-2 rounded-full font-manrope font-bold text-sm tracking-tight border border-white/20 hover:bg-white/20 transition-all">
            Kaydol
          </button>
        </div>
      </header>
      
      <main className="flex h-screen w-full">
        {/* Left Side: Visual Anchor */}
        <section className="hidden lg:flex flex-col relative w-1/2 h-full bg-primary-container overflow-hidden justify-center items-center p-20">
          {/* Background Decoration */}
          <div className="absolute inset-0 neural-pattern opacity-40"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-fixed/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-on-primary-container/10 blur-[100px] rounded-full"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <h1 className="font-headline font-extrabold text-5xl text-white leading-tight mb-8 tracking-tighter">
              Kariyer Yolculuğunuzu Yapay Zeka ile Şekillendir
            </h1>
            <p className="text-on-primary-container text-lg opacity-90 font-light leading-relaxed mb-12">
              Geleceğin iş dünyasında bir adım önde olun. Veri odaklı analizlerle özgeçmişinizi optimize edin.
            </p>
            
            {/* Floating Glassmorphism Component */}
            <div className="glass-card p-6 rounded-full border border-white/20 flex items-center gap-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
              </div>
              <div>
                <div className="flex items-end gap-2">
                  <span className="text-primary font-headline font-extrabold text-3xl">ATS Skoru: %95</span>
                </div>
                <p className="text-secondary font-medium text-sm">Özgeçmişiniz başarıyla optimize edildi</p>
              </div>
            </div>
          </div>
          
          {/* Visual Asset - Abstract Background for Depth */}
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay grayscale" data-alt="abstract neural network connections with glowing nodes and data points in deep blue space"></div>
        </section>
        
        {/* Right Side: Login Form */}
        <section className="w-full lg:w-1/2 h-full bg-surface-container-lowest flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md flex flex-col">
            {/* Branding for Mobile */}
            <div className="lg:hidden mb-12">
              <span className="text-3xl font-black tracking-tighter text-primary">Resumise</span>
            </div>
            
            <div className="mb-10">
              <h2 className="font-headline font-extrabold text-4xl text-on-surface mb-3 tracking-tight">Tekrar Hoş Geldin!</h2>
              <p className="text-secondary font-medium">Hesabınıza giriş yaparak kariyerinizi optimize etmeye devam et.</p>
            </div>
            
            {/* Social Login */}
            <button className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-surface-container-lowest border border-outline-variant/30 rounded-full shadow-sm hover:bg-surface-container transition-all group">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKUBliANBG4vAgC63UpjKoqpb5kq37TjwgT8-k-AxvayaSRIxtqmXK3xweCEgA6bv-NzRs7uu359dldPqSRueY-JQwqB6nVuGCQZGf56nkeP_2-RRXvYy-un4uuScifEpo9sG4Yyg7t62_gRXWAa7BpD8cQYhyBfPRNRWwake0J_L6X6z3U0RtJ7BN0J-ozz4iIzGnt3Rnfjk1lx4S3JLcqsbthsDB5ut_KYIDcUNZ5wYPjzQSrO2kmPzMN1ecq4wTIMFJthRQHMI"/>
              <span className="text-on-surface font-semibold text-sm">Google ile devam et</span>
            </button>
            
            <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-1 bg-outline-variant/20"></div>
              <span className="text-outline text-xs uppercase tracking-widest font-semibold">Veya e-posta ile giriş yap</span>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1" htmlFor="email">E-posta</label>
                <div className="relative">
                  <input 
                    className="w-full px-6 py-4 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/50 font-medium" 
                    id="email" 
                    name="email" 
                    placeholder="ornek@resumise.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary" htmlFor="password">Şifre</label>
                  <a className="text-xs font-bold text-primary hover:text-primary-container transition-colors" href="#">Şifremi Unuttum</a>
                </div>
                <div className="relative">
                  <input 
                    className="w-full px-6 py-4 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/50 font-medium" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                Giriş Yap
              </button>
            </form>
            
            {/* Footer Links */}
            <footer className="mt-12 flex flex-col items-center gap-4">
              <p className="text-secondary text-sm">
                Henüz bir hesabınız yok mu? <Link to="/kayit" className="text-primary font-bold">Kayıt Ol</Link>
              </p>
              <div className="flex gap-6 mt-4">
                <a className="font-inter text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-all" href="#">Gizlilik Politikası</a>
                <a className="font-inter text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-all" href="#">Hizmet Şartları</a>
              </div>
            </footer>
          </div>
        </section>
      </main>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .neural-pattern {
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 32px 32px;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default Login;
