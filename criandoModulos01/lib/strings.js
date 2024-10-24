const meuNome = "Gabriel";
function imprimeNome() {
  console.log(`meu Nome é ${meuNome}`);
}
export function caixaAlta(nome) {
  return nome.toUpperCase();
}

export function caixaBaixa(nome) {
  return nome.toUpperCase();
}
function separarPorHifen(nome) {
  return nome.split(" ").join("-");
}
export default separarPorHifen
export { meuNome, imprimeNome };
