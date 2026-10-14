import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import Bienvenida from "../components/organisms/Bienvenida";
import PorQueElegirnos from "../components/organisms/PorQueElegirnos";
import { useTituloPagina } from "../hooks/useTituloPagina";

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
        titulo="Clínica Nutricional NutriVida"
        descripcion="Asesoría nutricional personalizada en Temuco desde 2016. Nuestro equipo de 4 nutricionistas te acompaña a alcanzar tus objetivos: pérdida de peso, control de enfermedades metabólicas, nutrición deportiva y alimentación vegetariana o vegana."
        textoBoton="Ver servicios"
        onClickBoton={irAServicios}
      />

      <PorQueElegirnos
        titulo="¿Por qué elegirnos?"
        beneficios={beneficios}
      />
    </PlantillaPrincipal>
  );
}

export default Inicio;
