// function calculateTotalExpense() {
//     let resultadoSuma = 0;
//     for (let i = 0; i < expenses.lenght; i++) {
//         resultadoSuma = expenses[i] + resultadoSuma;
//     }
//     totalExpense.textContent = `Gasto Total: $${resultadoSuma.toFixed(2)}`;
// } */

let saldo;
let gastosTotales = 0;
let saldoRestante;

while (true) {
    saldo = prompt("Ingrese un saldo inicial");
    if (saldo !== "" && !isNaN(saldo) && saldo > 0) {
        saldoRestante = saldo;
        console.log("Tu saldo inicial es de $" + saldo); 
        ingresaMontoGasto(); 
        break; 
    } else {
        alert("Debe ingresar un número mayor a 0");
    } 
}

function ingresaMontoGasto() {
    montoGasto = prompt("Ingresa el monto de un gasto");

    while (isNaN(montoGasto) || montoGasto <= 0) {
        montoGasto = prompt("Por favor, ingrese un número válido mayor a 0.");
    }

    montoGasto = parseFloat(montoGasto);

    gastosTotales += (montoGasto);
    saldoRestante -= (montoGasto);

    console.log("Monto del gasto: $"+ montoGasto);
    console.log("Gastos totales: $"+ gastosTotales);
    console.log("Saldo restante: $"+ saldoRestante);

    while (true){
        const agregarOtroGasto = confirm("¿Desea agregar otro gasto?");

        if (agregarOtroGasto) {
            montoGasto = prompt("Ingresa el monto de un gasto");

            while (isNaN(montoGasto) || montoGasto <= 0) {
                montoGasto = prompt("Por favor, ingrese un número válido mayor a 0.");
            }

            montoGasto = parseFloat(montoGasto);
            
            gastosTotales += (montoGasto); 
            saldoRestante -= (montoGasto);
            
            console.log("Monto del gasto: $"+ montoGasto);
            console.log("Gastos totales: $"+ gastosTotales);
            console.log("Saldo restante: $"+ saldoRestante);

        } else {
            break; 
    }
    }
}