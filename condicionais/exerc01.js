const leia= require("readline-sync");
let a, b, c, soma;
a=leia.questionFloat("Digite um numero para A: ");
b=leia.questionFloat("Digite um numero para B: ");
c=leia.questionFloat("Digite um numero para C: ");
soma=a+b;
console.log("A soma dos valores de A e B é "+soma);

if(soma>c){
    console.log("A soma de A+B é maior do que C!");
}
else if (soma<c){
    console.log("A soma de A+B é menor do que C!");
}
else if(soma==c){
    console.log("A soma de A+B é igual a C!");
}
else{
    console.log("Não se enquadra em nenhuma as alternativas anteriores!");
}
