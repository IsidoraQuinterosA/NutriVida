import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BarraNavegacion from "./BarraNavegacion";

describe("BarraNavegacion", () => {
  it("avisa la ruta del enlace al hacer clic en él", async () => {
    const onNavegar = vi.fn();
    render(<BarraNavegacion onNavegar={onNavegar} usuario={null} cantidadSolicitud={0} />);

    await userEvent.click(screen.getByRole("link", { name: "Servicios" }));

    expect(onNavegar).toHaveBeenCalledTimes(1);
    expect(onNavegar).toHaveBeenCalledWith("/servicios");
  });

  it("no recarga la página al hacer clic en un enlace", () => {
    render(<BarraNavegacion onNavegar={() => {}} usuario={null} cantidadSolicitud={0} />);

    expect(fireEvent.click(screen.getByRole("link", { name: "Inicio" }))).toBe(false);
  });

  it("muestra Mi panel y Cerrar sesión cuando hay un usuario", async () => {
    const onCerrarSesion = vi.fn();
    render(
      <BarraNavegacion
        onNavegar={() => {}}
        usuario={{ nombre: "Ana" }}
        rutaPanel="/paciente"
        cantidadSolicitud={2}
        onCerrarSesion={onCerrarSesion}
      />
    );

    expect(screen.getByRole("button", { name: "Mi panel (Ana)" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Mi solicitud (2)" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Iniciar sesión" })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Cerrar sesión" }));
    expect(onCerrarSesion).toHaveBeenCalledTimes(1);
  });
});
