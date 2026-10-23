import { describe, it, expect, beforeEach } from "vitest";
import { crearCita, listarCitas, cambiarEstado } from "./citasService";

const datosCita = {
  pacienteNombre: "Paciente de Prueba",
  pacienteCorreo: "prueba@correo.cl",
  nutricionistaId: "NUT003",
  fecha: "2026-10-30",
  hora: "10:00",
  motivo: "Cita de prueba",
  servicios: [{ codigo: "EV003", nombre: "Encuesta de hábitos alimentarios", precio: 10000, cantidad: 1 }],
  total: 10000,
};

describe("citasService (CRUD con persistencia)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("crea una cita pendiente con número correlativo y la deja guardada", () => {
    const cantidadInicial = listarCitas().length;

    const cita = crearCita(datosCita);

    expect(cita.estado).toBe("pendiente");
    expect(cita.numero).toBe("NV-0007");
    expect(listarCitas()).toHaveLength(cantidadInicial + 1);
  });

  it("rechaza una cita si el nutricionista ya tiene ese horario ocupado", () => {
    crearCita(datosCita);

    expect(() => crearCita(datosCita)).toThrow("ya tiene una cita en ese horario");
  });

  it("permite reutilizar el horario si la cita anterior fue cancelada", () => {
    const primera = crearCita(datosCita);
    cambiarEstado(primera.id, "cancelada");

    expect(() => crearCita(datosCita)).not.toThrow();
  });
});
