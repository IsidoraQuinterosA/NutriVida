import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import EtiquetaModalidad from "../atoms/EtiquetaModalidad";
import Boton from "../atoms/Boton";
import Precio from"../atoms/Precio";
import "../../App.css";


function TarjetaServicio({ titulo,duracion,modalidad, textoBoton, valor, moneda }) {
  return (
 
    <div className="tarjeta-servicio">
      <h3 className="tarjeta-titulo">{titulo}</h3>
      
      <EtiquetaDuracion duracion={duracion} />
      <EtiquetaModalidad modalidad={modalidad} />
      <Precio valor={valor} moneda={moneda} />
      
      <div className="tarjeta-contenedor-boton">
        <Boton texto={textoBoton} />
      </div>
    </div>
  );
}


export default TarjetaServicio;
