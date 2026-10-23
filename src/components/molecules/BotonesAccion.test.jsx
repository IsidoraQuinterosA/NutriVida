import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BotonesAccion from "./BotonesAccion";

describe("BotonesAccion", () => {
  it("pide confirmación antes de eliminar", async () => {
    const onEliminar = vi.fn();
    render(<BotonesAccion onEditar={() => {}} onEliminar={onEliminar} />);

    await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));

    expect(onEliminar).not.toHaveBeenCalled();
    expect(screen.getByText("¿Eliminar?")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Sí" }));
    expect(onEliminar).toHaveBeenCalledTimes(1);
  });

  it("no elimina si se responde No", async () => {
    const onEliminar = vi.fn();
    render(<BotonesAccion onEliminar={onEliminar} />);

    await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));
    await userEvent.click(screen.getByRole("button", { name: "No" }));

    expect(onEliminar).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Eliminar" })).toBeInTheDocument();
  });

  it("solo muestra los botones de las acciones que recibe", () => {
    render(<BotonesAccion onEditar={() => {}} />);

    expect(screen.getByRole("button", { name: "Editar" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Ver" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Eliminar" })).not.toBeInTheDocument();
  });
});
