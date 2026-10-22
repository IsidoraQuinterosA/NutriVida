import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaUsuarios from "../../components/organisms/TablaUsuarios";
import Boton from "../../components/atoms/Boton";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario } from "../../services/usuariosService";

function UsuariosAdmin() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const [usuarios, setUsuarios] = useState(() => listarUsuarios());
  const [error, setError] = useState("");
  useTituloPagina("Usuarios");

  // El administrador no puede desactivarse ni eliminarse a sí mismo
  function esUnoMismo(id) {
    if (id === sesion.usuario.id) {
      setError("No puedes desactivar ni eliminar tu propia cuenta.");
      return true;
    }
    setError("");
    return false;
  }

  function cambiarActivo(id) {
    if (esUnoMismo(id)) return;
    actualizarUsuario(id, { activo: !obtenerUsuario(id).activo });
    setUsuarios(listarUsuarios());
  }

  function eliminar(id) {
    if (esUnoMismo(id)) return;
    eliminarUsuario(id);
    setUsuarios(listarUsuarios());
  }

  return (
    <PlantillaPanel titulo="Usuarios">
      <div className="mb-3">
        <Boton texto="Nuevo usuario" onClick={() => navigate("/admin/usuarios/nuevo")} />
      </div>

      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      <TablaUsuarios
        usuarios={usuarios}
        onCambiarActivo={cambiarActivo}
        onHistorial={(id) => navigate("/admin/usuarios/" + id + "/historial")}
        onEditar={(id) => navigate("/admin/usuarios/" + id + "/editar")}
        onEliminar={eliminar}
      />
    </PlantillaPanel>
  );
}

export default UsuariosAdmin;
