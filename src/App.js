import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import AlumniLogin from './components/AlumniLogin';
import LandingPage from './components/LandingPage';
import StudentSignup from './components/StudentSignup';
import AlumniSignup from './components/AlumniSignup';
import Home from './components/Home'; // Import Home component


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/alumni-login" element={<AlumniLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/alumni-signup" element={<AlumniSignup />} />
          <Route path="/home" element={<Home />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
