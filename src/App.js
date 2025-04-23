import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses';
import AppointmentPage from './pages/Appointment'
import FeaturePage from './pages/Feature';
import Contactpage from './pages/Contact';
import Teampage from './pages/Team';
import Testimonialpage from './pages/Testimonial';
import Productpage from './pages/Services';

function App() {
  return (
    <div>
      <Router>
        <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/about" element={<About  />} />
              <Route path="/courses" element={<Courses  />} />
              <Route path="/appointment" element={<AppointmentPage  />} />
              <Route path="/feature" element={<FeaturePage  />} />
              <Route path="/contact" element={<Contactpage  />} />
              <Route path="/team" element={<Teampage  />} />
              <Route path="/testimonial" element={<Testimonialpage  />} />
              <Route path="/services" element={<Productpage  />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
