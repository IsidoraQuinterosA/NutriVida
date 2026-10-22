import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import ResultadoSolicitud from "../components/organisms/ResultadoSolicitud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSesion } from "../hooks/useSesion";
import { obtenerNutricionista } from "../services/nutricionistasService";

function CitaExitosa() {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const sesion = useSesion();
  useTituloPagina("Cita registrada");

  // La cita llega desde ConfirmarCita en el "state" de la navegación
  const cita = ubicacion.state ? ubicacion.state.cita : null;

  if (!cita) {
    return (
      <PlantillaPrincipal>
        <Container className="py-5">
          <ResultadoSolicitud
            exito={false}
            titulo="No hay una cita reciente"
            mensaje="Agenda una cita desde el catálogo de servicios."
            textoPrincipal="Ver servicios"
            onPrincipal={() => navigate("/servicios")}
            textoSecundario="Volver al inicio"
            onSecundario={() => navigate("/")}
          />
        </Container>
      </PlantillaPrincipal>
    );
  }

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <ResultadoSolicitud
          exito={true}
          titulo="¡Tu solicitud de cita fue registrada!"
          mensaje="Quedó pendiente de confirmación. Te avisaremos cuando la secretaria o tu nutricionista la confirme."
          cita={cita}
          nutricionistaNombre={obtenerNutricionista(cita.nutricionistaId).nombre}
          textoPrincipal={sesion.usuario ? "Ver mis citas" : "Iniciar sesión para ver mis citas"}
          onPrincipal={() => navigate(sesion.usuario ? "/paciente/citas" : "/login")}
          textoSecundario="Volver al inicio"
          onSecundario={() => navigate("/")}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default CitaExitosa;
