import MapaRegiones from "./MapaRegiones";



function Mapa() {

    return(
        <div>
            <h2 class="no-margin">
                    <span class="map-amount tertiary-color">8+</span>
                    <span class="map-text max-width primary-color">Regiones</span>
                </h2>
            <MapaRegiones />
        </div>
    )
}

export default Mapa;