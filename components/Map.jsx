import styles from "./Map.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded) return <div>loading...</div>;
    return <MapDisplay />
}

const MapDisplay = () => {
    return (
        <GoogleMap 
            zoom={10} 
            center={{lat: 44,lng: -80}} 
            mapContainerStyle={{ width: '800px', height: '800px' }}
        >
        </GoogleMap>
    );
}

export default Map;