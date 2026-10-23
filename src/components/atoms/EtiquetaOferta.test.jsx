import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EtiquetaOferta from "./EtiquetaOferta";

describe("EtiquetaOferta", () => {
  it("muestra el porcentaje de descuento redondeado", () => {
    render(<EtiquetaOferta precio={65000} precioOferta={55250} />);

    expect(screen.getByText("Oferta -15%")).toBeInTheDocument();
  });
});