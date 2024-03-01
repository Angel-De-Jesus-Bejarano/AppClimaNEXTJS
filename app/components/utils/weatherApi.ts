

export type WeatherApiResponse =  {
    main: {
        temp: number;
        humidity: number;
    },
    wind: {
        speed: number;
    },
    weather: {
        main: string,
        description: string;
    }[];
    name: string;
    coord: {
        lon?: number;
        lat?: number;
    }
};

export const getWeatherData = async(city: string):  Promise<WeatherApiResponse | null>=> {
    const apiKEY = '19b2ae248e030a2add68dcac1c3f7995'
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`

    try {
        const response = await fetch(apiURL)
        if(response.ok){
            const data: WeatherApiResponse = await response.json()
            return data
        }else {
            console.log(`Error en la solicitud ${response.status} - ${response.statusText}`)
            return null
        }
    } catch (error) {
        console.log('Error en la solicitud ', error)
        return null
    }

}