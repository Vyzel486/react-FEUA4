import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard"
// import Marketplace from "./pages/Marketplace";
// import NotFound from "./pages/NotFound";
import Pagrindinis from "./pages/Pagrindinis/Pagrindinis";
import ApieMus from "./pages/ApieMus/ApieMus";
import Naujienos from "./pages/Naujienos/Naujienos";
import Paslaugos from "./pages/Paslaugos/Paslaugos";
import AtliktiDarbai from "./pages/AtliktiDarbai/AtliktiDarbai";
import Kontaktai from "./pages/Kontaktai/Kontaktai";

const App = () => {
  return (
    <Routes>
      <Route path="/Pagrindinis" element={<Pagrindinis />} />
      <Route path="/Apie mus" element={<ApieMus />} />
      <Route path="/Naujienos" element={<Naujienos />} />
      <Route path="/Paslaugos" element={<Paslaugos />} />
      <Route path="/Atlikti darbai" element={<AtliktiDarbai />} />
      <Route path="/Kontaktai" element={<Kontaktai />} />
    </Routes>
  );
};

export default App;
