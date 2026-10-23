import { describe, it, expect } from "vitest";
import { formatearPrecio, calcularTotal, obtenerPrecioFinal } from "./precios";

describe("formatearPrecio", () => {
  it("agrega el símbolo $ y el separador de miles", () => {
    expect(formatearPrecio(35000)).toBe("$35.000");
  });
});

describe("calcularTotal", () => {
  it("suma precio por cantidad de cada servicio", () => {
    const items = [
      { precio: 35000, cantidad: 1 },
      { precio: 15000, cantidad: 2 },
    ];

    const total = calcularTotal(items);

    expect(total).toBe(65000);
  });

  it("devuelve 0 si la solicitud está vacía", () => {
    expect(calcularTotal([])).toBe(0);
  });
});

describe("obtenerPrecioFinal", () => {
  it("usa el precio de oferta cuando el servicio está en oferta", () => {
    expect(obtenerPrecioFinal({ precio: 65000, precioOferta: 55250 })).toBe(55250);
  });

  it("usa el precio normal cuando no hay oferta", () => {
    expect(obtenerPrecioFinal({ precio: 35000, precioOferta: null })).toBe(35000);
  });
});
