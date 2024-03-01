export type ForecastApiResponse = {
    daily: {
        temp: {
            day: number;
            night: number;
        };
        weather: {
            description: string;
        }[];
    }[];
};


export const getWeatherForecast = async (lat: number, lon: number): Promise<ForecastApiResponse | null> => {
    const apiKey = '19b2ae248e030a2add68dcac1c3f7995'; // Reemplaza con tu clave de API de OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data: ForecastApiResponse = await response.json();
        return data;
      } else {
        console.error(`Error en la solicitudDDDD: ${response.status} - ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return null;
    }
  };