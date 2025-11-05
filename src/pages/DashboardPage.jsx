import React from 'react';
import StackGuardLogo from '../components/shared/StackGuardLogo';
import Button from '../components/ui/Button';

/**
 * Page 3: Dashboard Page (no Tailwind)
 * Final page, shown only after auth and configuration.
 */
const DashboardPage = ({ user, onLogout }) => {
  const greeting = `Hello, ${user?.firstName || 'user'}!`;
  const subGreeting = 'How are you doing today?';

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoRow}>
          <StackGuardLogo size={32} />
          <span style={styles.logoText}>Stackguard</span>
        </div>

        <div style={styles.buttonWrapper}>
          <Button type="button" variant="secondary" onClick={onLogout}>
            Sign Out
          </Button>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.greeting}>{greeting}</h1>
        <p style={styles.subGreeting}>{subGreeting}</p>

        <div style={styles.dashboardBox}>
          <h2 style={styles.sectionTitle}>Dashboard Content Area</h2>
          <p style={styles.sectionText}>
            This is where your dashboard widgets and information would live.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

/* ---------- Inline Style Objects ---------- */
const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '16px',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '48px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111827',
  },
  buttonWrapper: {
    width: 'auto',
  },
  main: {
    maxWidth: '64rem',
    margin: '0 auto',
  },
  greeting: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#111827',
  },
  subGreeting: {
    marginTop: '8px',
    fontSize: '1.125rem',
    color: '#4B5563',
  },
  dashboardBox: {
    marginTop: '32px',
    padding: '32px',
    backgroundColor: '#f3f4f6', // gray-100
    borderRadius: '0.75rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1F2937',
  },
  sectionText: {
    marginTop: '8px',
    color: '#4B5563',
  },
};
