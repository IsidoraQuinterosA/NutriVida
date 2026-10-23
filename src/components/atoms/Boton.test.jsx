import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Boton from "./Boton";

describe("Boton", () => {
  it("muestra su texto y llama a onClick al hacer clic", async () => {
    const onClick = vi.fn();
    render(<Boton texto="Agendar" onClick={onClick} />);

    await userEvent.click(screen.getByRole("button", { name: "Agendar" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("usa la variante primary si no se indica otra", () => {
    render(<Boton texto="Agendar" />);

    expect(screen.getByRole("button")).toHaveClass("btn", "btn-primary");
  });

  it("no llama a onClick cuando está deshabilitado", async () => {
    const onClick = vi.fn();
    render(<Boton texto="Agendar" onClick={onClick} disabled={true} />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });
});