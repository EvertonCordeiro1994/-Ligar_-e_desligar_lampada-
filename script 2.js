var c = 1
function interruptor(){
var cont = c++
console.log(cont)

if(cont % 2 == 1){
 document.querySelector('#corpo').style.background= "white";
 document.querySelector('#titulo').style.color= "black";
 document.querySelector('#imagem').src="img/20220511135906.png";
 document.querySelector('#botao').innerText = 'Desligar ';
 }else{
 document.querySelector('#corpo').style.background= "black";
 document.querySelector('#titulo').style.color= "white";
 document.querySelector('#imagem').src="img/20220511135855.png"
 document.querySelector('#botao').innerText = 'ligar';
 }
}