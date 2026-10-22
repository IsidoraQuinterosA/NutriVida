import { nombresDeRol } from "../../utils/roles";

const colores = {
  administrador: "text-bg-dark",
  nutricionista: "text-bg-info",
  paciente: "text-bg-light border",
};

function EtiquetaRol(props) {
  return <span className={"badge " + colores[props.rol]}>{nombresDeRol[props.rol]}</span>;
}

export default EtiquetaRol;
