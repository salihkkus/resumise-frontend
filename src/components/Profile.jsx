import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { profileService } from '../services/profileService';

const Profile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notifications, setNotifications] = useState({
    highMatch: true,
    newsletter: false,
    interviewReminders: true
  });
  const { user } = useAuth();

  // Load profile data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfileData(data);
        setEditData(data);
        
        // Update notifications state with backend data
        setNotifications({
          highMatch: data.notifyHighMatch ?? true,
          newsletter: data.notifyNewsletter ?? false,
          interviewReminders: data.notifyInterviewReminders ?? true
        });
        
        console.log('✅ Profile data loaded:', data);
      } catch (error) {
        console.error('❌ Failed to load profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // Handle edit toggle
  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset edit data
      setEditData(profileData);
      setUpdateError('');
      setUpdateSuccess('');
    } else {
      // Start editing - initialize edit data
      setEditData({
        ...profileData,
        targetRoles: profileData?.targetRoles?.join(', ') || ''
      });
      setUpdateError('');
      setUpdateSuccess('');
    }
    setIsEditing(!isEditing);
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle save
  const handleSave = async () => {
    setUpdateLoading(true);
    setUpdateError('');
    setUpdateSuccess('');

    try {
      // Prepare data for backend
      const updateData = {
        firstName: editData.firstName || '',
        lastName: editData.lastName || '',
        headline: editData.headline || '',
        location: editData.location || '',
        phone: editData.phone || '',
        linkedinUrl: editData.linkedinUrl || '',
        githubUrl: editData.githubUrl || '',
        professionalSummary: editData.professionalSummary || '',
        targetRoles: editData.targetRoles || ''
      };

      console.log('🔄 Updating profile:', updateData);
      
      const updatedData = await profileService.updateProfile(updateData);
      
      // Update local states
      setProfileData(updatedData);
      setEditData(updatedData);
      setIsEditing(false);
      setUpdateSuccess('Profil başarıyla güncellendi!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setUpdateSuccess(''), 3000);
      
      console.log('✅ Profile updated successfully:', updatedData);
    } catch (error) {
      console.error('❌ Profile update failed:', error);
      setUpdateError(error.message || 'Profil güncellenirken bir hata oluştu.');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
            <span className="text-xl font-semibold text-on-surface">Profil Yükleniyor...</span>
          </div>
          <p className="text-sm text-outline">Lütfen bekleyin, profil bilgileriniz getiriliyor.</p>
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
            <Link to="/analiz-raporu" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-slate-500 hover:text-primary hover:bg-white/50 transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>analytics</span>
              <span className="text-[15px] font-semibold">Analiz Raporu</span>
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
            <Link to="/profil" className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/50 text-primary font-bold transition-all group">
              <span className="material-symbols-outlined !text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>person</span>
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
              <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Profil</a>
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

        {/* Header Section (Profile Hero) */}
        <section className="flex flex-col md:flex-row items-end gap-8 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img 
                alt={`${profileData?.firstName || 'User'} Profile`} 
                className="w-full h-full object-cover" 
                src={profileData?.profileImageUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"}
              />
            </div>
            <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
          </div>
          <div className="flex-1 pb-2">
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-1">
              {profileData ? `${profileData.firstName} ${profileData.lastName}` : 'Yükleniyor...'}
            </h1>
            <p className="text-lg text-on-surface-variant font-medium">
              {profileData?.headline || 'Profesyonel Başlık Eklenmemiş'}
            </p>
            <div className="flex items-center gap-2 text-outline mt-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-sm font-medium">
                {profileData?.location || 'Konum Belirtilmemiş'}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">12</span>
              <span className="text-[10px] font-bold text-outline-variant uppercase tracking-wider text-center">Tamamlanan Mülakatlar</span>
            </div>
            <div className="bg-surface-container-low px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">45</span>
              <span className="text-[10px] font-bold text-outline-variant uppercase tracking-wider text-center">Eşleşen İşler</span>
            </div>
            <div className="bg-primary/5 border border-primary/10 px-5 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-primary font-bold text-xl">%88</span>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider text-center">ATS Ortalama Skoru</span>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Personal Info */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-outline-variant/5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person_outline</span>
                  Kişisel Bilgiler
                </h2>
                <button 
                  onClick={handleEditToggle}
                  className="text-primary text-sm font-bold hover:underline flex items-center gap-2"
                >
                  {isEditing ? (
                    <>
                      <span className="material-symbols-outlined text-base">close</span>
                      İptal
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">edit</span>
                      Düzenle
                    </>
                  )}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">E-posta</label>
                  <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">
                    {profileData?.email || 'Yükleniyor...'}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Telefon</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData?.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium w-full border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Telefon numaranızı girin"
                    />
                  ) : (
                    <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">
                      {profileData?.phone || 'Belirtilmemiş'}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">LinkedIn</label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={editData?.linkedinUrl || ''}
                      onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                      className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium w-full border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors"
                      placeholder="LinkedIn profil URL'nizi girin"
                    />
                  ) : (
                    <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">
                      {profileData?.linkedinUrl ? (
                        <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {profileData.linkedinUrl.replace('https://', '').replace('http://', '')}
                        </a>
                      ) : 'Belirtilmemiş'}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">GitHub</label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={editData?.githubUrl || ''}
                      onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                      className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium w-full border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors"
                      placeholder="GitHub profil URL'nizi girin"
                    />
                  ) : (
                    <div className="bg-surface-container-low px-4 py-3 rounded-xl text-sm font-medium">
                      {profileData?.githubUrl ? (
                        <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {profileData.githubUrl.replace('https://', '').replace('http://', '')}
                        </a>
                      ) : 'Belirtilmemiş'}
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Kariyer Özeti</label>
                  <span className="bg-primary-fixed text-primary px-2 py-0.5 rounded text-[10px] font-bold">AI ile Geliştirildi</span>
                </div>
                {isEditing ? (
                  <textarea
                    value={editData?.professionalSummary || ''}
                    onChange={(e) => handleInputChange('professionalSummary', e.target.value)}
                    className="w-full p-6 bg-surface-container-lowest border-l-4 border-primary rounded-r-2xl text-sm leading-relaxed text-on-surface-variant resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                    rows={4}
                    placeholder="Profesyonel özetinizi buraya yazın..."
                  />
                ) : (
                  <div className="p-6 bg-surface-container-lowest border-l-4 border-primary rounded-r-2xl text-sm leading-relaxed text-on-surface-variant italic">
                    {profileData?.professionalSummary || 'Profesyonel özet eklenmemiş. AI ile özet oluşturmak için tıklayın.'}
                  </div>
                )}
              </div>
              <div className="mt-8">
                <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1 block mb-4">Hedef Pozisyonlar</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData?.targetRoles || ''}
                    onChange={(e) => handleInputChange('targetRoles', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:outline-none rounded-xl text-sm font-medium"
                    placeholder="Hedef pozisyonlarınızı virgülle ayırarak yazın (örn: React Developer, Data Scientist)"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profileData?.targetRoles && profileData.targetRoles.length > 0 ? (
                      profileData.targetRoles.map((role, index) => (
                        <span key={index} className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full">
                          {role}
                        </span>
                      ))
                    ) : (
                      <span className="px-4 py-2 bg-surface-container-low text-outline-variant text-xs font-medium rounded-full">
                        Hedef pozisyon eklenmemiş
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: AI Analysis */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* AI Skills Radar Card */}
            <div className="glass-card rounded-[24px] p-8 overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Yapay Zeka Yetkinlik Grafiği</h2>
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
                </div>
                {/* Mock Radar Chart using CSS Shapes */}
                <div className="flex justify-center my-10 relative">
                  <div className="w-48 h-48 border-2 border-outline-variant/30 rounded-full flex items-center justify-center">
                    <div className="w-36 h-36 border-2 border-outline-variant/20 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-outline-variant/10 rounded-full"></div>
                    </div>
                    {/* The "Chart" Content */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-12" viewBox="0 0 100 100">
                      <polygon fill="rgba(0, 82, 204, 0.2)" points="50,15 85,45 75,85 25,85 15,45" stroke="#0052CC" strokeWidth="2"></polygon>
                      <circle cx="50" cy="15" fill="#0052CC" r="2"></circle>
                      <circle cx="85" cy="45" fill="#0052CC" r="2"></circle>
                      <circle cx="75" cy="85" fill="#0052CC" r="2"></circle>
                      <circle cx="25" cy="85" fill="#0052CC" r="2"></circle>
                      <circle cx="15" cy="45" fill="#0052CC" r="2"></circle>
                    </svg>
                  </div>
                  <span className="absolute top-0 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Frontend</span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Problem Solving</span>
                  <span className="absolute bottom-0 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Communication</span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-extrabold uppercase tracking-tighter text-outline">Backend</span>
                </div>
                <div className="mt-8 space-y-6">
                  <h3 className="text-sm font-bold text-on-surface">Beceri Envanteri</h3>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase mb-3">Teknik Yetenekler</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">TypeScript</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Python</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Docker</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase mb-3">Yumuşak Yetenekler</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Ekip Çalışması</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Analitik Düşünme</span>
                      <span className="px-3 py-1.5 bg-surface-container-high rounded-xl text-xs font-medium">Sunum Becerisi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Settings & Toggles */}
        <section className="mt-12">
          <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-outline-variant/5">
            <h2 className="text-xl font-bold mb-8">Hesap Ayarları & Bildirimler</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Security / Password */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">lock_reset</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Şifre Değiştir</p>
                    <p className="text-xs text-outline font-medium">Hesap güvenliğinizi korumak için periyodik olarak güncelleyin.</p>
                  </div>
                  <button className="bg-white border border-outline-variant/30 text-xs font-bold px-4 py-2 rounded-xl hover:bg-surface-container-low transition-colors">Yönet</button>
                </div>
                <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">shield_person</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">İki Faktörlü Doğrulama</p>
                    <p className="text-xs text-outline font-medium">SMS veya Authenticator uygulaması ile ek güvenlik.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input 
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary right-4" 
                      id="toggle2fa" 
                      name="toggle" 
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer" htmlFor="toggle2fa"></label>
                  </div>
                </div>
              </div>

              {/* Notification Toggles */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <div>
                    <p className="text-sm font-bold">Yeni bir %90 eşleşme olduğunda haber ver</p>
                    <p className="text-xs text-outline font-medium">Profilinize uygun fırsatları kaçırmayın.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input 
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary right-4" 
                      id="toggle-high-match" 
                      name="toggle" 
                      type="checkbox"
                      checked={notifications.highMatch}
                      onChange={(e) => setNotifications(prev => ({...prev, highMatch: e.target.checked}))}
                    />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer" htmlFor="toggle-high-match"></label>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <div>
                    <p className="text-sm font-bold">Haftalık bülten aboneliği</p>
                    <p className="text-xs text-outline font-medium">Kariyer ipuçları ve sektör içgörüleri.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input 
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary right-4" 
                      id="toggle-newsletter" 
                      name="toggle" 
                      type="checkbox"
                      checked={notifications.newsletter}
                      onChange={(e) => setNotifications(prev => ({...prev, newsletter: e.target.checked}))}
                    />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer" htmlFor="toggle-newsletter"></label>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <p className="text-sm font-bold">Mülakat hatırlatıcıları</p>
                    <p className="text-xs text-outline font-medium">Yaklaşan mülakatlar için bildirimler alın.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input 
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary right-4" 
                      id="toggle-interview" 
                      name="toggle" 
                      type="checkbox"
                      checked={notifications.interviewReminders}
                      onChange={(e) => setNotifications({...notifications, interviewReminders: e.target.checked})}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Success/Error Messages */}
            {updateSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <span className="text-sm font-medium text-green-800">{updateSuccess}</span>
                </div>
              </div>
            )}
            
            {updateError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600">error</span>
                  <span className="text-sm font-medium text-red-800">{updateError}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {isEditing && (
              <div className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-end gap-4">
                <button 
                  onClick={handleEditToggle}
                  className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-xl hover:opacity-80 transition-opacity"
                  disabled={updateLoading}
                >
                  İptal
                </button>
                <button 
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={updateLoading}
                >
                  {updateLoading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-base">refresh</span>
                      Kaydediliyor...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">save</span>
                      Değişiklikleri Kaydet
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(195, 198, 214, 0.15);
        }
        .toggle-checkbox:checked {
          right: 0;
          border-color: #0052CC;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #0052CC;
        }
      `}</style>
    </div>
  );
};

export default Profile;
