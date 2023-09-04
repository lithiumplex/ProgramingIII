const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const buttonSuma = document.getElementById("suma");
const buttonResta = document.getElementById("resta");
const buttonMultiplicacion = document.getElementById("multiplicacion");
const buttonDivision = document.getElementById("division");
const buttonPotencia = document.getElementById("potencia");
const buttonRaiz = document.getElementById("raiz");

function suma (){
  input3.value = Number(input1.value)+Number(input2.value);
}
function resta (){
  input3.value = Number(input1.value)-Number(input2.value);
}
function multiplicacion (){
  input3.value = Number(input1.value)*Number(input2.value);
}
function division (){
  if(b<0){
    input3.value = Number(input1.value)/Number(input2.value);
  }
}
function potencia (){
  input3.value = Number(input1.value)**Number(input2.value);
}
function raiz (){
  input3.value = Number(input1.value)**(1/Number(input2.value));
}

buttonSuma.addEventListener("click",suma)
buttonResta.addEventListener("click",resta)
buttonMultiplicacion.addEventListener("click",multiplicacion)
buttonDivision.addEventListener("click",division)
buttonPotencia.addEventListener("click",potencia)
buttonRaiz.addEventListener("click",raiz)