import React from 'react';


const Button = ({
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  children,
}) => {
  const combinedStyle = {
    ...styles.base,
    ...(variant === 'primary' ? styles.primary : styles.secondary),
    ...(disabled ? styles.disabled : {}),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor =
            variant === 'primary'
              ? styles.primaryHover.backgroundColor
              : styles.secondaryHover.backgroundColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor =
            variant === 'primary'
              ? styles.primary.backgroundColor
              : styles.secondary.backgroundColor;
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;

const styles = {
  base: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '0.5rem',
    fontWeight: 600,
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    outline: 'none',
  },
  primary: {
    backgroundColor: '#4F26A8',
  },
  primaryHover: {
    backgroundColor: '#42218f',
  },
  secondary: {
    backgroundColor: '#333333',
  },
  secondaryHover: {
    backgroundColor: '#2a2a2a',
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};
