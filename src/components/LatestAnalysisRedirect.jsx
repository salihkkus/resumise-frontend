import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { analysisService } from '../services/analysisService';

const LatestAnalysisRedirect = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToLatestAnalysis = async () => {
      try {
        // Get all analyses
        const analyses = await analysisService.getAnalyses();
        
        if (analyses.length === 0) {
          // No analyses found, redirect to dashboard
          navigate('/');
          return;
        }

        // Find the latest analysis (highest ID or most recent)
        const latestAnalysis = analyses.reduce((latest, current) => 
          current.id > latest.id ? current : latest
        );

        // Redirect to the latest analysis report
        navigate(`/analiz-raporu/${latestAnalysis.id}`);
        
      } catch (error) {
        console.error('Failed to load analyses:', error);
        setError('Analizler yüklenemedi. Ana sayfaya yönlendiriliyorsunuz...');
        setTimeout(() => navigate('/'), 2000);
      } finally {
        setLoading(false);
      }
    };

    redirectToLatestAnalysis();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-surface font-body text-on-surface crisp-text">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center gap-4 text-center max-w-md">
            <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-2">En Son Analiz Yükleniyor</h3>
              <p className="text-sm text-on-surface-variant">
                Analiz raporu sayfasina yönlendiriliyorsunuz...
              </p>
            </div>
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
            <p className="text-error font-medium mb-4">{error}</p>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  // This should not render as we redirect immediately
  return null;
};

export default LatestAnalysisRedirect;
