import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import ListaCategorias from "../components/organisms/ListaCategorias";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { listarCategorias } from "../services/categoriasService";

function Categorias() {
  const navigate = useNavigate();
  useTituloPagina("Categorías");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-5">Categorías</h1>
        <ListaCategorias
          categorias={listarCategorias()}
          onSeleccionar={(id) => navigate("/categorias/" + id)}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default Categorias;
