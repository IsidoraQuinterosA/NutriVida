import logo from "../../assets/logo.svg";
import logoBlanco from "../../assets/logo-blanco.svg";

function Logo(props) {
  const tamano = props.tamano || "mediano";
  const alt = props.alt === undefined ? "NutriVida" : props.alt;

  return <img src={props.claro ? logoBlanco : logo} alt={alt} className={"logo logo-" + tamano} />;
}

export default Logo;
