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
      <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Visual Column */}
        <section className="hidden md:flex md:w-5/12 lg:w-1/2 data-flow-bg p-12 flex-col justify-between relative">
          {/* Brand Logo */}
          <div className="z-10">
            <span className="text-3xl font-headline font-black text-white tracking-tighter">Resumise</span>
          </div>
          
          {/* Content Middle */}
          <div className="z-10 max-w-lg">
            <h1 className="text-white font-headline text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-12">
              Geleceğin Kariyerine Bugün Başla
            </h1>
            
            {/* Floating Glassmorphism Card */}
            <div className="glass-card p-6 rounded-full border border-white/20 shadow-2xl flex items-center gap-4 max-w-md">
              <div className="bg-primary-container p-3 rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
              </div>
              <div>
                <p className="text-on-surface font-semibold text-sm">Yapay zeka bugün 452 kişiye iş eşleşmesi buldu</p>
                <p className="text-on-surface-variant text-xs">Sıradaki siz olabilirsiniz.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Element (Abstract Image) */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img className="w-full h-full object-cover" data-alt="abstract digital connection network with glowing blue particles and flowing data lines representing artificial intelligence" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNaIoZSzm8ieQP5MMu15oKZ3fzKzAw4dgaFgjaTzSc-dPwSG2sK86VQVakeVwapc77S8FQzYaskJkvRvLiJ8nAoB4uefjZdFdKk0NYAEr6RdBv7D3zwcLjnqyqLNtzC2_k1nnPkvfMpcgB0VyX1VzVIt4mVZG3PBc3A2yLaR-VcF-wxHqWvJ_I8IYQCCW4j18J5yva1WZhbHkEg1QZn4kn60Ue9L50DJklZ-0Qu0YVU7FFB_3SNqavTR6fAqCjKGdBhymTzZ-FSTo"/>
          </div>
          
          {/* Bottom Branding Text */}
          <div className="z-10">
            <p className="text-white/60 text-xs font-label tracking-widest uppercase">Premium Career Architecture</p>
          </div>
        </section>
        
        {/* Right Side: Login Form */}
        <section className="flex-1 bg-surface-container-lowest flex flex-col justify-center items-center px-6 py-12 lg:px-24">
          {/* Mobile Logo (Hidden on Desktop) */}
          <div className="md:hidden mb-12">
            <span className="text-3xl font-headline font-black text-primary tracking-tighter">Resumise</span>
          </div>
          
          <div className="w-full max-w-md">
            {/* Branding for Mobile */}
            <div className="lg:hidden mb-12">
              <span className="text-3xl font-black tracking-tighter text-primary">Resumise</span>
            </div>
            
            <div className="mb-10">
              <h2 className="font-headline font-extrabold text-4xl text-on-surface mb-3 tracking-tight">Hoş Geldin!</h2>
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
            
            {/* Footer Link */}
            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-sm">
                Henüz bir hesabınız var mı? 
                <Link to="/kayit" className="text-primary font-bold hover:text-on-primary-fixed-variant transition-colors ml-1">Kayıt Ol</Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer from Shared Components */}
      <footer className="bg-[#f3f4f6] dark:bg-[#121416] py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 gap-6">
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6]">
            © 2026 Resumise AI. Built for modern architect.
          </p>
          <div className="flex gap-8">
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100" href="#">Contact Support</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .data-flow-bg {
          background: linear-gradient(135deg, #003d9b 0%, #0052cc 100%);
          position: relative;
          overflow: hidden;
        }
        .data-flow-bg::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Login;
