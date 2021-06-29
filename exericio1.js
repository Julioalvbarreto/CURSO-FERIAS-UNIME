let a = prompt("Equação quadrática, informe o valor de A diferente de 0");
let b = prompt("Equação quadrática, informe o valor de B");
let c = prompt("Equação quadrática, informe o valor de C");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let delta = (b*b) - (4*a*c);
delta = Math.sqrt(delta);
let x1 = (-b + delta)/(2*a);
let x2 = (-b -delta)/(2*a);
if(delta<0){
    console.log("Delta é negativo, não é possivel continuar!");
}else{
    console.log("X1 = ", x1, "x2 = ", x2);
}
