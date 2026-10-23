export function rutaDelPanel(rol) {
  if (rol === "administrador") return "/admin";
  if (rol === "nutricionista") return "/nutricionista";
  return "/paciente";
}

export const nombresDeRol = {
  paciente: "Paciente",
  nutricionista: "Nutricionista",
  administrador: "Administrador",
};
