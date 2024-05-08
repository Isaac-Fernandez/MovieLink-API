import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>
        Hola Soy Isaac Fernandez, estudiante de DEV.F 
        <h2>Estoy aprendiendo a programar ya que siento que es un mundo completamente diferente y super interesante. 
        Quiero seguir aprendiendo y explorar nuevas herramientas para mi desarrollo profesional. </h2>
        </h1>} />
      <Route path="*" element={<h1>Pagina no disponible</h1>} />
    </Routes>
  );
};

export default RoutesIndex; 