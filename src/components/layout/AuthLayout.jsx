import React from 'react';

const AuthLayout = ({ children }) => (
  <>
    <style>{styles.mediaQuery}</style>
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left Panel */}
        <div className="left-panel" style={styles.leftPanel}>
          <div style={styles.leftInnerBox}></div>
        </div>

        {/* Right Panel */}
        <div className="right-panel" style={styles.rightPanel}>
          {children}
        </div>
      </div>
    </div>
  </>
);

export default AuthLayout;

/* Inline Style Objects*/
const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: '16px',
  },
  card: {
    width: '100%',
    maxWidth: '80rem', // Tailwind max-w-5xl ≈ 80rem
    display: 'flex',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  leftPanel: {
    display: 'none', // hidden by default
    backgroundColor: '#f5f5f5', // gray-100
    padding: '48px',
    width: '50%',
  },
  leftInnerBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e5e5e5', // gray-200
    borderRadius: '0.5rem',
  },
  rightPanel: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '32px',
  },
  mediaQuery: `
    @media (min-width: 768px) {
      .left-panel {
        display: block !important;
      }
      .right-panel {
        width: 50% !important;
        padding: 48px !important;
      }
    }
  `,
};
