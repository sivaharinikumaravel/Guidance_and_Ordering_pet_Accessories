import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import LandingPage from './components/LandingPage';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home'; // Import Home component


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/home" element={<Home />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
