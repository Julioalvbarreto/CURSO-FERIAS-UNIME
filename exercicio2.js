const numeros = [12, 3, 8, -2, 18, 5, 6, -1]
const pares = []
const impares = []

let valor1 = prompt("Insira o primeiro numero: ")
let valor2 = prompt("Insira o segundo numero:")
let valor3 = prompt("Insira o terciero numero: ")
let valor4 = prompt("Insira o quarto numero: ")

valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
valor3 = parseInt(valor3)
valor4 = parseInt(valor4)

var adiconar = numeros.push(valor1, valor2, valor3, valor4)

numeros.forEach((numeros) =>{

    if(numeros % 2 == 0){
        pares.push(numeros)
    } else {
        impares.push(numeros)
    }
})

let positivo = pares.map((item)=>{
    if(item<0){
        return null
    } else{
        return item
    }
})

let positivoImpar = impares.map((item)=>{
    if(item<0){
        return null
    } else{
        return item
    }
})

console.log(positivo)
console.log(positivoImpar)
