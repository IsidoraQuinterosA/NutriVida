import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import BarraFiltros from "../components/molecules/BarraFiltros";
import CatalogoServicios from "../components/organisms/CatalogoServicios";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitud } from "../hooks/useSolicitud";
import { buscarServicios } from "../services/serviciosService";
import { listarCategorias } from "../services/categoriasService";

function Servicios() {
  
  const navigate = useNavigate();
  const solicitud = useSolicitud();
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  useTituloPagina("Servicios");

  const visibles = buscarServicios(texto, categoria);

  function agregar(servicio) {
    solicitud.agregar(servicio);
    setMensaje(servicio.nombre + " se agregó a tu solicitud.");
  }

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-4">Nuestros servicios</h1>

        <BarraFiltros
          texto={texto}
          onCambiarTexto={(e) => setTexto(e.target.value)}
          categoria={categoria}
          onCambiarCategoria={(e) => setCategoria(e.target.value)}
          categorias={listarCategorias()}
        />

        {mensaje && <div className="alert alert-success" role="status">{mensaje}</div>}

        <CatalogoServicios
          servicios={visibles}
          onVerDetalle={(codigo) => navigate("/servicios/" + codigo)}
          onAgregar={agregar}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default Servicios;
