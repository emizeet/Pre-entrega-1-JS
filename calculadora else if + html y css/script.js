
function realizarOperacion(operacion) {

    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);
    let resultado;

    if (operacion === 'suma') {
        resultado = a + b;
    } else if (operacion === 'resta') {
        resultado = a - b;
    } else if (operacion === 'multiplicacion') {
        resultado = a * b;
    } else if (operacion === 'division') {
        if (b === 0) {
            resultado = "No se puede dividir por cero";
        } else {
            resultado = a / b;
        }
    }

    // Mostrar el resultado en el div
    document.getElementById('resultado').textContent = "El resultado es: " + resultado;
}
