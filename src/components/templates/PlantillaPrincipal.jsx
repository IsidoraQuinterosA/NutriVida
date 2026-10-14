import { useNavigate } from "react-router-dom";
import BarraNavegacion from "../organisms/BarraNavegacion";
import PiePagina from "../organisms/PiePagina";

// Plantilla: arma la estructura común de las páginas (barra, contenido y pie).
// Solo las páginas y las plantillas usan el router. La barra y el pie
// no lo conocen: reciben la función navigate por props y la llaman.
function PlantillaPrincipal(props) {
  const navigate = useNavigate();

  return (
    <>
      <BarraNavegacion onNavegar={navigate} />

      {/* props.children es el contenido que cada página pone dentro de <PlantillaPrincipal> */}
      <main className="flex-grow-1">
        {props.children}
      </main>

      <PiePagina onNavegar={navigate} />
    </>
  );
}

export default PlantillaPrincipal;
