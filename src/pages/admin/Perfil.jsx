import { useState, useEffect } from "react";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import PerfilAdmin from "../../components/organisms/PerfilAdmin";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerUsuarioActual } from "../../services/authService";
import { obtenerMensajeError } from "../../services/api";
import { crearUsuarioDesdeApi } from "../../dto/auth.dto";

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState("");
  useTituloPagina("Mi perfil");

  useEffect(() => {
    obtenerUsuarioActual()
      .then((datos) => setUsuario(crearUsuarioDesdeApi(datos)))
      .catch((falla) => setError(obtenerMensajeError(falla)));
  }, []);

  return (
    <PlantillaPanel titulo="Mi perfil">
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {!error && !usuario && <p role="status">Cargando perfil...</p>}
      {usuario && <PerfilAdmin usuario={usuario} />}
    </PlantillaPanel>
  );
}

export default Perfil;