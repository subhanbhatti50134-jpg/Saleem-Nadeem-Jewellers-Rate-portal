import React, { useState } from 'react';
import { RatesProvider } from './context/RatesContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RatesBar from './components/RatesBar';
import RatesSection from './components/RatesSection';
import CollectionSection from './components/CollectionSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setShowAdminPanel(true);
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowAdminLogin(false);
    setShowAdminPanel(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <Navbar
        onAdminClick={handleAdminClick}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Sticky Rates Bar - shows below navbar when scrolled */}
      <div className="sticky top-20 z-40">
        <RatesBar />
      </div>

      <main>
        <HeroSection />
        <RatesSection />
        <CollectionSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RatesProvider>
        <AppContent />
      </RatesProvider>
    </AuthProvider>
  );
};

export default App;
