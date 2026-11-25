import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaUsuarios from "../../components/organisms/TablaUsuarios";
import Boton from "../../components/atoms/Boton";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarUsuarios, actualizarUsuario, desactivarUsuario } from "../../services/usuarioService";
import { obtenerMensajeError } from "../../services/api";
import { crearCambioEstadoDto } from "../../dto/usuario.dto";

function UsuariosAdmin() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  useTituloPagina("Usuarios");

  function cargar() {
    return listarUsuarios()
      .then((lista) => {
        setUsuarios(lista);
        setError("");
      })
      .catch((falla) => setError(obtenerMensajeError(falla)))
      .finally(() => setCargando(false));
  }

  useEffect(() => {
    listarUsuarios()
      .then((lista) => setUsuarios(lista))
      .catch((falla) => setError(obtenerMensajeError(falla)))
      .finally(() => setCargando(false));
  }, []);

  function esUnoMismo(id) {
    if (id === sesion.usuario.id) {
      setMensaje("");
      setError("No puedes desactivar tu propia cuenta.");
      return true;
    }
    return false;
  }

  async function cambiarActivo(id) {
    if (esUnoMismo(id)) return;
    const usuario = usuarios.find((u) => u.id === id);
    try {
      await actualizarUsuario(id, crearCambioEstadoDto(usuario, !usuario.activo));
      setMensaje(usuario.nombre + (usuario.activo ? " quedó desactivado." : " quedó activo."));
      await cargar();
    } catch (falla) {
      setMensaje("");
      setError(obtenerMensajeError(falla));
    }
  }

  async function eliminar(id) {
    if (esUnoMismo(id)) return;
    const usuario = usuarios.find((u) => u.id === id);
    try {
      await desactivarUsuario(id);
      setMensaje(usuario.nombre + " quedó desactivado. Su historial se conserva.");
      await cargar();
    } catch (falla) {
      setMensaje("");
      setError(obtenerMensajeError(falla));
    }
  }

  return (
    <PlantillaPanel titulo="Usuarios">
      <div className="mb-3">
        <Boton texto="Nuevo usuario" onClick={() => navigate("/admin/usuarios/nuevo")} />
      </div>

      {mensaje && <div className="alert alert-success" role="status">{mensaje}</div>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      {cargando ? (
        <p role="status">Cargando usuarios...</p>
      ) : (
        <TablaUsuarios
          usuarios={usuarios}
          onCambiarActivo={cambiarActivo}
          onHistorial={(id) => navigate("/admin/usuarios/" + id + "/historial")}
          onEditar={(id) => navigate("/admin/usuarios/" + id + "/editar")}
          onEliminar={eliminar}
        />
      )}
    </PlantillaPanel>
  );
}

export default UsuariosAdmin;
