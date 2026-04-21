import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const OAuthCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshUser } = useAuth();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Get URL parameters
        const error = searchParams.get('error');
        
        if (error) {
          setError(`Giriş başarısız: ${error}`);
          setLoading(false);
          return;
        }

        // Check if we have session cookie (backend handles this)
        console.log('🔍 Checking OAuth session...');
        
        try {
          // Refresh user data to verify session
          await refreshUser();
          console.log('✅ OAuth session verified');
          
          // Redirect to dashboard
          navigate('/');
        } catch (sessionError) {
          console.error('❌ Session verification failed:', sessionError);
          setError('Oturum doğrulanamadı. Lütfen tekrar giriş yapın.');
        }
      } catch (error) {
        console.error('❌ OAuth callback error:', error);
        setError('Giriş işlemi sırasında bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate, refreshUser]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
            <span className="text-xl font-semibold text-on-surface">Giriş yapılıyor...</span>
          </div>
          <p className="text-sm text-outline">Lütfen bekleyin, hesabınız doğrulanıyor.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <span className="material-symbols-outlined text-6xl text-error">error</span>
          </div>
          <h2 className="text-2xl font-bold text-on-surface mb-4">Giriş Başarısız</h2>
          <p className="text-error mb-6">{error}</p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/giris')}
              className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Tekrar Dene
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3 bg-surface-container text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors"
            >
              Ana Sayfa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default OAuthCallback;
