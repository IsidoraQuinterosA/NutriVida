import { useNavigate } from "react-router-dom";
import BarraNavegacion from "../organisms/BarraNavegacion";
import PiePagina from "../organisms/PiePagina";
import { useSesion } from "../../hooks/useSesion";
import { useSolicitud } from "../../hooks/useSolicitud";
import { rutaDelPanel } from "../../utils/roles";

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

      <main className="flex-grow-1">
        {props.children}
      </main>

      <PiePagina onNavegar={navigate} />
    </>
  );
}

export default PlantillaPrincipal;
