import React from 'react';


const StackGuardLogo = ({ size = 40 }) => (
  <svg
    style={{ ...styles.svg, width: size, height: size }}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0L24.717 7.63932L33.0902 6.18034L32.8688 15.2829L40 20L32.8688 24.7171L33.0902 33.8197L24.717 32.3607L20 40L15.283 32.3607L6.90983 33.8197L7.13117 24.7171L0 20L7.13117 15.2829L6.90983 6.18034L15.283 7.63932L20 0Z"
      style={styles.outerShape}
    />
    <path
      d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM20 27C16.134 27 13 23.866 13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20C27 23.866 23.866 27 20 27Z"
      style={styles.innerShape}
    />
  </svg>
);

export default StackGuardLogo;

/* Inline Style Objects */
const styles = {
  svg: {
    display: 'inline-block',
  },
  outerShape: {
    fill: '#4F26A8',
  },
  innerShape: {
    fill: '#ffffff',
  },
};
