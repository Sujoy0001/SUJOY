
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import SkillsPage from './pages/SkillsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 flex flex-col font-sans">
        
        {/* Scroll position reset on transition */}
        <ScrollToTop />

        {/* Shared Global Sticky Glassmorphism Header */}
        {/* <Navbar /> */}

        {/* Multi-Page Route Outlet */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Shared Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
