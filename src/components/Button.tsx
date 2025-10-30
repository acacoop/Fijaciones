import React from 'react';
import { ButtonProps } from '../types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ city, onClick, loading = false, disabled = false }) => {
  return (
    <button
      className={`city-button ${loading ? 'loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={`Importar fijaciones de ${city}`}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Importando...
        </>
      ) : (
        city
      )}
    </button>
  );
};

export default Button;
