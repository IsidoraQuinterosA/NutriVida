import Logo from "../atoms/Logo";

function PiePagina(props) {
  function irAlInicio(evento) {
    evento.preventDefault();
    props.onNavegar("/");
  }

  return (
    <footer className="bg-body-tertiary text-center py-3 mt-auto">
      <Logo tamano="chico" alt="" />
      <p className="mb-1">
        <a href="/" onClick={irAlInicio} className="text-body text-decoration-none fw-bold">
          Clínica Nutricional NutriVida
        </a>
      </p>
      <p className="mb-0 small">Temuco, Región de La Araucanía · Desde 2016</p>
    </footer>
  );
}

export default PiePagina;
