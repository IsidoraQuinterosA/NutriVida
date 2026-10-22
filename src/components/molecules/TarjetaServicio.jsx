import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import EtiquetaModalidad from "../atoms/EtiquetaModalidad";
import EtiquetaOferta from "../atoms/EtiquetaOferta";
import Precio from "../atoms/Precio";
import Boton from "../atoms/Boton";

function TarjetaServicio(props) {
  
  const enOferta = props.precioOferta !== null && props.precioOferta !== undefined;

  return (
    <div className="tarjeta-servicio">
      <h3 className="tarjeta-titulo">{props.titulo}</h3>

      <div className="tarjeta-etiquetas">
        {props.duracion && <EtiquetaDuracion duracion={props.duracion} />}
        <EtiquetaModalidad modalidad={props.modalidad} />
        {enOferta && <EtiquetaOferta precio={props.precio} precioOferta={props.precioOferta} />}
      </div>

      <Precio
        valor={enOferta ? props.precioOferta : props.precio}
        precioAnterior={enOferta ? props.precio : null}
      />

      <div className="tarjeta-contenedor-boton d-flex justify-content-center gap-2">
        <Boton texto="Ver detalle" variante="outline-primary" onClick={props.onVerDetalle} />
        <Boton texto="Agregar" onClick={props.onAgregar} />
      </div>
    </div>
  );
}

export default TarjetaServicio;
