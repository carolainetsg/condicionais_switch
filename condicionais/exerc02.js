const leia=require("readline-sync");
let numero, parimpar, positivonegativo;
numero=leia.questionInt("Digite um numero: ");
parimpar= "";
positivonegativo= "";

if(numero%2===0){
    parimpar="par";
}else{
    parimpar="ímpar";
}
if(numero>=0){
    positivonegativo="positivo";
}else{
    positivonegativo="negativo";
}
console.log(`O numero ${numero} é ${parimpar} e ${positivonegativo}!`);