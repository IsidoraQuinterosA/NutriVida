import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import CampoSelector from "../molecules/CampoSelector";
import CampoAreaTexto from "../molecules/CampoAreaTexto";
import Boton from "../atoms/Boton";
import { validarObligatorio, validarNumeroPositivo } from "../../utils/validaciones";
import { validarCodigoServicio, validarPrecioOferta, validarCupos } from "../../utils/validacionesAdmin";

const opcionesModalidad = [
  { valor: "Presencial", texto: "Presencial" },
  { valor: "Online", texto: "Online" },
  { valor: "Presencial (grupo)", texto: "Presencial (grupo)" },
];

// Sirve para crear y para editar. Si llega props.servicioInicial, está en modo edición.
function FormularioServicio(props) {
  const inicial = props.servicioInicial;
  const esEdicion = Boolean(inicial);

  const [codigo, setCodigo] = useState(esEdicion ? inicial.codigo : "");
  const [nombre, setNombre] = useState(esEdicion ? inicial.nombre : "");
  const [categoria, setCategoria] = useState(esEdicion ? inicial.categoria : "");
  const [modalidad, setModalidad] = useState(esEdicion ? inicial.modalidad : "");
  const [duracion, setDuracion] = useState(esEdicion && inicial.duracion ? String(inicial.duracion) : "");
  const [precio, setPrecio] = useState(esEdicion ? String(inicial.precio) : "");
  const [precioOferta, setPrecioOferta] = useState(esEdicion && inicial.precioOferta ? String(inicial.precioOferta) : "");
  const [cupos, setCupos] = useState(esEdicion ? String(inicial.cupos) : "");
  const [descripcion, setDescripcion] = useState(esEdicion ? inicial.descripcion : "");
  const [errores, setErrores] = useState({});

  const opcionesCategoria = props.categorias.map((c) => ({ valor: c.id, texto: c.nombre }));

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      codigo: validarCodigoServicio(codigo),
      nombre: validarObligatorio(nombre, "nombre"),
      categoria: validarObligatorio(categoria, "categoría"),
      modalidad: validarObligatorio(modalidad, "modalidad"),
      duracion: duracion === "" ? "" : validarNumeroPositivo(duracion, "duración"),
      precio: validarNumeroPositivo(precio, "precio"),
      precioOferta: validarPrecioOferta(precioOferta, precio),
      cupos: validarCupos(cupos),
      descripcion: validarObligatorio(descripcion, "descripción"),
    };
    setErrores(nuevosErrores);

    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    if (formularioValido) {
      props.onEnviar({
        codigo: codigo.trim(),
        nombre: nombre.trim(),
        categoria,
        modalidad,
        duracion: duracion === "" ? null : Number(duracion),
        precio: Number(precio),
        precioOferta: precioOferta === "" ? null : Number(precioOferta),
        cupos: Number(cupos),
        descripcion: descripcion.trim(),
      });
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate>
      {props.errorGeneral && <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>}

      <Row>
        <Col xs={12} md={4}>
          <CampoFormulario label="Código" id="codigo" name="codigo" placeholder="Ej: CN006" value={codigo}
            onChange={(e) => setCodigo(e.target.value.toUpperCase())} error={errores.codigo} disabled={esEdicion} />
        </Col>
        <Col xs={12} md={8}>
          <CampoFormulario label="Nombre" id="nombre" name="nombre" value={nombre}
            onChange={(e) => setNombre(e.target.value)} error={errores.nombre} />
        </Col>
        <Col xs={12} md={6}>
          <CampoSelector label="Categoría" id="categoria" name="categoria" textoInicial="Selecciona una categoría"
            opciones={opcionesCategoria} value={categoria} onChange={(e) => setCategoria(e.target.value)} error={errores.categoria} />
        </Col>
        <Col xs={12} md={6}>
          <CampoSelector label="Modalidad" id="modalidad" name="modalidad" textoInicial="Selecciona una modalidad"
            opciones={opcionesModalidad} value={modalidad} onChange={(e) => setModalidad(e.target.value)} error={errores.modalidad} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Duración (min)" type="number" id="duracion" name="duracion" placeholder="Opcional" value={duracion}
            onChange={(e) => setDuracion(e.target.value)} error={errores.duracion} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Precio" type="number" id="precio" name="precio" value={precio}
            onChange={(e) => setPrecio(e.target.value)} error={errores.precio} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Precio oferta" type="number" id="precio-oferta" name="precioOferta" placeholder="Opcional" value={precioOferta}
            onChange={(e) => setPrecioOferta(e.target.value)} error={errores.precioOferta} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Cupos" type="number" id="cupos" name="cupos" value={cupos}
            onChange={(e) => setCupos(e.target.value)} error={errores.cupos} />
        </Col>
      </Row>

      <CampoAreaTexto label="Descripción" id="descripcion" name="descripcion" value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} error={errores.descripcion} />

      <div className="d-flex gap-2">
        <Boton texto="Cancelar" variante="outline-secondary" onClick={props.onCancelar} />
        <Boton texto={esEdicion ? "Guardar cambios" : "Crear servicio"} type="submit" />
      </div>
    </form>
  );
}

export default FormularioServicio;
