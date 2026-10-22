import { useState, useEffect } from "react";
import { SolicitudContext } from "./contextos";
import { leer, guardar } from "../services/almacenamiento";
import { calcularTotal, obtenerPrecioFinal } from "../utils/precios";

const CLAVE = "nutrivida_solicitud";

// La "solicitud en curso" (el carrito de NutriVida): los servicios que el paciente
// eligió antes de confirmar su cita. Se guarda en localStorage para no perderla al recargar.
function SolicitudProvider(props) {
  const [items, setItems] = useState(() => leer(CLAVE, []));

  // Cada vez que cambian los items, se guardan
  useEffect(() => {
    guardar(CLAVE, items);
  }, [items]);

  function agregar(servicio) {
    const existente = items.find((item) => item.codigo === servicio.codigo);

    if (existente) {
      cambiarCantidad(servicio.codigo, existente.cantidad + 1);
      return;
    }

    const nuevoItem = {
      codigo: servicio.codigo,
      nombre: servicio.nombre,
      precio: obtenerPrecioFinal(servicio),
      cantidad: 1,
    };
    setItems([...items, nuevoItem]);
  }

  function cambiarCantidad(codigo, cantidad) {
    if (cantidad < 1) {
      return;
    }
    setItems(items.map((item) => (item.codigo === codigo ? { ...item, cantidad } : item)));
  }

  function quitar(codigo) {
    setItems(items.filter((item) => item.codigo !== codigo));
  }

  function limpiar() {
    setItems([]);
  }

  const total = calcularTotal(items);
  const cantidadTotal = items.reduce((suma, item) => suma + item.cantidad, 0);

  return (
    <SolicitudContext.Provider value={{ items, total, cantidadTotal, agregar, cambiarCantidad, quitar, limpiar }}>
      {props.children}
    </SolicitudContext.Provider>
  );
}

export default SolicitudProvider;
