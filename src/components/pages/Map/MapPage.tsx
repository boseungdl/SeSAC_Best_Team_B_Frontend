import Map from './Map';

function MapPage() {
  const center = {
    lat: 37.5178717,
    lng: 126.88646489972223
  };
  const zoom = 13;
  const img_src = 'https://picsum.photos/id/237/200/300';

  return (
    <div>
      <Map center={center} zoom={zoom} img_src={img_src}/>
    </div>
  );
}

export default MapPage;
