import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import './App.css'
import { locationLatLng, mapConfig } from "./sampleData";
import { Location } from "./genericTypes";

function App() {
  const [zoomLevel, setZoomLevel] = useState<number>(14);
  const [latLng, setLatLng] = useState<Location>({
    lat: locationLatLng.lat,
    lng: locationLatLng.lng
  });

  return (
    <>
      <ReactMapGL
        maxZoom={mapConfig.maxZoom}
        minZoom={mapConfig.minZoom}
        mapboxAccessToken={mapConfig.accessToken}
        style={{width: 1200, height: 800}}
        mapStyle={mapConfig.style}
        initialViewState={{
          longitude: latLng.lng,
          latitude: latLng.lat,
          zoom: zoomLevel,
        }}
      >
      </ReactMapGL>
    </>
  )
}

export default App
