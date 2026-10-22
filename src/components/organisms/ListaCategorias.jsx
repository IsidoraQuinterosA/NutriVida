import TipoServicio from "../molecules/TipoServicio";

function ListaCategorias(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {props.categorias.map((categoria) => (
        <TipoServicio
          key={categoria.id}
          titulo={categoria.nombre}
          descripcion={categoria.descripcion}
          textoBoton="Ver servicios"
          onSeleccionar={() => props.onSeleccionar(categoria.id)}
        />
      ))}
    </div>
  );
}

export default ListaCategorias;
