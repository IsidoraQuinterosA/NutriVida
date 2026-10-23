import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ComprobanteCita from "../../components/organisms/ComprobanteCita";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerCita, cambiarEstado } from "../../services/citasService";
import { obtenerNutricionista } from "../../services/nutricionistasService";

function ComprobanteCitaPagina() {
  const navigate = useNavigate();
  const params = useParams();
  const [cita, setCita] = useState(() => obtenerCita(params.id));
  useTituloPagina("Comprobante de la cita");

  if (!cita) {
    return (
      <PlantillaPanel titulo="Comprobante de la cita">
        <p>No existe la cita.</p>
      </PlantillaPanel>
    );
  }

  function actualizarEstado(estado) {
    setCita(cambiarEstado(cita.id, estado));
  }

  return (
    <PlantillaPanel titulo="Comprobante de la cita">
      <ComprobanteCita
        cita={cita}
        nutricionistaNombre={obtenerNutricionista(cita.nutricionistaId).nombre}
        onCambiarEstado={actualizarEstado}
        onVolver={() => navigate("/admin/citas")}
      />
    </PlantillaPanel>
  );
}

export default ComprobanteCitaPagina;
