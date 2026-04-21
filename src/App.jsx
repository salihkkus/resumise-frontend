import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import MyResumes from './components/MyResumes';
import JobMatches from './components/JobMatches';
import ATSCheck from './components/ATSCheck';
import AIInterviewCoach from './components/AIInterviewCoach';
import Profile from './components/Profile';
import AnalysisReport from './components/AnalysisReport';
import LatestAnalysisRedirect from './components/LatestAnalysisRedirect';
import Analizlerim from './components/Analizlerim';
import Login from './components/Login';
import Register from './components/Register';
import OAuthCallback from './components/OAuthCallback';
import ProtectedRoute from './components/ProtectedRoute';
import UnderConstruction from './components/UnderConstruction';
import './styles/globals.css';
import './styles/my-resumes.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/ozgecmislerim" element={
            <ProtectedRoute>
              <MyResumes />
            </ProtectedRoute>
          } />
          <Route path="/is-eslesmeleri" element={
            <ProtectedRoute>
              <JobMatches />
            </ProtectedRoute>
          } />
          <Route path="/ats-kontrolu" element={
            <ProtectedRoute>
              <ATSCheck />
            </ProtectedRoute>
          } />
          <Route path="/ai-mulakat-kocu" element={
            <ProtectedRoute>
              <AIInterviewCoach />
            </ProtectedRoute>
          } />
          <Route path="/profil" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/analiz-raporu" element={
            <ProtectedRoute>
              <LatestAnalysisRedirect />
            </ProtectedRoute>
          } />
          <Route path="/analiz-raporu/:analysisId" element={
            <ProtectedRoute>
              <AnalysisReport />
            </ProtectedRoute>
          } />
          <Route path="/analizlerim" element={
            <ProtectedRoute>
              <Analizlerim />
            </ProtectedRoute>
          } />
          <Route path="/giris" element={<Login />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/kayit" element={<Register />} />
          <Route path="/yapim-asamasi" element={<UnderConstruction />} />
          <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
