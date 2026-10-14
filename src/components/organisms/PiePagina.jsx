function PiePagina(props) {
  function irAlInicio(evento) {
    evento.preventDefault();
    props.onNavegar("/");
  }

  return (
    <footer className="bg-success text-white text-center py-3 mt-auto">
      <p className="mb-1">
        <a href="/" onClick={irAlInicio} className="text-white text-decoration-none fw-bold">
          Clínica Nutricional NutriVida
        </a>
      </p>
      <p className="mb-0 small">Temuco, Región de La Araucanía · Desde 2016</p>
    </footer>
  );
}

export default PiePagina;
