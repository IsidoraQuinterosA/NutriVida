import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioUsuario from "../../components/organisms/FormularioUsuario";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { crearUsuario } from "../../services/usuarioService";
import { listarNutricionistas } from "../../services/nutricionistasService";
import { obtenerMensajeError } from "../../services/api";
import { crearAltaUsuarioDto } from "../../dto/usuario.dto";

function NuevoUsuario() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  const [cargando, setCargando] = useState(false);
  useTituloPagina("Nuevo usuario");

  async function guardar(datos) {
    setCargando(true);
    setErrorGeneral("");
    try {
      await crearUsuario(crearAltaUsuarioDto(datos));
      navigate("/admin/usuarios");
    } catch (error) {
      setErrorGeneral(obtenerMensajeError(error));
    } finally {
      setCargando(false);
    }
  }

  return (
    <PlantillaPanel titulo="Nuevo usuario">
      <FormularioUsuario
        nutricionistas={listarNutricionistas()}
        errorGeneral={errorGeneral}
        cargando={cargando}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/usuarios")}
      />
    </PlantillaPanel>
  );
}

export default NuevoUsuario;