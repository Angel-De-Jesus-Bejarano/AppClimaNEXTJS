import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useState,useEffect } from 'react';

interface MapProps {
    updateCoordinates?: {
        longitud: number;
        latitud: number;
    };
}

export default function Mapa({ updateCoordinates }: MapProps): JSX.Element {

    const [coordenadas, setCoordenadas] = useState({ longitud: 20.7128, latitud: -74.006 });
    const [mapKey, setMapKey] = useState(0);
    const newCoordenadas = () => {
      // Actualizar las coordenadas cuando se presiona el botón
      setCoordenadas({ longitud: 10.7300, latitud: -74.006 });
      setMapKey((prevKey) => prevKey + 1);
    };

    useEffect(() => {
        if (updateCoordinates && updateCoordinates.longitud !== undefined && updateCoordinates.latitud !== undefined) {
            setCoordenadas(updateCoordinates);
          }
      }, [updateCoordinates]);
    

    return (
        <div className=" w-9/12 h-80 bg-slate-100 flex items-center justify-center border-2 border-black">
            <MapContainer
            key={mapKey}
                center={[coordenadas.longitud, coordenadas.latitud]}
                zoom={13}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[coordenadas.longitud, coordenadas.latitud]}>
                    <Popup>
                        Aquí puedes agregar información adicional sobre el marcador.
                    </Popup>
                </Marker>
            </MapContainer>
            <button onClick={newCoordenadas}>Cambiar</button>
        </div>
    )
}