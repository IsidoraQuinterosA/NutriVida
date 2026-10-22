import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import CatalogoServicios from "../components/organisms/CatalogoServicios";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitud } from "../hooks/useSolicitud";
import { listarOfertas } from "../services/serviciosService";

function Ofertas() {
  const navigate = useNavigate();
  const solicitud = useSolicitud();
  useTituloPagina("Ofertas");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1>Ofertas</h1>
        <p className="mb-5">Servicios con descuento por tiempo limitado.</p>
        <CatalogoServicios
          servicios={listarOfertas()}
          onVerDetalle={(codigo) => navigate("/servicios/" + codigo)}
          onAgregar={solicitud.agregar}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default Ofertas;