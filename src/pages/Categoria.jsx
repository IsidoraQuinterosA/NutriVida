import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import CatalogoServicios from "../components/organisms/CatalogoServicios";
import Boton from "../components/atoms/Boton";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitud } from "../hooks/useSolicitud";
import { obtenerCategoria } from "../services/categoriasService";
import { listarPorCategoria } from "../services/serviciosService";

function Categoria() {
  const navigate = useNavigate();
  const params = useParams();
  const solicitud = useSolicitud();

  const categoria = obtenerCategoria(params.id);
  useTituloPagina(categoria ? categoria.nombre : "Categoría no encontrada");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        {categoria ? (
          <>
            <h1>{categoria.nombre}</h1>
            <p className="mb-5">{categoria.descripcion}</p>
            <CatalogoServicios
              servicios={listarPorCategoria(categoria.id)}
              onVerDetalle={(codigo) => navigate("/servicios/" + codigo)}
              onAgregar={solicitud.agregar}
            />
          </>
        ) : (
          <>
            <h1 className="h3">Categoría no encontrada</h1>
            <p>No existe la categoría "{params.id}".</p>
          </>
        )}

        <div className="mt-4">
          <Boton texto="Ver todas las categorías" variante="outline-secondary" onClick={() => navigate("/categorias")} />
        </div>
      </Container>
    </PlantillaPrincipal>
  );
}

export default Categoria;
