import { categorias as categoriasIniciales } from "../data/categorias";
import { leer, guardar } from "./almacenamiento";
import { listarPorCategoria } from "./serviciosService";

const CLAVE = "nutrivida_categorias";

export function crearIdDesdeNombre(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export function listarCategorias() {
  return leer(CLAVE, categoriasIniciales);
}

export function obtenerCategoria(id) {
  return listarCategorias().find((categoria) => categoria.id === id);
}

export function crearCategoria(datos) {
  const lista = listarCategorias();
  const nueva = { id: crearIdDesdeNombre(datos.nombre), nombre: datos.nombre.trim(), descripcion: datos.descripcion.trim() };

  if (lista.some((c) => c.id === nueva.id)) {
    throw new Error("Ya existe la categoría " + nueva.nombre);
  }

  guardar(CLAVE, [...lista, nueva]);
  return nueva;
}

export function actualizarCategoria(id, cambios) {
  const lista = listarCategorias();

  if (!lista.some((c) => c.id === id)) {
    throw new Error("No existe la categoría " + id);
  }

  const nuevaLista = lista.map((c) => (c.id === id ? { ...c, ...cambios, id } : c));
  guardar(CLAVE, nuevaLista);
  return nuevaLista.find((c) => c.id === id);
}

export function eliminarCategoria(id) {
  if (listarPorCategoria(id).length > 0) {
    throw new Error("No se puede eliminar una categoría que todavía tiene servicios.");
  }

  guardar(CLAVE, listarCategorias().filter((c) => c.id !== id));
}
