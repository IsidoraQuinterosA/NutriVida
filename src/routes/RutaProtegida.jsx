import { Navigate } from "react-router-dom";
import { useSesion } from "../hooks/useSesion";

// Envuelve las páginas privadas. Si no hay sesión, lleva al login.
// Si hay sesión pero el rol no corresponde, lleva al inicio.
function RutaProtegida(props) {
  const sesion = useSesion();

  if (!sesion.usuario) {
    return <Navigate to="/login" replace />;
  }

  if (props.rol && sesion.usuario.rol !== props.rol) {
    return <Navigate to="/" replace />;
  }

  return props.children;
}

export default RutaProtegida;
