import Image from "next/image"
import { useState, useEffect } from "react"
import { getWeatherData, WeatherApiResponse } from "../utils/weatherApi"
import { traducirDescripcion, kelvinToCelsius, asignarImagenClima } from "../utils/usefulConverters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faEarthAmericas, faTemperatureThreeQuarters, faCloud, faWind } from "@fortawesome/free-solid-svg-icons"

interface CardProps {
    climaProp: string,
    coordinatesProp: (lon: number, lat: number) => void;
}

export default function Card({ climaProp, coordinatesProp }: CardProps) {

    const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null)
    const [isAnimating, setIsAnimating] = useState(false);

    const getCurrentCoordinates = (lon: number, lat: number) => {
        coordinatesProp(lon, lat)
    }

    useEffect(() => {
        //consumimos la api asignandole todos los valores en la variable weatherData
        getWeatherData(climaProp).then((data) => {
            const animationTimers = setTimeout(() => {
                setWeatherData(data)
            }, 300);
            // Verificar que data no sea null antes de acceder a sus propiedades
            if (data && data.coord) {
                getCurrentCoordinates(data.coord.lon, data.coord.lat);
                console.log(data)
            }
            return () => clearTimeout(animationTimers);
        })

        setIsAnimating(true);
        // Establecemos un temporizador para desactivar la animación después de un breve período
        const animationTimer = setTimeout(() => {
            setIsAnimating(false);
        }, 300);

        // Limpiamos el temporizador al desmontar el componente
        return () => clearTimeout(animationTimer);

    }, [climaProp])

    return (
        <div className={`flex flex-col items-center w-64 h-80 bg-black rounded-xl border-2 border-black transition-opacity duration-500`} >
            {weatherData && (
                <div className={`w-full h-full flex flex-col justify-center items-center text-lg text-white space-y-2 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                    <Image src={`/img/${asignarImagenClima(weatherData.weather[0].main)}.png`} alt="Imagen de prueba" width={100} height={100}></Image>
                    <div className={`p-1 w-full h-52 flex flex-col justify-between items-center rounded-xl  bg-black transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                        <p>
                            <FontAwesomeIcon icon={faEarthAmericas} />
                            {weatherData.name}</p>
                        <div className=" flex w-11/12 justify-between items-start">
                            <p>
                                <FontAwesomeIcon icon={faCloud} />
                                {traducirDescripcion(weatherData.weather[0].main)}</p>
                            <p>
                                <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                                {kelvinToCelsius(weatherData.main.temp).toFixed(0)}C°</p>
                        </div>
                        <div className=" flex w-11/12 justify-between items-start">
                            <p>
                                <FontAwesomeIcon icon={faHouse} />
                                {weatherData.main.humidity}%</p>
                            <p>
                                <FontAwesomeIcon icon={faWind} />
                                {weatherData.wind.speed} k/m</p>
                        </div>
                        <p>Informacion climatica</p>
                    </div>

                </div>
            )}

        </div>
    )
}