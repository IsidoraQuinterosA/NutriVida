import { useNavigate } from "react-router-dom";
import TipoServicio from "../components/molecules/TipoServicio";
import { useTituloPagina } from "../hooks/useTituloPagina";

function TiposServicios() {
  const navigate = useNavigate();
  useTituloPagina("Tipos de servicios");

  function irAServicios() {
    navigate("/servicios");
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Tipos de Servicios</h1>


      <div className="d-flex flex-wrap justify-content-center gap-4">


        <TipoServicio
          titulo="Consulta"
          textoBoton="Agendar"
          onSeleccionar={irAServicios}
        />


        <TipoServicio
          titulo="Plan especializado"
          textoBoton="Agendar"
          onSeleccionar={irAServicios}
        />


        <TipoServicio
          titulo="Evaluación"
          textoBoton="Agendar"
          onSeleccionar={irAServicios}
        />

         <TipoServicio
          titulo="Taller grupal"
          textoBoton="Agendar"
          onSeleccionar={irAServicios}
        />
</div>
</div>
  );
}

export default TiposServicios;