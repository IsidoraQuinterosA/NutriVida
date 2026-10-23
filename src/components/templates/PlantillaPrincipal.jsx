import { useNavigate, useLocation } from "react-router-dom";
import BarraNavegacion from "../organisms/BarraNavegacion";
import PiePagina from "../organisms/PiePagina";
import { useSesion } from "../../hooks/useSesion";
import { useSolicitud } from "../../hooks/useSolicitud";
import { rutaDelPanel } from "../../utils/roles";
import { clinica } from "../../data/clinica";

function PlantillaPrincipal(props) {
  const navigate = useNavigate();
  const ubicacion = useLocation();
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
        rutaActual={ubicacion.pathname}
        usuario={sesion.usuario}
        rutaPanel={sesion.usuario ? rutaDelPanel(sesion.usuario.rol) : "/"}
        cantidadSolicitud={solicitud.cantidadTotal}
        onCerrarSesion={cerrarSesion}
      />

      <main className="flex-grow-1">
        {props.children}
      </main>

      <PiePagina onNavegar={navigate} clinica={clinica} />
    </>
  );
}

export default PlantillaPrincipal;
