var valores = [1,5,8,7,2,4,3]
var novoarray = [[],[]]

valores.forEach(valor=>{
    if(valor % 2==0){
        novoarray[1].push(valor)[0]
    }else{
        novoarray[0].push(valor)[1]
    }
})

//Novo array na posição 0, impares
console.log(novoarray[0])
//Novo array na posição 1, pares
console.log(novoarray[1])
