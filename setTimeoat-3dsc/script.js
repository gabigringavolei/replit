// Set interval executa a cada x milisegundos
// let n = 0 
//set Time Out - executa apos x milisegundas 
//setTimeout(function(){
  //console.log('executou')
//},5000)
// const intervalo = setInterval(function(){
//   console.clear()
//   console.log(`contador: ,${n}`)
//   n++
// }, 1000)
// setTimeout(function(){
//   clearInterval(intervalo)
//   //redireccionar para outra pagina
// location.href = "https://pt.wikipedia.org/wiki/%C3%81gua"
// }, 5000)



// /**a partir dos conceitos aprendidos, resolva:
//  * A) crie uma função setInterval que receba uma função e um tempo de 3s
//  * B) Dentro dela imprima um numero randomico de 1 a 10
//  * C) Apos percorrido 8s interrompa com setTimeout 
//  */
const intervalo2 = setInterval(function(){
let num  = Math.round(Math.random()* 10)
  console.log(num)
}, 3000)

//criar um set timeout para parar o intervalo
setTimeout(function(){
 clearInterval(intervalo2)
  location.href = "https://pt.wikipedia.org/wiki/%C3%81gua"
}, 8000)