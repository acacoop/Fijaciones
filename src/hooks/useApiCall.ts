import { useState } from 'react';

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export const useApiCall = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const callEndpoint = async (city: string, endpoint: string): Promise<ApiResponse> => {
    setLoading(city);
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setLoading(null);
      
      return {
        success: true,
        message: `Fijaciones de ${city} importadas exitosamente`,
        data,
      };
    } catch (error) {
      setLoading(null);
      
      return {
        success: false,
        message: `Error al importar fijaciones de ${city}: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      };
    }
  };

  return { loading, callEndpoint };
};
