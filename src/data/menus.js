// Enlaces del menú lateral de cada panel, según el rol del usuario.
export const menus = {
  paciente: [
    { ruta: "/paciente", texto: "Resumen" },
    { ruta: "/paciente/citas", texto: "Mis citas" },
    { ruta: "/paciente/progreso", texto: "Mi progreso y plan" },
    { ruta: "/servicios", texto: "Agendar nueva cita" },
  ],
  nutricionista: [
    { ruta: "/nutricionista", texto: "Resumen" },
    { ruta: "/nutricionista/agenda", texto: "Mi agenda" },
    { ruta: "/nutricionista/pacientes", texto: "Mis pacientes" },
  ],
  administrador: [
    { ruta: "/admin", texto: "Dashboard" },
    { ruta: "/admin/citas", texto: "Citas" },
    { ruta: "/admin/servicios", texto: "Servicios" },
    { ruta: "/admin/categorias", texto: "Categorías" },
    { ruta: "/admin/usuarios", texto: "Usuarios" },
    { ruta: "/admin/criticos", texto: "Servicios críticos" },
    { ruta: "/admin/reportes", texto: "Reportes" },
    { ruta: "/admin/perfil", texto: "Mi perfil" },
  ],
};
