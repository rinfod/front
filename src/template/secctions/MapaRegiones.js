import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaRegiones = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Coordenadas aproximadas de las regiones
        const regiones = [
            { nombre: "Valles Centrales", coords: [[16.92, -96.72], [16.95, -96.65], [16.9, -96.7]] },
            { nombre: "Istmo", coords: [[16.5, -95.0], [16.7, -94.9], [16.6, -95.2]] },
            { nombre: "Costa", coords: [[15.85, -97.1], [15.95, -96.9], [15.8, -97.0]] },
            { nombre: "Mixteca", coords: [[17.8, -97.7], [17.5, -97.5], [17.6, -97.8]] },
            { nombre: "Sierra Norte", coords: [[17.3, -96.4], [17.5, -96.3], [17.4, -96.5]] },
            { nombre: "Sierra Sur", coords: [[16.3, -97.0], [16.2, -96.8], [16.4, -97.1]] },
            { nombre: "Cañada", coords: [[18.2, -97.1], [18.3, -97.0], [18.1, -97.2]] },
            { nombre: "Papaloapan", coords: [[17.8, -96.0], [17.9, -95.9], [17.7, -96.1]] },
        ];

        // Crear mapa
        const map = L.map(mapRef.current).setView([17.05, -96.72], 7); // Centro de Oaxaca

        // Cargar mapa base
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Agregar polígonos al mapa
        regiones.forEach(region => {
            const polygon = L.polygon(region.coords, {
                color: 'blue',
                fillColor: 'lightblue',
                fillOpacity: 0.5
            }).addTo(map);

            polygon.bindPopup(`<strong>${region.nombre}</strong>`);
        });

        // Limpiar el mapa al desmontar el componente
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div style={{ height: "500px", width: "100%" }} ref={mapRef} />
    );
};

export default MapaRegiones;