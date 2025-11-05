import React from 'react';

/**
 * A styled input component that matches the Figma design (no Tailwind).
 */
const Input = ({ id, type, placeholder, value, onChange, error }) => (
  <div style={styles.wrapper}>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        ...styles.input,
        ...(error ? styles.inputError : styles.inputNormal),
      }}
      onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
      onBlur={(e) => (e.target.style.boxShadow = 'none')}
    />
    {error && <p style={styles.errorText}>{error}</p>}
  </div>
);

export default Input;

/* ---------- Inline Style Objects ---------- */
const styles = {
  wrapper: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '0.5rem',
    backgroundColor: '#f5f5f5', // gray-100
    color: '#111827', // gray-900
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s ease',
  },
  inputNormal: {
    border: '1px solid #f5f5f5',
  },
  inputError: {
    border: '2px solid #ef4444', // red-500
  },
  inputFocus: {
    boxShadow: '0 0 0 2px #6366f1', // indigo-500 ring
  },
  errorText: {
    marginTop: '4px',
    fontSize: '0.75rem',
    color: '#dc2626', // red-600
  },
};
