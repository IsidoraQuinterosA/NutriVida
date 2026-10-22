import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ListaCriticos from "../../components/organisms/ListaCriticos";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCriticos, LIMITE_CRITICO } from "../../services/serviciosService";

function Criticos() {
  const navigate = useNavigate();
  useTituloPagina("Servicios críticos");

  return (
    <PlantillaPanel titulo="Servicios críticos">
      <p>Servicios con {LIMITE_CRITICO} cupos o menos disponibles esta semana.</p>
      <ListaCriticos
        servicios={listarCriticos()}
        onEditar={(codigo) => navigate("/admin/servicios/" + codigo + "/editar")}
      />
    </PlantillaPanel>
  );
}

export default Criticos;

