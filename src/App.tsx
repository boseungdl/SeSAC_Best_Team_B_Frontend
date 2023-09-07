import MainPage from "./components/pages/First/MainPage";
import LoginPage from "./components/pages/Login/LoginPage";
import MapPage from './components/pages/Map/MapPage'
import TimelinePage from './components/pages/Timeline/TimelinePage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UploadComponent from "./components/pages/upload/UploadComponent";
import axios from 'axios';
import "./App.css"
import Footer from "./components/pages/common/Footer";
import { useState } from "react";
// axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const [uploadState, setUploadState] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 */}
        <Route path="/" element={<MainPage />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} /> 
        {/* 지도 페이지 */}
        <Route path='/map' element={<MapPage />} />
        {/* 타임라인 페이지 */}
        <Route path='/timeline' element={<TimelinePage />} />
      </Routes>

      <Footer setUploadState={setUploadState} />
      
      {uploadState && <UploadComponent />}
    </BrowserRouter>
  );
}

export default App;
