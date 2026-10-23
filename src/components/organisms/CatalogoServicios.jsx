import TarjetaServicio from "../molecules/TarjetaServicio";

function CatalogoServicios(props) {
  if (props.servicios.length === 0) {
    return <p className="text-body-secondary">No hay servicios que coincidan con tu búsqueda.</p>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {props.servicios.map((servicio) => (
        <TarjetaServicio
          key={servicio.codigo}
          titulo={servicio.nombre}
          duracion={servicio.duracion}
          modalidad={servicio.modalidad}
          precio={servicio.precio}
          precioOferta={servicio.precioOferta}
          onVerDetalle={() => props.onVerDetalle(servicio.codigo)}
          onAgregar={() => props.onAgregar(servicio)}
        />
      ))}
    </div>
  );
}

export default CatalogoServicios;
