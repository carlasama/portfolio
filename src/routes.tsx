import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;