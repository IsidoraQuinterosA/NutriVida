import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CampoFormulario from "./CampoFormulario";

describe("CampoFormulario", () => {
  it("une la etiqueta con su caja de texto", () => {
    render(<CampoFormulario label="Correo electrónico" id="correo" value="" onChange={() => {}} />);

    expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
  });

  it("marca el campo como inválido y muestra el mensaje de error", () => {
    render(<CampoFormulario label="Correo electrónico" id="correo" value="" onChange={() => {}} error="El correo es requerido." />);

    expect(screen.getByLabelText("Correo electrónico")).toHaveClass("is-invalid");
    expect(screen.getByText("El correo es requerido.")).toBeInTheDocument();
  });

  it("no muestra mensaje cuando no hay error", () => {
    const { container } = render(<CampoFormulario label="Correo electrónico" id="correo" value="" onChange={() => {}} />);

    expect(container.querySelector(".invalid-feedback")).toBeNull();
  });
});
