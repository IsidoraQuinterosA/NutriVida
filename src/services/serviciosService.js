// CRUD de servicios del catálogo, con persistencia en localStorage.
import { servicios as serviciosIniciales } from "../data/servicios";
import { leer, guardar } from "./almacenamiento";

const CLAVE = "nutrivida_servicios";

// Un servicio es "crítico" si le quedan esta cantidad de cupos o menos.
export const LIMITE_CRITICO = 3;

export function listarServicios() {
  return leer(CLAVE, serviciosIniciales);
}

export function obtenerServicio(codigo) {
  return listarServicios().find((servicio) => servicio.codigo === codigo);
}

export function crearServicio(servicio) {
  const lista = listarServicios();

  if (lista.some((s) => s.codigo === servicio.codigo)) {
    throw new Error("Ya existe un servicio con el código " + servicio.codigo);
  }

  guardar(CLAVE, [...lista, servicio]);
  return servicio;
}

export function actualizarServicio(codigo, cambios) {
  const lista = listarServicios();

  if (!lista.some((s) => s.codigo === codigo)) {
    throw new Error("No existe el servicio " + codigo);
  }

  // El código no se puede cambiar: es el identificador del servicio
  const nuevaLista = lista.map((s) => (s.codigo === codigo ? { ...s, ...cambios, codigo } : s));
  guardar(CLAVE, nuevaLista);
  return nuevaLista.find((s) => s.codigo === codigo);
}

export function eliminarServicio(codigo) {
  guardar(CLAVE, listarServicios().filter((s) => s.codigo !== codigo));
}

// ----- Consultas que usan las vistas -----

export function listarPorCategoria(categoriaId) {
  return listarServicios().filter((s) => s.categoria === categoriaId);
}

export function listarOfertas() {
  return listarServicios().filter((s) => s.precioOferta !== null);
}

export function listarCriticos() {
  return listarServicios().filter((s) => s.cupos <= LIMITE_CRITICO);
}

// Filtra por texto (en el nombre) y por categoría. Si un filtro viene vacío, no se aplica.
export function buscarServicios(texto, categoriaId) {
  const buscado = texto.trim().toLowerCase();

  return listarServicios().filter((s) => {
    const calzaTexto = buscado === "" || s.nombre.toLowerCase().includes(buscado);
    const calzaCategoria = categoriaId === "" || s.categoria === categoriaId;
    return calzaTexto && calzaCategoria;
  });
}
