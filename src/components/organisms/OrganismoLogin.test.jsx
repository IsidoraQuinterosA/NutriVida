import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrganismoLogin from "./OrganismoLogin";

describe("OrganismoLogin", () => {
  it("muestra los errores y no avisa a la página si se envía vacío", async () => {
    const onEnviar = vi.fn();
    render(<OrganismoLogin onEnviar={onEnviar} onRegistrarse={() => {}} />);

    await userEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

    expect(screen.getByText("El correo es requerido.")).toBeInTheDocument();
    expect(screen.getByText("La contraseña es requerida.")).toBeInTheDocument();
    expect(onEnviar).not.toHaveBeenCalled();
  });

  it("avisa a la página con el correo y la contraseña cuando son válidos", async () => {
    const onEnviar = vi.fn();
    render(<OrganismoLogin onEnviar={onEnviar} onRegistrarse={() => {}} />);

    await userEvent.type(screen.getByLabelText("Correo electrónico"), "ana.perez@correo.cl");
    await userEvent.type(screen.getByLabelText("Contraseña"), "paciente123");
    await userEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

    expect(onEnviar).toHaveBeenCalledWith({ correo: "ana.perez@correo.cl", contrasena: "paciente123" });
  });

  it("muestra el error general que le pasa la página", () => {
    render(<OrganismoLogin onEnviar={() => {}} onRegistrarse={() => {}} errorGeneral="Correo o contraseña incorrectos." />);

    expect(screen.getByRole("alert")).toHaveTextContent("Correo o contraseña incorrectos.");
  });
});
