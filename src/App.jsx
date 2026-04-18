import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MyResumes from './components/MyResumes';
import './styles/globals.css';
import './styles/my-resumes.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ozgecmislerim" element={<MyResumes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
