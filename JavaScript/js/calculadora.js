function clear(){
    document.getElementById("number1").value = '';
    document.getElementById("number2").value = '';
}

function calc() {
    let number_1 = parseFloat(document.getElementById('number1').value);
    let number_2 = parseFloat(document.getElementById('number2').value);
    let operadocao = document.getElementById('operadores').value;
    let resultado

    switch (operadocao) {
        case 'soma':
            resultado = number_1 + number_2;
            break;
        case 'subtração':
            resultado = number_1 - number_2;
            break;
        case 'multiplicação':
            resultado = number_1 * number_2;
            break
        case 'divisão':
            if (number_2 === 0) {
                document.getElementById('resultado').innerHTML = 'Divisão por zero não é permitida.'
                return;
            }
            resultado = number_1 / number_2;
            break
        default:
            resultado = 'Operação invalida.';
    }
    document.getElementById('resultado').innerHTML = `O resultado da ${operadocao} é ${resultado}`;
};
