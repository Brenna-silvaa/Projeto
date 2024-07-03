//Logica de programaçao em javascript

//Descobrindo se é par ou impar
let num1 = 6;
if (num1 % 2 == 0) {
    console.log("é par")
} else {
    console.log("é impar")
}

//Separando par e impar
let numeros = [2, 4, 5, 7, 8, 2];
let par = [];
let impar = [];

for (let i = 0; i <= numeros.length; i++){
    if (numeros[i] % 2 == 0){
        par.push(numeros[i])
    } else {
        impar.push(numeros[i])
    }
}

console.log("Pares: " + par);
console.log("Impares: " + impar);

//Checagem de idade
let idade = 57;
if(idade >= 18){
    console.log("PODE ENTRAR")
  } else {
    console.log("ACESSO NEGADO")
  }

//contagem regressiva
let numero = 10;
while (numero >= 0){
    console.log(numero);
    numero--;
  }
  console.log("KABUM")

//Delta
let a = 5;
let b = 15;
let c = 6;
let delta = 0;

delta = Math.pow(b, 2) - 4 * a * c;
console.log(delta);

//Bloquear palavras não permitidas
const comentario = "Esse COVID é muito perigoso!";

const covid = comentario.toLowerCase();

if (covid.includes("covid") || covid.includes("pandemia")){
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}

//organizar frutas por ordem alfabetica
const frutas = ["uva", "pera", "maça", "abacate", "laranja", "banana"];
console.log(frutas.sort());
