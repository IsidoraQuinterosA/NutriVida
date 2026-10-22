import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TarjetaResumen from "./TarjetaResumen";

describe("TarjetaResumen", () => {
  it("muestra el número, el título y avisa al hacer clic en su botón", async () => {
    const onClick = vi.fn();
    render(<TarjetaResumen numero={3} titulo="Citas pendientes" textoBoton="Ver citas" onClick={onClick} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Citas pendientes")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Ver citas" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
