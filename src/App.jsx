
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SkillsPage from './pages/SkillsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-neutral-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 flex flex-col font-sans transition-colors duration-300">
        
        {/* Scroll position reset on transition */}
        <ScrollToTop />

        {/* Shared Global Sticky Glassmorphism Header */}
        <Navbar />

        {/* Multi-Page Route Outlet */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:category" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
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
