import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaCitas from "../../components/organisms/TablaCitas";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerUsuario } from "../../services/usuarioService";
import { listarPorPaciente } from "../../services/citasService";
import { agregarNombreNutricionista } from "../../services/nutricionistasService";
import { obtenerMensajeError } from "../../services/api";
import { ordenarCitas } from "../../utils/fechas";

function HistorialUsuarioPagina() {
  const navigate = useNavigate();
  const params = useParams();
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState("");
  useTituloPagina("Historial del usuario");

  useEffect(() => {
    obtenerUsuario(params.id)
      .then(setUsuario)
      .catch((falla) => setError(obtenerMensajeError(falla)));
  }, [params.id]);

  if (error) {
    return (
      <PlantillaPanel titulo="Historial del usuario">
        <div className="alert alert-danger" role="alert">{error}</div>
      </PlantillaPanel>
    );
  }

  if (!usuario) {
    return (
      <PlantillaPanel titulo="Historial del usuario">
        <p role="status">Cargando historial...</p>
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