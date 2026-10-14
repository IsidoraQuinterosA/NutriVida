import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import Bienvenida from "../components/organisms/Bienvenida";
import { useTituloPagina } from "../hooks/useTituloPagina";

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
    </PlantillaPrincipal>
  );
}

export default Inicio;
