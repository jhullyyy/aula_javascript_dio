function clicou() {
	document.getElementById("agradecimento").innerHTML = "<i>Obrigada por clicar </i>";
	// document.getElementById("agradecimento");
	console.log;
}
function redirecionar() {
	window.open("https://www.cancaonova.com/"); //abre em outra aba
}
function trocar() {
	document.getElementById("mousemove").innerHTML = "<i>Obrigada por  passar o mouse</i>";
}
function voltar() {
	document.getElementById("mousemove").innerHTML = "<i>Passe o mouse aqui</i>";
}
//*****DATA***** */
// var d = new Date();
// alert(d.getMonth() + 1); //mês começa do 0, então sempre coloca +1

//*****ESTRUTURAS DE REPETIÇÃO*****
// var count = 0;
// while (count <= 5) {
// 	console.log(count);
// 	alert(count);
// 	count++;
// }
// var count;
// for (count = 0, count <= 5, count++){
// 	alert(count);
// };

//*****SOLICITAÇÔES E CONDICIONAL******
// var nome = prompt("Qual seu nome?");
// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
// 	alert("Você é maior de idade, " + nome);
// } else {
// 	alert("Você é menor de idade, " + nome);
// }

//*****DICIONÁRIO JSON*****
// var skins = [
// 	{ nome: "Hyoga", skin: "Armadura de bronze" },
// 	{ nome: "Naruto", skin: "Macacão laranja e bandana" },
// 	{ nome: "L", skin: "Pijama" },
// ];
// console.log(skins);

//****LISTAS*****
// var lista_animes = ["shurato", "cdz", "naruto", "cowboy bebop", "lain"];
// lista_animes.push("orange"); //"empurra" item na lista
// lista_animes.pop(); //remove último item
// console.log(lista_animes);
// console.log(lista_animes.length); //tamanho
// console.log(lista_animes.reverse()); //inverte a ordem
// console.log(lista_animes.toString());
// console.log(lista_animes.join(" | "));

//*****CÁLCULOS*****
// var data_nasc = 2009;
// var ano_atual = 2025;
// var idade = ano_atual - data_nasc;
// alert("Sua idade é " + idade + " anos! Parabéns!!");

//*****STRING*****
//o js entende quando  a saia é um número ou uma string
// console.log(nome); -> mostra no navegador
// console.log(frase.toLocaleLowerCase()); -> tudo minusculo
// alert(frase.replace("chocolate", "morango")); -> substitui uma palavra por outra
// console.log(frase.toLocaleUpperCase()); -> tudo maisculo
