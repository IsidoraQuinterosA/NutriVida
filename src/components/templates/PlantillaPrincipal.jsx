import { useNavigate } from "react-router-dom";
import BarraNavegacion from "../organisms/BarraNavegacion";
import PiePagina from "../organisms/PiePagina";
import { useSesion } from "../../hooks/useSesion";
import { useSolicitud } from "../../hooks/useSolicitud";
import { rutaDelPanel } from "../../utils/roles";

// Plantilla: arma la estructura común de las páginas (barra, contenido y pie).
// Solo las páginas y las plantillas usan el router y los contextos.
// La barra y el pie no los conocen: reciben todo por props.
function PlantillaPrincipal(props) {
  const navigate = useNavigate();
  const sesion = useSesion();
  const solicitud = useSolicitud();

  function cerrarSesion() {
    sesion.cerrarSesion();
    navigate("/");
  }

  return (
    <>
      <BarraNavegacion
        onNavegar={navigate}
        usuario={sesion.usuario}
        rutaPanel={sesion.usuario ? rutaDelPanel(sesion.usuario.rol) : "/"}
        cantidadSolicitud={solicitud.cantidadTotal}
        onCerrarSesion={cerrarSesion}
      />

      {/* props.children es el contenido que cada página pone dentro de <PlantillaPrincipal> */}
      <main className="flex-grow-1">
        {props.children}
      </main>

      <PiePagina onNavegar={navigate} />
    </>
  );
}

export default PlantillaPrincipal;
