// Mediciones y planes alimenticios de ejemplo (DATOS FICTICIOS).
// talla en centímetros, peso en kilos, cintura en centímetros.
export const mediciones = [
  { id: 1, pacienteCorreo: "ana.perez@correo.cl", nutricionistaId: "NUT001", fecha: "2026-10-05", peso: 82.4, talla: 165, cintura: 98 },
  { id: 2, pacienteCorreo: "ana.perez@correo.cl", nutricionistaId: "NUT001", fecha: "2026-10-19", peso: 80.9, talla: 165, cintura: 96 },
];

export const planes = [
  {
    pacienteCorreo: "ana.perez@correo.cl",
    nutricionistaId: "NUT001",
    titulo: "Plan pérdida de peso · mes 1",
    indicaciones: [
      "Desayuno: avena con fruta y un lácteo descremado.",
      "Almuerzo: media porción de verduras, un cuarto de proteína y un cuarto de carbohidratos.",
      "Once: pan integral con palta o huevo.",
      "Cena liviana antes de las 21:00.",
      "Tomar 2 litros de agua al día.",
    ],
  },
];
