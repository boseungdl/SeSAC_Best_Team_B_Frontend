import FirstPage from './components/pages/First/FirtstPage'
import MapPage from './components/pages/Map/MapPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 */}
        <Route path='/' element={<FirstPage />} />
        {/* 지도 페이지 */}
        <Route path='/map' element={<MapPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
