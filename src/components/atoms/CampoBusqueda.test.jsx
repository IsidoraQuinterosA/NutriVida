import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CampoBusqueda from "./CampoBusqueda";

describe("CampoBusqueda", () => {
  it("avisa con onChange cada vez que la persona escribe", async () => {
    const onChange = vi.fn();
    render(<CampoBusqueda etiqueta="Buscar servicio" value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole("searchbox", { name: "Buscar servicio" }), "plan");

    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("muestra el valor que recibe por props", () => {
    render(<CampoBusqueda etiqueta="Buscar servicio" value="taller" onChange={() => {}} />);

    expect(screen.getByRole("searchbox")).toHaveValue("taller");
  });
});