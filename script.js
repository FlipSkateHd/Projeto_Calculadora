const input = document.getElementById("monitor");

function um(){
  monitor.value += "1"
}
function dois(){
  monitor.value += "2"
}
function tres(){
  monitor.value += "3"
}
function quatro(){
  monitor.value += "4"
}
function cinco(){
  monitor.value += "5"
}
function seis(){
  monitor.value += "6"
}
function sete(){
  monitor.value += "7"
}
function oito(){
  monitor.value += "8"
}
function nove(){
  monitor.value += "9"
}
function zero(){
  monitor.value += "0"
}

function mais(){
  monitor.value += " + ";
}
function menos(){
  monitor.value += " - "
}
function multiplicacao(){
  monitor.value += " * "
}
function divisao(){
  monitor.value += " / "
}
function igual(){
  monitor.value = eval(monitor.value)
}
function limpa(){
  monitor.value = ""
}


/* var n1 = ''
var n2 = ''
var op = 0

function igual() {
  switch (op) {
    case 0:
      alert('operação inválida!')
      break
    case 1:
      document.getElementById('monitor').innerHTML = parseInt(n1) + parseInt(n2)
      break;
    case 2:
      alert('-')
      break
    case 3:
      alert('*')
      break
    case 4:
      alert('/')
      break
    default:
      op = 0
      break
  }
}

function mais() {

  if (n1 == '') {
    alert('inválido')
  } else {
    op = 1
    n1 = n1 + ' + '
  }

}

function menos() {
  op = 2

}

function multiplicacao() {
  op = 3

}

function divisao() {
  op = 4

}

function limpa() {
  n1 = ''
  n2 = ''
  op = 0
  document.getElementById('monitor').innerHTML = n1
}

function numero0() {

  if(op == 1){
    n2 = n2 + '0'
    document.getElementById('monitor').innerHTML = n2
  } else{
    n1 = n1 + '0'
    document.getElementById('monitor').innerHTML = n1
    
  }
}

function numero1() {
  n1 = n1 + '1'
  document.getElementById('monitor').innerHTML = n1
}

function numero2() {
  n1 = n1 + '2'
  document.getElementById('monitor').innerHTML = n1
}

function numero3() {
  n1 = n1 + '3'
  document.getElementById('monitor').innerHTML = n1
}

function numero4() {
  n1 = n1 + '4'
  document.getElementById('monitor').innerHTML = n1
}

function numero5() {
  n1 = n1 + '5'
  document.getElementById('monitor').innerHTML = n1
}

function numero6() {
  n1 = n1 + '6'
  document.getElementById('monitor').innerHTML = n1
}

function numero7() {
  n1 = n1 + '7'
  document.getElementById('monitor').innerHTML = n1
}

function numero8() {
  n1 = n1 + '8'
  document.getElementById('monitor').innerHTML = n1
}

function numero9() {
  n1 = n1 + '9'
  document.getElementById('monitor').innerHTML = n1
}




/*const numeroUm = Number()
const numeroDois = parseInt(prompt("escolha outro numero"));
const equacoes = parseInt(prompt("escolha uma das equações \n 1-soma, 2-Subtração, 3-Divisão, 4-Multiplicação"));
  
switch(equacoes){
  case 1:
    const soma = numeroUm + numeroDois;
    document.write("<h1>" + numeroUm + " + " + numeroDois + " = " + soma + "</h1>")
  break;
  case 2:
    const subtracao =  numeroUm - numeroDois;
    document.write("<h1>" + numeroUm + " - " + numeroDois + " = " + subtracao + "</h1>")
  break;
  case 3:
    const divisao = numeroUm / numeroDois;
    document.write("<h1>" + numeroUm + " ÷ " + numeroDois + " = " + divisao + "</h1>")
  break;
  case 4:
    const multiplicacao = numeroUm * numeroDois;
    document.write("<h1>" + numeroUm + " x " + numeroDois + " = " + multiplicacao + "</h1>")
  break;
  default:
    alert("nao deu");
  }
} */