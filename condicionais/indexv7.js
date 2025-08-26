//Laço condicional SWITCH CASE

//switch(variável ou valor){
//case valor1: 
// Execcuta alguma ação caso esta condição seja verdadeira
// break;

//case valor 2:
// Execcuta alguma ação caso esta condição seja verdadeira
// break;

//case valorN:
// Execcuta alguma ação caso esta condição seja verdadeira
// break;

//default:
// Executa alguma ação caso todas as condições acima forem falsas.
//}

let opcao;
opcao=5;

switch(opcao){
    case 1:
        console.log("Livro: O Alquimista");
        break;

    case 2:
        console.log("Frase motivacional: Se você cair, levante! Não dá para andar deitado.");
        break;

    case 3:
        console.log("Música: AURORA - No cure for me.");
        break;

    default:
        console.log("Opção inválida!");
}