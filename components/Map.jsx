import GoogleMapReact from "google-map-react";

const Map = () => {
    const coordinates = { lat:0, lng:0 }

    return(
        <div>
            <GoogleMapReact
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;