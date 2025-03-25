function realizarOperacion(operacion) {

    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);
    let resultado;
    
    switch (operacion) {
        case 'suma':
            resultado = a + b;
            break;
        case 'resta':
            resultado = a - b;
            break;
        case 'multiplicacion':
            resultado = a * b;
            break;
        case 'division':
            if (b === 0) {
                resultado = "No se puede dividir por cero";
            } else {
                resultado = a / b;
            }
            break;
        default:
            resultado = "Operación no válida";
    };

    document.getElementById('resultado').textContent = "El resultado es: " + resultado;
}
