import Boton from "../atoms/Boton";
import "../../App.css";

function TipoServicio(props) {
  return (
    <div className="tipo-servicio">
      <h3 className="tipo-titulo">{props.titulo}</h3>

      <div className="tipo-contenedor-boton">
        <Boton
          texto={props.textoBoton}
          onClick={props.onSeleccionar}
        />
      </div>
    </div>
  );
}

export default TipoServicio;
