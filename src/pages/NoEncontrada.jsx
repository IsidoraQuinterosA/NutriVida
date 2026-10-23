import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import Boton from "../components/atoms/Boton";
import { useTituloPagina } from "../hooks/useTituloPagina";

function NoEncontrada() {
  const navigate = useNavigate();
  useTituloPagina("Página no encontrada");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="h3">Página no encontrada</h1>
        <p>La dirección que buscas no existe.</p>
        <Boton texto="Volver al inicio" onClick={() => navigate("/")} />
      </Container>
    </PlantillaPrincipal>
  );
}

export default NoEncontrada;