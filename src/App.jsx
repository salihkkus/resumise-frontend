import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MyResumes from './components/MyResumes';
import JobMatches from './components/JobMatches';
import ATSCheck from './components/ATSCheck';
import AIInterviewCoach from './components/AIInterviewCoach';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import UnderConstruction from './components/UnderConstruction';
import './styles/globals.css';
import './styles/my-resumes.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ozgecmislerim" element={<MyResumes />} />
          <Route path="/is-eslesmeleri" element={<JobMatches />} />
          <Route path="/ats-kontrolu" element={<ATSCheck />} />
          <Route path="/ai-mulakat-kocu" element={<AIInterviewCoach />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/giris" element={<Login />} />
          <Route path="/kayit" element={<Register />} />
          <Route path="/yapim-asamasi" element={<UnderConstruction />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
