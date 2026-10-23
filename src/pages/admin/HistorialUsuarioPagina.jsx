import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaCitas from "../../components/organisms/TablaCitas";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerUsuario } from "../../services/usuariosService";
import { listarPorPaciente } from "../../services/citasService";
import { agregarNombreNutricionista } from "../../services/nutricionistasService";
import { ordenarCitas } from "../../utils/fechas";

function HistorialUsuarioPagina() {
  const navigate = useNavigate();
  const params = useParams();
  const usuario = obtenerUsuario(params.id);
  useTituloPagina("Historial del usuario");

  if (!usuario) {
    return (
      <PlantillaPanel titulo="Historial del usuario">
        <p>No existe el usuario.</p>
      </PlantillaPanel>
    );
  }

  return (
    <PlantillaPanel titulo={"Historial de " + usuario.nombre + " " + usuario.apellidos}>
      <TablaCitas
        citas={agregarNombreNutricionista(ordenarCitas(listarPorPaciente(usuario.correo)))}
        mensajeVacio="Este usuario todavía no tiene citas."
        onVer={(id) => navigate("/admin/citas/" + id)}
      />
    </PlantillaPanel>
  );
}

export default HistorialUsuarioPagina;
