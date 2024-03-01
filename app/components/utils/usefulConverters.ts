//convertir descripcion de clima de ingles a español
export function traducirDescripcion(description: string): string {
    const traducciones: Record<string, string> = {
      'Clear': 'Despejado',
      'Clouds': 'Nublado',
      'Rain': 'Lluvia',
      'Drizzle': 'Llovizna',
      'Thunderstrom': 'Tormenta',
      'Snow': 'Nieve',
      'Mist': 'Niebla',
      'Fog': 'Neblina',
      'Haze': 'Bruma',
      'Smoke': 'Humo'
    };
  
    return traducciones[description] || description;
  }


//Asignacion de la imagen del componente card segun el tipo de clima
 export function asignarImagenClima(weather: string): string{
    const asginacion: Record<string, string> ={
        'Clear': 'sun',
        'Clouds': 'clouds',
        'Rain': 'rain',
        'Drizzle': 'Llovizna',
        'Thunderstrom': 'Thunderstrom',
        'Snow': 'snow',
        'Mist': 'mist',
        'Fog': 'Neblina',
        'Haze': 'Bruma',
        'Smoke': 'Humo'
    }

    return asginacion[weather] || weather
 }

  //Metodo para convertir grados kelvin a celcius
  export const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;