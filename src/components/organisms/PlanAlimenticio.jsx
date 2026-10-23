function PlanAlimenticio(props) {
  if (!props.plan) {
    return <p className="text-body-secondary">Todavía no tienes un plan alimenticio asignado.</p>;
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="h5 card-title">{props.plan.titulo}</h2>
        <ul className="mb-0">
          {props.plan.indicaciones.map((indicacion) => (
            <li key={indicacion}>{indicacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanAlimenticio;
