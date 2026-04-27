import "./App.css";
import MainPage from "./pages/mainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import DetailContact from "./pages/detail-contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail-contact" element={<DetailContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
