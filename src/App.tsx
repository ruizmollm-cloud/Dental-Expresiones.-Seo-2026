import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import FirstVisit from './components/FirstVisit';
import Location from './components/Location';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import EmergencyPage from './components/EmergencyPage';
import WhiteningPage from './components/WhiteningPage';
import FillingsPage from './components/FillingsPage';
import CrownsPage from './components/CrownsPage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <FirstVisit />
      <Location />
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicio/:serviceId" element={<ServicePage />} />
          <Route path="/emergencias" element={<EmergencyPage />} />
          <Route path="/blanqueamiento" element={<WhiteningPage />} />
          <Route path="/rellenos-esteticos" element={<FillingsPage />} />
          <Route path="/coronas-puentes" element={<CrownsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
