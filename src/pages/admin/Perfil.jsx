import PlantillaPanel from "../../components/templates/PlantillaPanel";
import PerfilAdmin from "../../components/organisms/PerfilAdmin";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";

function Perfil() {
  const sesion = useSesion();
  useTituloPagina("Mi perfil");

  return (
    <PlantillaPanel titulo="Mi perfil">
      <PerfilAdmin usuario={sesion.usuario} />
    </PlantillaPanel>
  );
}

export default Perfil;
