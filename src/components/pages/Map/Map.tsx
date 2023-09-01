import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, Marker, InfoWindow } from '@react-google-maps/api';

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const containerStyle = {
  width: '400px',
  height: '600px'
};

interface MapProps {
  center: {
    lat: number,
    lng: number
  };
  zoom: number;
  img_src: string;
}

function Map({ center, zoom, img_src }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBx-Mlw6oLJkL-SCBYJ7qWaKbKjxgh9mLo"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // zoom props에 맞춰서 크기 조절하기 위해 비활성화
    // map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{disableDefaultUI: true, styles: myStyles}}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <Marker position={center} icon={{ url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', scale: 5 }} >
      <InfoWindow>
        <div>
          <img src={img_src} style={{ width: '100px', height: '100px' }}/>
        </div>
        </InfoWindow>
      </ Marker>
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)