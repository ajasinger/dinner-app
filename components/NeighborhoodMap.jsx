import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";
import { useState } from "react";

const mapOptions = {
    zoom: 10,
    center: {
        lat: 40,
        lng: -88
    },
};

const NeighborhoodMap = () => {
    const [mapContainer, setMapContainer] = useState();
    
    return (
        <GoogleMapProvider
            options={mapOptions}
            googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
            <div />
        </GoogleMapProvider>
    );
}

export default NeighborhoodMap;