import L, { map } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-polylinedecorator';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet-polylinedecorator';

import { useEffect, useState } from 'react';



const AttackLines: React.FC = () => {
    const map = useMap();
    const [offset, setOffset] = useState(0);
    const attackLines = [
        {
            from: [51.5074, -0.1278], // Londyn
            to: [40.7128, -74.0060],  // Nowy Jork
        },
        {
            from: [35.6895, 139.6917], // Tokio
            to: [37.7749, -122.4194],  // San Francisco
        },
    ];




    useEffect(() => {
        const intervalId = setInterval(() => {
            setOffset((prevOffset) => (prevOffset + 1) % 100); // Zwiększ przesunięcie
        }, 100); // Przesuwaj co 100ms

        attackLines.forEach((attack) => {
            const polyline = L.polyline([attack.from, attack.to], { color: 'blue', weight: 2 }).addTo(map);

            // Dodaj animowany symbol wzdłuż linii
            L.polylineDecorator(polyline, {
                patterns: [
                    {
                        offset: `${offset}%`, // Animowany offset
                        repeat: '20%', // Powtarzanie symboli co 10%
                        symbol: L.Symbol.arrowHead({
                            pixelSize: 5,
                            pathOptions: { fillOpacity: 1, color: '#FF69B4' },
                        }),
                    },
                ],
            }).addTo(map);
        });
        return () => {
            clearInterval(intervalId); // Wyczyść interval, aby uniknąć wycieków pamięci
        };

    }, [map, offset]);

    return null; // Nie renderuje niczego bezpośrednio
};





function LeafletMap() {




    return (
        <MapContainer className='map flex' center={[40, 0]} scrollWheelZoom={true} zoom={2} style={{ height: '100vh', width: "100%" }}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                minZoom={0}
                maxZoom={20}
                ext="png"
            />
            <AttackLines />
        </MapContainer>
    )
}

export default LeafletMap