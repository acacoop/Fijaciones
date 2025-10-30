import { useState } from 'react';
import Button from './components/Button';
import Toast from './components/Toast';
import { useApiCall } from './hooks/useApiCall';
import './App.css';

interface ToastData {
  message: string;
  type: 'success' | 'error';
}

// Configuración de endpoints - Modifica estas URLs con tus endpoints reales
const ENDPOINTS = {
  Rosario: '/api/fijaciones/rosario',
  Cordoba: '/api/fijaciones/cordoba',
  'Bahia Blanca': '/api/fijaciones/bahia-blanca',
};

function App() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const { loading, callEndpoint } = useApiCall();

  const handleCityClick = async (city: keyof typeof ENDPOINTS) => {
    const result = await callEndpoint(city, ENDPOINTS[city]);
    
    setToast({
      message: result.message,
      type: result.success ? 'success' : 'error',
    });
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img 
            src="https://www.acacoop.com.ar/images/logo.png" 
            alt="ACACOOP Logo" 
            className="logo"
          />
          <h1 className="title">Fijaciones</h1>
          <p className="subtitle">
            Presione el botón para importar las fijaciones de la ciudad deseada
          </p>
        </header>

        <div className="button-grid">
          <Button
            city="Rosario"
            onClick={() => handleCityClick('Rosario')}
            loading={loading === 'Rosario'}
            disabled={loading !== null}
          />
          <Button
            city="Córdoba"
            onClick={() => handleCityClick('Cordoba')}
            loading={loading === 'Cordoba'}
            disabled={loading !== null}
          />
          <Button
            city="Bahía Blanca"
            onClick={() => handleCityClick('Bahia Blanca')}
            loading={loading === 'Bahia Blanca'}
            disabled={loading !== null}
          />
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
