import Image from "next/image";
import { useEffect, useState } from "react";
import { getWeatherForecast, ForecastApiResponse } from "../utils/ForecastWatherApi";

export default function ForecastCard() {

  const [forecastWeatherData, setForescastWeatherData] = useState<ForecastApiResponse | null>(null)


  useEffect(() => {
    //consumimos la api asignandole todos los valores en la variable forestWeatherdata
    /*getWeatherForecast(10.39972, -75.51444).then((data) => {
      setForescastWeatherData(data)
      // Verificar que data no sea null antes de acceder a sus propiedades
      if (data) {
        console.log(data)
      }else{
        console.log('nada')
      }
    })*/
  }, [])


  const divs = Array.from({ length: 5 }, (_, index) => (
    <div className=" flex items-center justify-center w-36 h-32 bg-gray-300 rounded-xl shadow-lg " key={index}>
      <Image src={`/img/sun.png`} alt="Imagen de prueba" width={120} height={120} priority={true} ></Image>

    </div>
  ));

  return (
    <div className=" flex justify-around m-4">
      {divs}
    </div>
  );
}