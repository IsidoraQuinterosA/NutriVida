import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import Bienvenida from "../components/organisms/Bienvenida";
import PorQueElegirnos from "../components/organisms/PorQueElegirnos";
import ListaCategorias from "../components/organisms/ListaCategorias";
import InfoContacto from "../components/organisms/InfoContacto";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { listarCategorias } from "../services/categoriasService";
import { listarServicios } from "../services/serviciosService";
import { clinica } from "../data/clinica";

const beneficios = [
  {
    titulo: "Equipo profesional",
    descripcion: "4 nutricionistas especializados en pérdida de peso, enfermedades metabólicas, nutrición deportiva y alimentación vegetariana o vegana.",
  },
  {
    titulo: "Planes personalizados",
    descripcion: "Evaluamos tus mediciones y diseñamos un plan alimenticio adaptado a tus objetivos.",
  },
  {
    titulo: "Seguimiento continuo",
    descripcion: "Controles cada 15 días o mensuales para acompañarte en tu progreso.",
  },
];

function Inicio() {
  const navigate = useNavigate();
  useTituloPagina("Inicio");

  function irAServicios() {
    navigate("/servicios");
  }

  return (
    <PlantillaPrincipal>
      <Bienvenida
        titulo="Clínica Nutricional"
        tituloDestacado="NutriVida"
        descripcion="Asesoría nutricional personalizada en Temuco desde 2016. Nuestro equipo de 4 nutricionistas te acompaña a alcanzar tus objetivos: pérdida de peso, control de enfermedades metabólicas, nutrición deportiva y alimentación vegetariana o vegana."
        textoBoton="Ver servicios"
        onClickBoton={irAServicios}
        textoBotonSecundario="Ver ofertas"
        onClickBotonSecundario={() => navigate("/ofertas")}
        datos={[
          { numero: "2016", texto: "en Temuco" },
          { numero: "4", texto: "nutricionistas" },
          { numero: "60", texto: "pacientes por semana" },
          { numero: listarServicios().length, texto: "servicios y planes" },
        ]}
      />

      <PorQueElegirnos
        titulo="¿Por qué elegirnos?"
        beneficios={beneficios}
      />

      <section className="seccion-tinte py-5">
        <Container>
          <h2 className="mb-4">Nuestras categorías</h2>
          <ListaCategorias
            categorias={listarCategorias()}
            onSeleccionar={(id) => navigate("/categorias/" + id)}
          />
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="mb-4">Contacto</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <InfoContacto clinica={clinica} />
            </Col>
          </Row>
        </Container>
      </section>
    </PlantillaPrincipal>
  );
}

export default Inicio;