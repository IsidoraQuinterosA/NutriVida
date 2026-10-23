import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import ListaBlog from "../components/organisms/ListaBlog";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { entradas } from "../data/blog";

function Blog() {
  const navigate = useNavigate();
  useTituloPagina("Blog");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-5">Blog</h1>
        <ListaBlog entradas={entradas} onLeer={(id) => navigate("/blog/" + id)} />
      </Container>
    </PlantillaPrincipal>
  );
}

export default Blog;
