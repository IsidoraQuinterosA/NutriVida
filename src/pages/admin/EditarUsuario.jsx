import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioUsuario from "../../components/organisms/FormularioUsuario";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerUsuario, actualizarUsuario } from "../../services/usuarioService";
import { listarNutricionistas } from "../../services/nutricionistasService";
import { obtenerMensajeError } from "../../services/api";
import { crearEdicionUsuarioDto } from "../../dto/usuario.dto";

function EditarUsuario() {
  const navigate = useNavigate();
  const params = useParams();
  const [usuario, setUsuario] = useState(null);
  const [errorCarga, setErrorCarga] = useState("");
  const [errorGeneral, setErrorGeneral] = useState("");
  const [cargando, setCargando] = useState(false);
  useTituloPagina("Editar usuario");

  useEffect(() => {
    obtenerUsuario(params.id)
      .then(setUsuario)
      .catch((error) => setErrorCarga(obtenerMensajeError(error)));
  }, [params.id]);

  async function guardar(datos) {
    setCargando(true);
    setErrorGeneral("");
    try {
      await actualizarUsuario(usuario.id, crearEdicionUsuarioDto(datos));
      navigate("/admin/usuarios");
    } catch (error) {
      setErrorGeneral(obtenerMensajeError(error));
    } finally {
      setCargando(false);
    }
  }

  if (errorCarga) {
    return (
      <PlantillaPanel titulo="Editar usuario">
        <div className="alert alert-danger" role="alert">{errorCarga}</div>
      </PlantillaPanel>
    );
  }

  if (!usuario) {
    return (
      <PlantillaPanel titulo="Editar usuario">
        <p role="status">Cargando usuario...</p>
      </PlantillaPanel>
    );
  }

  return (
    <PlantillaPanel titulo={"Editar " + usuario.nombre + " " + usuario.apellidos}>
      <FormularioUsuario
        usuarioInicial={usuario}
        nutricionistas={listarNutricionistas()}
        errorGeneral={errorGeneral}
        cargando={cargando}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/usuarios")}
      />
    </PlantillaPanel>
  );
}

export default EditarUsuario;