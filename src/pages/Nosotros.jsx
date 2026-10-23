import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import EquipoNutricionistas from "../components/organisms/EquipoNutricionistas";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { listarNutricionistas } from "../services/nutricionistasService";

function Nosotros() {
  useTituloPagina("Nosotros");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1>Nosotros</h1>
        <p className="lead mb-5">
          NutriVida es una clínica de nutrición y dietética fundada en 2016 en Temuco, Región de La Araucanía.
          Atendemos cerca de 60 pacientes por semana con objetivos de pérdida de peso, control de enfermedades
          metabólicas, nutrición deportiva y alimentación vegetariana o vegana.
        </p>

        <h2 className="h4 mb-4">Nuestro equipo</h2>
        <EquipoNutricionistas nutricionistas={listarNutricionistas()} />
      </Container>
    </PlantillaPrincipal>
  );
}

export default Nosotros;