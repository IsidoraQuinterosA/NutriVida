import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioUsuario from "../../components/organisms/FormularioUsuario";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerUsuario, actualizarUsuario } from "../../services/usuariosService";
import { listarNutricionistas } from "../../services/nutricionistasService";

function EditarUsuario() {
  const navigate = useNavigate();
  const params = useParams();
  const usuario = obtenerUsuario(params.id);
  useTituloPagina("Editar usuario");

  if (!usuario) {
    return (
      <PlantillaPanel titulo="Editar usuario">
        <p>No existe el usuario.</p>
      </PlantillaPanel>
    );
  }

  function guardar(datos) {
    actualizarUsuario(usuario.id, datos);
    navigate("/admin/usuarios");
  }

  return (
    <PlantillaPanel titulo={"Editar " + usuario.nombre + " " + usuario.apellidos}>
      <FormularioUsuario
        usuarioInicial={usuario}
        nutricionistas={listarNutricionistas()}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/usuarios")}
      />
    </PlantillaPanel>
  );
}

export default EditarUsuario;
