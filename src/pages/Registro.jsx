import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { registrar } from "../services/authService";
import { obtenerMensajeError } from "../services/api";
import { crearRegistroDto } from "../dto/auth.dto";

function Registro() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  const [cargando, setCargando] = useState(false);
  useTituloPagina("Crear cuenta");

  async function alRegistrarse(datos) {
    setCargando(true);
    setErrorGeneral("");
    try {
      await registrar(crearRegistroDto(datos));
      navigate("/login", { state: { mensaje: "Tu cuenta fue creada. Ya puedes iniciar sesión." } });
    } catch (error) {
      setErrorGeneral(obtenerMensajeError(error));
      window.scrollTo(0, 0);
    } finally {
      setCargando(false);
    }
  }

  function alIrAIniciarSesion() {
    navigate("/login");
  }

  return (
    <PlantillaPrincipal>
      <FormularioRegistro
        onEnviar={alRegistrarse}
        onIniciarSesion={alIrAIniciarSesion}
        errorGeneral={errorGeneral}
        cargando={cargando}
      />
    </PlantillaPrincipal>
  );
}

export default Registro;