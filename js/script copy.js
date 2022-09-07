function somar() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x + y
    resposta.innerHTML = `<h2> A soma de ${x} + ${y} é:  ${s} </h2>`;
}

function subtrair() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x - y
    resposta.innerHTML = `<h2> A subtração de ${x} - ${y} é:  ${s} </h2>`;

}
function multiplicar() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x * y
    resposta.innerHTML = `<h2> A multiplicacao de ${x} x ${y} é:  ${s} </h2>`;

}
function dividir() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x / y
    resposta.innerHTML = `<h2> A divisão de ${x} / ${y} é:  ${s} </h2>`;

}
function resto() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x % y
    resposta.innerHTML = `<h2> A resto da divisão de ${x} / ${y} é:  ${s} </h2>`;

}











function taxaU1() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x + y
    resposta.innerHTML = `<h2> A soma de ${x} + ${y} é:  ${s} </h2>`;
}

function taxaR1() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x - y
    resposta.innerHTML = `<h2> A subtração de ${x} - ${y} é:  ${s} </h2>`;

}
function taxaPCTA1() {
    var n1 = document.getElementById('tx1');
    var n2 = document.getElementById('tx2');
    var resposta = document.getElementById('res');
    var x = Number(n1.value);
    var y = Number(n2.value);
    var s = x * y
    resposta.innerHTML = `<h2> A multiplicacao de ${x} x ${y} é:  ${s} </h2>`;

}
