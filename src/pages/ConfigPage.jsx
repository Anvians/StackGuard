import React, { useState } from 'react';
import StackGuardLogo from '../components/shared/StackGuardLogo';
import Button from '../components/ui/Button';


const ConfigPage = ({ onConfigSuccess, user }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateKey = (value) => {
    if (!value) return 'Configuration key is required.';
    if (value.length < 100)
      return `Key is too short. It must be at least 100 characters (currently ${value.length}).`;
    if (value.length > 1000)
      return `Key is too long. It must be no more than 1000 characters (currently ${value.length}).`;
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateKey(key);
    setError(validationError);

    if (!validationError) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Configuration Key saved:', key);
        setIsSubmitting(false);
        onConfigSuccess();
      }, 1000);
    }
  };

 
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logoRow}>
          <StackGuardLogo size={32} />
          <span style={styles.logoText}>Stackguard</span>
        </div>

        <h1 style={styles.heading}>
          Welcome, {user?.firstName || 'User'}!
        </h1>
        <p style={styles.subText}>
          Please enter your configuration key to proceed to the dashboard. The key
          must be between 100 and 1000 characters.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <textarea
              id="configKey"
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Enter your configuration key..."
              rows="6"
              style={{
                ...styles.textarea,
                ...(error ? styles.textareaError : styles.textareaNormal),
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = styles.textareaFocus.boxShadow)
              }
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
            <div style={styles.helperRow}>
              <span
                style={{
                  ...styles.helperText,
                  color: error ? '#dc2626' : '#6B7280', // red-600 or gray-500
                }}
              >
                {error ? error : 'Must be 100–1000 characters.'}
              </span>
              <span
                style={{
                  ...styles.helperText,
                  color:
                    key.length < 100 || key.length > 1000
                      ? '#dc2626'
                      : '#16a34a', 
                }}
              >
                {key.length}/1000
              </span>
            </div>
          </div>

          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save and Continue'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfigPage;

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb', // gray-50
    padding: '16px',
  },
  card: {
    width: '100%',
    maxWidth: '40rem', // ~max-w-2xl
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111827',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111827',
  },
  subText: {
    marginTop: '8px',
    color: '#4B5563',
  },
  form: {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '0.5rem',
    backgroundColor: '#f5f5f5',
    color: '#111827',
    fontSize: '1rem',
    resize: 'vertical',
    outline: 'none',
    transition: 'all 0.2s ease',
  },
  textareaNormal: {
    border: '1px solid #f5f5f5',
  },
  textareaError: {
    border: '2px solid #ef4444',
  },
  textareaFocus: {
    boxShadow: '0 0 0 2px #6366f1',
  },
  helperRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4px',
  },
  helperText: {
    fontSize: '0.75rem',
  },
};
