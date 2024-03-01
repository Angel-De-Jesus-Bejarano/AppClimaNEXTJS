'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Card from "./components/ui/Card";
import Search from "./components/ui/Search";
import Mapa from "./components/ui/Map";
import ForecastCard from "./components/ui/ForecastCard";

type StateType = {
  longitud: number;
  latitud: number;
};

export default function Home() {

  const [newInputValue, setNewInputValue] = useState<string>('cartagena');
  const [newCoordinates, setNewCoordinates] = useState<StateType>({ longitud: 100, latitud: 100 });
  const [showModal, setShowModal] = useState(true);

  const handleInputValueChange = (value: string) => {
    setNewInputValue(value)
  }

  const handleUbicationChange = (lon: number, lat: number) => {
    setNewCoordinates({ longitud: lon, latitud: lat })
  }


  useEffect(() => {
    // Simula una carga asincrónica para el ejemplo
    setTimeout(() => {
      setShowModal(false);
    }, 3000); // Cambia el valor a la duración que desees
  }, [newCoordinates]);


  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h1 className=" text-6xl text-blue-600 font-medium text-center">CLIMA APP DEMO</h1>
            <p className=" text-2xl text-blue-600 font-medium text-center">ANGEL DE JESUS BEJARANO AGUILAR</p>
          </div>
        </div>
      )}
      
      <main className=" bg-gray-100 max-w-6xl h-full mx-auto rounded-xl p-5 shadow-lg ">
        <Search onInputChange={handleInputValueChange}></Search>
        <div className=" flex items-center space-x-3">
          <Card climaProp={newInputValue} coordinatesProp={handleUbicationChange}></Card>
          <Mapa updateCoordinates={newCoordinates}></Mapa>
        </div>
        <ForecastCard></ForecastCard>
      </main>
    </>



  );
}
