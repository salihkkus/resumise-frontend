import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { analysisService } from '../services/analysisService';

const Analizlerim = () => {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { profileData } = useAuth();

  // Load analyses from backend
  useEffect(() => {
    const loadAnalyses = async () => {
      try {
        const data = await analysisService.getAnalyses();
        setAnalyses(data);
        console.log('✅ Analyses loaded from backend:', data);
      } catch (error) {
        console.error('❌ Failed to load analyses:', error);
        setError('Analizler yüklenemedi. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    loadAnalyses();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Belirtilmemiş';
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'DONE':
        return 'text-green-600 bg-green-100';
      case 'QUEUED':
        return 'text-amber-600 bg-amber-100';
      case 'PROCESSING':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'DONE':
        return 'Tamamlandı';
      case 'QUEUED':
        return 'Sırada';
      case 'PROCESSING':
        return 'İşleniyor';
      default:
        return 'Bilinmiyor';
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined animate-spin text-2xl text-primary">refresh</span>
            <span className="text-sm font-medium text-on-surface-variant">Analizler yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
        <div className="flex items-center justify-center w-full">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-error mb-4">error</span>
            <p className="text-error font-medium">{error}</p>
            <Link to="/" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white rounded-lg">
              <span className="material-symbols-outlined">arrow_back</span>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <Link to="/analizlerim" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/50 text-primary font-bold transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>analytics</span>
              <span className="text-[15px] font-semibold">Analizlerim</span>
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
              <span className="material-symbols-outlined !text-[22px]">checklist</span>
              <span className="text-[15px] font-semibold">ATS Kontrolü</span>
            </Link>
            <Link to="/ai-mulakat-kocu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]">psychology</span>
              <span className="text-[15px] font-semibold">AI Mülakat Koçu</span>
            </Link>
          </nav>
        </div>
        <div className="p-8 pt-0">
          <div className="space-y-1">
            <a className="flex items-center gap-3.5 px-5 py-3 text-slate-500 hover:text-primary transition-colors rounded-2xl" href="#">
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

      {/* Main Content */}
      <main className="flex-grow lg:ml-[18%] p-8 lg:p-12 transition-all duration-300" style={{marginLeft: 'clamp(280px, 18%, 360px)'}}>
        {/* Top Nav */}
        <header className="flex justify-between items-center gap-6 mb-12">
          <div className="flex-grow">
            <h1 className="text-4xl font-headline font-extrabold tracking-tight">Analizlerim</h1>
            <p className="text-outline mt-2 text-lg">Yaptığınız tüm analizler ve sonuçları</p>
          </div>
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Analizlerim</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary-container/50 rounded-xl transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <Link to="/profil" className="ml-2 ring-2 ring-offset-2 ring-primary/10 rounded-full cursor-pointer hover:ring-primary/30 transition-all overflow-hidden w-9 h-9">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src={profileData?.profileImageUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"} 
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="space-y-8">
          {analyses.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl text-outline">analytics</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Henüz Analiz Yok</h3>
              <p className="text-outline-variant mb-6 max-w-md mx-auto">
                İlk analizinizi yapmak için ana sayfaya gidin ve CV'nizi iş ilanlarıyla karşılaştırın.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-container transition-all"
              >
                <span className="material-symbols-outlined">add</span>
                İlk Analizi Yap
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analyses.map((analysis) => (
                <div 
                  key={analysis.id} 
                  className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/5 hover:shadow-md hover:border-outline-variant/20 transition-all group cursor-pointer"
                  onClick={() => window.location.href = `/analiz-raporu/${analysis.id}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-on-surface truncate" title={analysis.cvTitle}>
                          {analysis.cvTitle}
                        </h3>
                        <p className="text-xs text-outline-variant">ID: {analysis.id}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-outline-variant mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                      {getStatusText(analysis.status)}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">percent</span>
                      %{analysis.matchScore || 0} Eşleşme
                    </span>
                  </div>

                  <div className="text-sm text-outline-variant line-clamp-3">
                    {analysis.jobDescription ? 
                      analysis.jobDescription.substring(0, 150) + '...' : 
                      'İş tanımı belirtilmemiş'
                    }
                  </div>

                  <div className="mt-4 pt-4 border-t border-outline-variant/10">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-outline-variant">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {formatDate(analysis.createdAt)}
                      </span>
                      <Link 
                        to={`/analiz-raporu/${analysis.id}`}
                        className="text-xs font-bold text-primary hover:text-primary-container transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Detayları Gör →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analizlerim;
