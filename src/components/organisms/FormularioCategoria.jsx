import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import CampoAreaTexto from "../molecules/CampoAreaTexto";
import Boton from "../atoms/Boton";
import { validarObligatorio } from "../../utils/validaciones";

function FormularioCategoria(props) {
  const inicial = props.categoriaInicial;
  const [nombre, setNombre] = useState(inicial ? inicial.nombre : "");
  const [descripcion, setDescripcion] = useState(inicial ? inicial.descripcion : "");
  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      nombre: validarObligatorio(nombre, "nombre"),
      descripcion: validarObligatorio(descripcion, "descripción"),
    };
    setErrores(nuevosErrores);

    if (nuevosErrores.nombre === "" && nuevosErrores.descripcion === "") {
      props.onEnviar({ nombre: nombre.trim(), descripcion: descripcion.trim() });
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate>
      {props.errorGeneral && <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>}

      <CampoFormulario label="Nombre" id="nombre" name="nombre" value={nombre}
        onChange={(e) => setNombre(e.target.value)} error={errores.nombre} />
      <CampoAreaTexto label="Descripción" id="descripcion" name="descripcion" value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} error={errores.descripcion} />

      <div className="d-flex gap-2">
        <Boton texto="Cancelar" variante="outline-secondary" onClick={props.onCancelar} />
        <Boton texto={inicial ? "Guardar cambios" : "Crear categoría"} type="submit" />
      </div>
    </form>
  );
}

export default FormularioCategoria;
