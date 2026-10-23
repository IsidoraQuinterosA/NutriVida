export function calcularImc(peso, tallaCm) {
  const tallaMetros = tallaCm / 100;
  return Math.round((peso / (tallaMetros * tallaMetros)) * 10) / 10;
}
