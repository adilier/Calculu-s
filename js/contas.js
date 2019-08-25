function calcMultiplication() {
  let msg;

  num1 = parseInt(prompt("Put the first number"));
  num2 = parseInt(prompt("Put the second number"));

  let conta = parseInt(num1 * num2);

  msg = ` ${num1} X ${num2} = ${conta}`;
  
  alert(msg);
}

function calcSubtraction() {
  let msg;

  num1 = parseInt(prompt("Put the first number"));
  num2 = parseInt(prompt("Put the second number"));

  let conta = parseInt(num1 - num2);

  msg = ` ${num1} - ${num2} = ${conta}`;

  alert(msg);
}

function calcAddition() {
  let msg;

  num1 = parseInt(prompt("Put the first number"));
  num2 = parseInt(prompt("Put the second number"));

    let conta = parseInt(num1 + num2);

  msg = ` ${num1} + ${num2} = ${conta}`;

  var alerta = document.getElementById('resultadoAddition');
  alerta.textContent = (msg);
}