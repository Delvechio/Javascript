console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

//if (idadeDoComprador >= 18) {
//      console.log("Comprador maior de idade!")
//      listaDeDestinos.splice(1, 1); // deletando um item na lista
//} else {
//    // a pessoa é menor de idade
//    if (estaAcompanhada) {
//        console.log("Comprador maior de idade!")
//        listaDeDestinos.splice(1, 1);
//    } else {
//        console.log("Não é maior de idade não posso vender");
//    }

//} // nas condiçoes vc pode usar o else if ou o else e dentro do else fazer uma outra condição

if (idadeDoComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior idade");
    listaDeDestinos.slice(2,1);
} else {
    console.log("Não é maior de idade e não podo vender.")
}

console.log("Embarque: \n \n")
if (idadeDoComprador > 18 && temPassagemComprada){
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar.")
}
console.log(listaDeDestinos);