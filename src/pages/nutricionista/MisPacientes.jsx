import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ListaPacientes from "../../components/organisms/ListaPacientes";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorNutricionista } from "../../services/citasService";

function pacientesDesdeCitas(citas) {
  const pacientes = [];

  citas.forEach((cita) => {
    const existente = pacientes.find((p) => p.correo === cita.pacienteCorreo);

    if (existente) {
      existente.cantidadCitas = existente.cantidadCitas + 1;
    } else {
      pacientes.push({ correo: cita.pacienteCorreo, nombre: cita.pacienteNombre, cantidadCitas: 1 });
    }
  });

  return pacientes;
}

function MisPacientes() {
  const navigate = useNavigate();
  const sesion = useSesion();
  useTituloPagina("Mis pacientes");

  const pacientes = pacientesDesdeCitas(listarPorNutricionista(sesion.usuario.nutricionistaId));

  return (
    <PlantillaPanel titulo="Mis pacientes">
      <ListaPacientes
        pacientes={pacientes}
        onVerFicha={(correo) => navigate("/nutricionista/pacientes/" + correo)}
      />
    </PlantillaPanel>
  );
}

export default MisPacientes;