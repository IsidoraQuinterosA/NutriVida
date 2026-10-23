import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import EtiquetaModalidad from "../atoms/EtiquetaModalidad";
import EtiquetaOferta from "../atoms/EtiquetaOferta";
import Precio from "../atoms/Precio";
import Boton from "../atoms/Boton";

function DetalleServicio(props) {
    
  const servicio = props.servicio;
  const enOferta = servicio.precioOferta !== null;

  return (
    <div className="card">
      <div className="card-body">
        <p className="text-body-secondary small mb-1">{props.categoriaNombre} · {servicio.codigo}</p>
        <h1 className="h3 card-title">{servicio.nombre}</h1>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
          {servicio.duracion && <EtiquetaDuracion duracion={servicio.duracion} />}
          <EtiquetaModalidad modalidad={servicio.modalidad} />
          {enOferta && <EtiquetaOferta precio={servicio.precio} precioOferta={servicio.precioOferta} />}
        </div>

        <p className="card-text">{servicio.descripcion}</p>

        <div className="h4 mb-4">
          <Precio valor={enOferta ? servicio.precioOferta : servicio.precio} precioAnterior={enOferta ? servicio.precio : null} />
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
          <Boton texto="Volver" variante="outline-secondary" onClick={props.onVolver} />
          <Boton texto="Agregar a mi solicitud" onClick={props.onAgregar} />
        </div>
      </div>
    </div>
  );
}

export default DetalleServicio;