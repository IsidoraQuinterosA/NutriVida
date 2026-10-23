import Boton from "../atoms/Boton";
import { formatearFecha } from "../../utils/fechas";

function DetalleBlog(props) {
  return (
    <article className="text-start">
      <h1 className="h2">{props.entrada.titulo}</h1>
      <p className="text-body-secondary">{formatearFecha(props.entrada.fecha)} · {props.entrada.autor}</p>

      {props.entrada.contenido.map((parrafo) => (
        <p key={parrafo}>{parrafo}</p>
      ))}

      <Boton texto="Volver al blog" variante="outline-secondary" onClick={props.onVolver} />
    </article>
  );
}

export default DetalleBlog;