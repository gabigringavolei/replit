
const pessoas = [
  {nome: "gabi", sexo:"F"},
   {nome: "mari", sexo:"F"},
   {nome: "natan", sexo:"M"},                                                                                                                                                   
  {nome: "apolo", sexo:"M"}
];
//console.log(pessoas[2].nome)
const meninas = []
const meninos = []


for(pessoa of pessoas){
  pessoa.sexo == "F"
  ? meninas.push(pessoa)
    : meninos.push(pessoa);
  //if(pessoa.sexo == "F"){
   // meninas.push(pessoa);
//} else if (pessoa.sexo == "M"){
 // meninos.push(pessoa);
}
console.log("----meninas---")
console.log(meninas)
console.log("----meninos---")
console.log(meninos)
