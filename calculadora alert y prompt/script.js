let continuar = true;

while (continuar) {
    let a = parseInt(prompt("Ingrese el primer número (a):"));
    let b = parseInt(prompt("Ingrese el segundo número (b):"));

    let operacion = prompt("¿Qué operación deseas hacer? (suma, resta, multiplicación, división)");

    let resultado;

    if (operacion === 'suma') {
        resultado = a + b;
    } else if (operacion === 'resta') {
        resultado = a - b;
    } else if (operacion === 'multiplicación') {
        resultado = a * b;
    } else if (operacion === 'división') {
        if (b === 0) {
            resultado = "No se puede dividir por cero";
        } else {
            resultado = a / b;
        }
    } else {
        resultado = "Operación no válida";
    }

    alert("El resultado es: " + resultado);

    continuar = confirm("¿Quieres hacer otro cálculo?");
}
