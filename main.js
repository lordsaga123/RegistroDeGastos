/* Creación del Array para almacenar datos*/
const gastos = [];

/* Función para agregar los gastos*/
function agregarGastos() {
    let descripcionDelGasto = prompt("Ingrese la descripción del gasto a registrar:");
    let cantidadDelGasto = parseFloat(prompt("Ingrese la cantidad del gasto a registrar:"));

    if(isNaN(cantidadDelGasto) || cantidadDelGasto <= 0){

        alert("El valor ingresado no es válido. Intente de nuevo.")
        return
    };

    let gasto = {
        descripcionDelGasto : descripcionDelGasto,
        cantidadDelGasto : cantidadDelGasto
    };
    gastos.push(gasto);

    alert("El gasto fue agregado correctamente.");
}

/* Función para ver los gastos Guardado*/

function datosGuardados (){
    if (gastos.length === 0){
        alert("No existen gastos actualmente. Felicidades tu economía es muy buena.");
    }
    else {let infoGastos = "Gastos guardados \n";
        for(let i = 0; i < gastos.length; i++){
            infoGastos+= (i + 1) + " - " + "Descripción: " + gastos[i].descripcionDelGasto + ", Cantidad: " + gastos[i].cantidadDelGasto + "\n";
        }
        alert(infoGastos);
    }
}

/*function modificarUnGasto()*/

 function modificarUnGasto() {

    if (gastos.length === 0){
        alert("No existen gastos actualmente.");
        return;
   } 
    let numeroGastoAModificar = parseFloat(prompt("Ingrese el número de gasto a modificar"));
        if  (isNaN(numeroGastoAModificar) || numeroGastoAModificar < 1 || numeroGastoAModificar > gastos.length){
        alert("El valor ingresado no es válido. Intente nuevamente.");
        return;
    }
        let nuevaDescripcionGasto = prompt("Ingrese la descripción del nuevo gasto"); 
        let nuevoValorGasto = parseFloat(prompt("Ingrese la descripción del nuevo gasto"));

        if (isNaN(nuevoValorGasto) || nuevoValorGasto <= 0){
            alert("El valor ingresado no es válido. Intente nuevamente.");
        return;
        }
        else{
        gastos[numeroGastoAModificar - 1].descripcionDelGasto = nuevaDescripcionGasto;
        gastos[numeroGastoAModificar - 1].cantidadDelGasto = nuevoValorGasto;
        alert("Datos registrados correctamente.");
 };
};

/* Función para Eliminar un Gasto*/

function eliminarUnGasto(){
    if (gastos.length === 0){
        alert("No hay gastos registrados para eliminar.");
        return;
   }; 
    let numeroGastoAEliminar = parseFloat(prompt("Ingrese el número de gasto a eliminar"));
        if  (isNaN(numeroGastoAEliminar) || numeroGastoAEliminar < 1 || numeroGastoAEliminar > gastos.length){
        alert("ERROR: El gasto buscado no existe. Intente nuevamente.");
        r;eturn;
    }
        else {
            gastos.splice(numeroGastoAEliminar-1,1);
            alert("Registro eliminado correctamente.");
        };
};

/* Función para ver los Gastos Totales*/

function gastosTotales(){
    let gastosTotales = 0;
    let infoDegastos = "Detalle de los gastos: \n"

    for (let x = 0; x < gastos.length; x++){
        gastosTotales += gastos[x].cantidadDelGasto;
        infoDegastos += "Descripción " + gastos[x].descripcionDelGasto + ", Monto: " + gastos[x].cantidadDelGasto + "\n";
    }
    alert(infoDegastos + "\nEl valor total de los Gastos es:" + gastosTotales);
}

/* Inicio Principal*/
function registroDeGastos(){
    let opcion = 0;
    do {opcion = parseFloat(prompt("Escoja una de las siguientes opciones:\n 1- Ingresar un gasto \n 2- Ver datos guardados \n 3- Modificar un gasto \n 4- Eliminar un gasto \n 5- Ver gastos totales \n 6- Salir"));
        switch (opcion){
            case 1:
                agregarGastos();
                break;
            case 2:
                datosGuardados();
                 break;
            case 3:
                modificarUnGasto();
                break;
            case 4:
                eliminarUnGasto();
                break;
            case 5:
                gastosTotales();
                break;
            case 6:
                alert("Hasta la próxima!!");
                break;
            default: 
                alert("La opción ingresada no es válida. Intente nuevamente.");}
} while (opcion !== 6);
};

registroDeGastos();

