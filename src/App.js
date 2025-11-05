import React, { useState } from 'react';
import AuthPage from './pages/AuthPage';
import ConfigPage from './pages/ConfigPage';
import DashboardPage from './pages/DashboardPage';

/**
 * Root App Component (no Tailwind)
 * Manages authentication flow:
 * Auth → Config → Dashboard
 */
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleConfigSuccess = () => {
    setIsConfigured(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsConfigured(false);
    setUser(null);
  };

  const renderPage = () => {
    if (isAuthenticated) {
      if (isConfigured) {
        return <DashboardPage user={user} onLogout={handleLogout} />;
      }
      return <ConfigPage onConfigSuccess={handleConfigSuccess} user={user} />;
    }
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  };

  return <div style={styles.appContainer}>{renderPage()}</div>;
};

export default App;

/* ---------- Inline Style Objects ---------- */
const styles = {
  appContainer: {
    fontFamily: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
};
