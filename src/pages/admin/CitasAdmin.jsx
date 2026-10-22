import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaCitas from "../../components/organisms/TablaCitas";
import CampoSelector from "../../components/molecules/CampoSelector";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCitas } from "../../services/citasService";
import { agregarNombreNutricionista } from "../../services/nutricionistasService";
import { ordenarCitas } from "../../utils/fechas";

const opcionesEstado = [
  { valor: "pendiente", texto: "Pendiente" },
  { valor: "confirmada", texto: "Confirmada" },
  { valor: "atendida", texto: "Atendida" },
  { valor: "cancelada", texto: "Cancelada" },
  { valor: "inasistencia", texto: "No asistió" },
];

function CitasAdmin() {
  const navigate = useNavigate();
  const [estado, setEstado] = useState("");
  useTituloPagina("Citas");

  const todas = ordenarCitas(listarCitas());
  const visibles = estado === "" ? todas : todas.filter((cita) => cita.estado === estado);

  return (
    <PlantillaPanel titulo="Citas">
      <div className="col-12 col-md-4">
        <CampoSelector
          label="Filtrar por estado"
          id="filtro-estado"
          name="estado"
          textoInicial="Todos los estados"
          opciones={opcionesEstado}
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </div>

      <TablaCitas
        citas={agregarNombreNutricionista(visibles)}
        mensajeVacio="No hay citas con ese estado."
        onVer={(id) => navigate("/admin/citas/" + id)}
      />
    </PlantillaPanel>
  );
}

export default CitasAdmin;
