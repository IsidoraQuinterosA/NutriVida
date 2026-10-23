import { describe, it, expect } from "vitest";
import { validarRun, validarFechaCita, validarHoraCita } from "./validaciones";

const carolina = {
  nombre: "Nut. Carolina Fuentes M.",
  dias: [1, 3, 5],
  diasTexto: "Lunes, Miércoles, Viernes",
  horaInicio: "09:00",
  horaFin: "17:00",
};

describe("validarRun", () => {
  it("acepta un RUN con dígito verificador correcto", () => {
    expect(validarRun("123456785")).toBe("");
  });

  it("rechaza un RUN con dígito verificador incorrecto", () => {
    expect(validarRun("12345678K")).toBe("El dígito verificador del RUN no es correcto.");
  });
});

describe("validarFechaCita", () => {
  it("rechaza un día en que el nutricionista no atiende", () => {
    expect(validarFechaCita("2026-10-27", carolina, "2026-10-21")).toContain("no atiende ese día");
  });

  it("rechaza una fecha anterior a hoy", () => {
    expect(validarFechaCita("2026-10-19", carolina, "2026-10-21")).toBe("La fecha no puede ser anterior a hoy.");
  });

  it("acepta un día de atención desde hoy en adelante", () => {
    expect(validarFechaCita("2026-10-26", carolina, "2026-10-21")).toBe("");
  });
});

describe("validarHoraCita", () => {
  it("rechaza una hora fuera del horario del nutricionista", () => {
    expect(validarHoraCita("18:00", carolina)).toBe("La hora debe estar entre 09:00 y 17:00.");
  });
});
