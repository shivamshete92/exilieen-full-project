import React, { useEffect } from 'react'; // useRef ko yahan se hata diya hai
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
 
import Header from './components/Header';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import Whatsapp from "./components/Whatsapp";
 
import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import Experts from './pages/Experts';
import AgriStartup from "./pages/AgriStartup";
 
import Research_development from './pages/Research_development';
import Contact from './pages/Contact';
import Consultancy from './pages/Consultancy';
import Testing from './pages/Testing';
import Infrastructure from './pages/Infrastructure';
import Training from './pages/Training';
import Research from './pages/Research';
import AnalyticalService from "./pages/AnalyticalServices";
 
import './App.css';
 
function ScrollToTop() {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
 
  return null;
}
 
function AnimatedRoutes() {
  const location = useLocation();
 
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Aapke saare routes yahan rahenge */}
        <Route path="/" element={<Home />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/experts" element={<Experts />} />
        <Route path="/about/AgriStartup" element={<AgriStartup/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/aboutcompany" element={<AboutCompany />} />
        <Route path="/Consultancy" element={<Consultancy/>} />
        <Route path="/AnalyticalService" element={<AnalyticalService/>} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/research" element={<Research />} />
        <Route path="/training" element={<Training />} />
        <Route path="/research_development" element={<Research_development/>} />
      </Routes>
    </AnimatePresence>
  );
}
 
function App() {
  
 
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ padding: '20px' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <Whatsapp />
   
    </Router>
  );
}
 
export default App;
 