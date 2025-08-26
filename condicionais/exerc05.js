const leia=require("readline-sync");
let preco, quantidade, codigo;

codigo=leia.questionInt("Digite o código: ");
quantidade=leia.questionFloat("Digite a quantidade: ");

switch(codigo){
    case 1:
        preco=quantidade*10.0;
        console.log("O preço do Cahorro Quente é R$" +preco);
        break;
    case 2:
        preco=quantidade*15.0;
        console.log("O preço do X-Salada é R$ "+preco);
        break;
    case 3:
        preco=quantidade*18.0;
        console.log("O preço do X-Bacon é R$ "+preco);
        break;
    case 4:
        preco=quantidade*12.0;
        console.log("O preço do Bauru é R$ "+preco);
        break;
    case 5:
        preco=quantidade*8.0;
        console.log("O preço do Refrigerante é R$ "+preco);
        break;
    case 6:
        preco=quantidade*13.0;
        console.log("O preço do Suco de Laranja é R$ "+preco);
        break;
    default:
        console.log("Opção inválida!");
        break;

}

