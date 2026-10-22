// Índice de masa corporal: peso (kg) dividido por talla (m) al cuadrado.
// Ej: calcularImc(80, 165) -> 29.4
export function calcularImc(peso, tallaCm) {
  const tallaMetros = tallaCm / 100;
  return Math.round((peso / (tallaMetros * tallaMetros)) * 10) / 10;
}
