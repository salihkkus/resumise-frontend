import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
            <span className="text-xl font-semibold text-on-surface">Yükleniyor...</span>
          </div>
          <p className="text-sm text-outline">Lütfen bekleyin, doğrulanıyor...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/giris" replace />;
  }

  return children;
};

export default ProtectedRoute;
