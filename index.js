// primeiro
function saudacao() {
    console.log('Olá mundo!');
}
saudacao();

// segundo
function exibirOlaNome (nome) {
    console.log(`Olá ${nome}`);
}
exibirOlaNome('Cleidson');

// terceiro
function dobro (numero) {
    return numero * 2;
}
let resultadoDobro = dobro(5);
console.log(resultadoDobro);

// quarto
function media (n1,n2,n3) {
    return (n1+n2+n3) / 3;
}
let mediaDosNumeros = media (10,5,7);
console.log(mediaDosNumeros.toFixed(0));

// quinto
function numeros (n1,n2) {
    return n1 > n2 ? n1 : n2;
}
let maiorNumero = numeros(14,10);
console.log(maiorNumero);

// sexto 
function quadrado (numero) {
    return numero * numero;
}
let restoMultiplicacao = quadrado(6);
console.log(restoMultiplicacao);
