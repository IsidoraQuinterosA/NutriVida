import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListaSolicitud from "./ListaSolicitud";

const items = [
  { codigo: "CN001", nombre: "Primera consulta nutricional", precio: 35000, cantidad: 1 },
  { codigo: "TG001", nombre: "Taller de alimentación saludable", precio: 12750, cantidad: 2 },
];

describe("ListaSolicitud", () => {
  it("muestra los servicios elegidos y el total", () => {
    render(<ListaSolicitud items={items} total={60500} onCambiarCantidad={() => {}} onQuitar={() => {}} />);

    expect(screen.getByText("Primera consulta nutricional")).toBeInTheDocument();
    expect(screen.getByText("Total: $60.500")).toBeInTheDocument();
  });

  it("avisa qué servicio quitar al presionar Quitar", async () => {
    const onQuitar = vi.fn();
    render(<ListaSolicitud items={items} total={60500} onCambiarCantidad={() => {}} onQuitar={onQuitar} />);

    // Hay un botón Quitar por servicio: se presiona el segundo
    await userEvent.click(screen.getAllByRole("button", { name: "Quitar" })[1]);

    expect(onQuitar).toHaveBeenCalledWith("TG001");
  });

  it("muestra un aviso cuando la solicitud está vacía", () => {
    render(<ListaSolicitud items={[]} total={0} onVerServicios={() => {}} />);

    expect(screen.getByText("Tu solicitud está vacía.")).toBeInTheDocument();
  });
});
