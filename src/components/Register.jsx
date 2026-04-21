import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', { name, email, password, termsAccepted });
  };

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { strength: 0, color: 'bg-outline-variant/20' };
    if (pwd.length < 4) return { strength: 1, color: 'bg-error' };
    if (pwd.length < 6) return { strength: 2, color: 'bg-tertiary-fixed' };
    if (pwd.length < 8) return { strength: 3, color: 'bg-primary' };
    return { strength: 4, color: 'bg-primary-container' };
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* Main Container */}
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
        
        {/* Right Side: Registration Form */}
        <section className="flex-1 bg-surface-container-lowest flex flex-col justify-center items-center px-6 py-12 lg:px-24">
          {/* Mobile Logo (Hidden on Desktop) */}
          <div className="md:hidden mb-12">
            <span className="text-3xl font-headline font-black text-primary tracking-tighter">Resumise</span>
          </div>
          
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-on-surface font-headline text-3xl font-bold mb-2">Hesap Oluştur</h2>
              <p className="text-on-surface-variant font-body">Kariyerinizi optimize etmeye hemen başlayın.</p>
            </div>
            
            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all duration-300 group">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XHHru2mms4PE35MoOA7nHXtcS1snlg53OVexzYeeo-OFzKsVaJayF9_TblxJLM5D7nX-s2A6IS_gIe8L88lXnSoRXam9wAgA1HGmPpwAQFlQlSA7lkBTXoxue87_kEaDwyhjqEtXSF4eZOJf_j45cSjRajr5XsW3IRYUFh-WiMr79CjsMX6RJ7-egSPv5STxFveQ_DyE_S0As4ahV5cU3gy4WBvdtYY1jjblLWpwkDAO8XgntMRDmil8xCj9379jo3W2pk5A8sg"/>
              <span className="text-on-surface font-semibold text-sm">Google ile Kayıt Ol</span>
            </button>
            
            {/* Divider */}
            <div className="relative my-8 flex items-center">
              <div className="flex-grow border-t border-outline-variant/20"></div>
              <span className="flex-shrink mx-4 text-outline text-xs uppercase tracking-widest font-label">veya e-posta ile kayıt ol</span>
              <div className="flex-grow border-t border-outline-variant/20"></div>
            </div>
            
            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1" htmlFor="name">Ad Soyad</label>
                <div className="relative">
                  <input 
                    className="w-full px-5 py-3.5 bg-surface-container-highest/50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50" 
                    id="name" 
                    placeholder="John Doe" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1" htmlFor="email">E-posta Adresi</label>
                <div className="relative">
                  <input 
                    className="w-full px-5 py-3.5 bg-surface-container-highest/50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50" 
                    id="email" 
                    placeholder="ornek@mail.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1" htmlFor="password">Şifre Oluştur</label>
                <div className="relative">
                  <input 
                    className="w-full px-5 py-3.5 bg-surface-container-highest/50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                {/* Strength Meter */}
                <div className="mt-3 flex gap-1 h-1 px-1">
                  <div className={`flex-1 h-full rounded-full ${passwordStrength.strength >= 1 ? passwordStrength.color : 'bg-outline-variant/20'}`}></div>
                  <div className={`flex-1 h-full rounded-full ${passwordStrength.strength >= 2 ? passwordStrength.color : 'bg-outline-variant/20'}`}></div>
                  <div className={`flex-1 h-full rounded-full ${passwordStrength.strength >= 3 ? passwordStrength.color : 'bg-outline-variant/20'}`}></div>
                  <div className={`flex-1 h-full rounded-full ${passwordStrength.strength >= 4 ? passwordStrength.color : 'bg-outline-variant/20'}`}></div>
                </div>
                <p className="text-[10px] text-outline ml-1 mt-1">Şifre en az 8 karakter olmalıdır.</p>
              </div>
              
              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input 
                    className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" 
                    id="terms" 
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>
                <label className="text-sm text-on-surface-variant" htmlFor="terms">
                  <span className="underline decoration-outline-variant/50 cursor-pointer">Kullanım Koşullarını</span> kabul ediyorum
                </label>
              </div>
              
              {/* Submit Button */}
              <button 
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-300 mt-4" 
                type="submit"
              >
                Hesap Oluştur
              </button>
            </form>
            
            {/* Footer Link */}
            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-sm">
                Zaten bir hesabınız var mı? 
                <Link to="/giris" className="text-primary font-bold hover:text-on-primary-fixed-variant transition-colors ml-1">Giriş Yap</Link>
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
            <Link to="/yapim-asamasi" className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100">Terms of Service</Link>
            <Link to="/yapim-asamasi" className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link to="/yapim-asamasi" className="font-['Inter'] text-xs uppercase tracking-widest text-[#5e636e] dark:text-[#c3c6d6] hover:text-[#0052CC] transition-all opacity-80 hover:opacity-100">Contact Support</Link>
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

export default Register;
