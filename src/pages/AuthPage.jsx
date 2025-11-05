import React, { useState } from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import StackGuardLogo from '../components/shared/StackGuardLogo';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import useForm from '../hooks/useForm';

/* ---------- Validation Functions ---------- */
const validateLogin = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email ID is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email ID is invalid.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  }
  return errors;
};

const validateSignUp = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First name is required.';
  if (!values.lastName) errors.lastName = 'Last name is required.';
  if (!values.email) {
    errors.email = 'Email ID is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email ID is invalid.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }
  return errors;
};

/* ---------- Login Form ---------- */
const LoginForm = ({ onAuthSuccess, onToggleView }) => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    validateLogin
  );

  const handleLogin = (formValues) => {
    console.log('Logging in...', formValues);
    onAuthSuccess({ email: formValues.email, firstName: 'User' });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, handleLogin)} noValidate>
      <h2 style={styles.heading}>Welcome back to Stackguard</h2>
      <p style={styles.subText}>
        Secure your codebase with advanced secret scanning security best practices
      </p>

      <div style={styles.inputGroup}>
        <Input
          id="email"
          type="email"
          placeholder="Enter email ID"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
      </div>

      <div style={styles.buttonWrapper}>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Sign in'}
        </Button>
      </div>

      <p style={styles.disclaimer}>
        By continuing, you agree to our{' '}
        <a href="#" style={styles.link}>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" style={styles.link}>
          Privacy Policy
        </a>.
      </p>

      <p style={styles.switchText}>
        Don't have an account?{' '}
        <button type="button" onClick={onToggleView} style={styles.switchButton}>
          Sign up
        </button>
      </p>
    </form>
  );
};

/* ---------- Sign Up Form ---------- */
const SignUpForm = ({ onAuthSuccess, onToggleView }) => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
    validateSignUp
  );

  const handleSignUp = (formValues) => {
    console.log('Signing up...', formValues);
    onAuthSuccess({ email: formValues.email, firstName: formValues.firstName });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, handleSignUp)} noValidate>
      <h2 style={styles.heading}>Welcome to Stackguard</h2>
      <p style={styles.subText}>
        Secure your codebase with advanced secret scanning security best practices
      </p>

      <div style={styles.inputGroup}>
        <div style={styles.nameRow}>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <Input
          id="email"
          type="email"
          placeholder="Enter email ID"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
      </div>

      <div style={styles.buttonWrapper}>
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Create account'}
        </Button>
      </div>

      <p style={styles.disclaimer}>
        By continuing, you agree to our{' '}
        <a href="#" style={styles.link}>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" style={styles.link}>
          Privacy Policy
        </a>.
      </p>

      <p style={styles.switchText}>
        Already have an account?{' '}
        <button type="button" onClick={onToggleView} style={styles.switchButton}>
          Sign in
        </button>
      </p>
    </form>
  );
};

/* ---------- Main Auth Page ---------- */
const AuthPage = ({ onAuthSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <AuthLayout>
      <div style={styles.logoRow}>
        <StackGuardLogo size={40} />
        <span style={styles.logoText}>Stackguard</span>
      </div>
      {isLoginView ? (
        <LoginForm onAuthSuccess={onAuthSuccess} onToggleView={toggleView} />
      ) : (
        <SignUpForm onAuthSuccess={onAuthSuccess} onToggleView={toggleView} />
      )}
    </AuthLayout>
  );
};

export default AuthPage;

/* ---------- Inline Styles ---------- */
const styles = {
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '32px',
  },
  logoText: {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: '#111827',
  },
  heading: {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: '#111827',
  },
  subText: {
    marginTop: '8px',
    color: '#4B5563',
  },
  inputGroup: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  nameRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  buttonWrapper: {
    marginTop: '24px',
  },
  disclaimer: {
    marginTop: '24px',
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#6B7280',
  },
  link: {
    fontWeight: 500,
    color: '#111827',
    textDecoration: 'none',
  },
  switchText: {
    marginTop: '32px',
    fontSize: '0.875rem',
    textAlign: 'center',
    color: '#374151',
  },
  switchButton: {
    fontWeight: 600,
    color: '#4F46E5',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};
