import Boton from "../atoms/Boton";

function TipoServicio(props) {
  
  return (
    <div className="tipo-servicio">
      <h3 className="tipo-titulo">{props.titulo}</h3>
      {props.descripcion && <p className="small text-body-secondary">{props.descripcion}</p>}

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
