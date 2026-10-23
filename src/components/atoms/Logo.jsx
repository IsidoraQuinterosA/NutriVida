import logo from "../../assets/logo.svg";

function Logo(props) {
  const tamano = props.tamano || "mediano";
  const alt = props.alt === undefined ? "NutriVida" : props.alt;

  return <img src={logo} alt={alt} className={"logo logo-" + tamano} />;
}

export default Logo;
