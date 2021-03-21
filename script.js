// --------------------- CLASS DONDE INGRESAN LOS DATOS ----------------------------
class dato {
    constructor (/* mes ,*/tipo,/* cuotas ,*/nombre,monto,moneda) {
        // this.mes = mes;
        this.tipo = tipo;
        // this.cuotas = cuotas;
        this.nombre = nombre;
        this.monto = monto;
        this.moneda = moneda;
    }
}

// --------------------- ARRAY DE LA CLASS dato ------------------------------------

let datos = [];

// --------------------- VARIABLES HTML --------------------------------------------
// let datoMes = document.getElementById("mes");
let datoTipo = document.getElementById("tipo");
// let datoCuotas = document.getElementById("numCuotas");
let datoNombre = document.getElementById("nombre");
let datoMonto = document.getElementById("monto"); 
let datoMoneda = document.getElementById("moneda");
let btnAlmacenar = document.getElementById("btnAlmacenar")
let btnIngresar = document.getElementById("btnIngresar");
let imprimirIngreso = document.getElementById("datos");

// --------------------- FUNCION PARA CREAR OBJETO Y MOSTRARLO ---------------------
let obtenerDato
btnIngresar.addEventListener("click", () => {
    
    let obtenerDato =   
            new dato(/* datoMes.value ,*/ datoTipo.value, 
                    /* datoCuotas.value, */ datoNombre.value, datoMonto.value, 
                    datoMoneda.value);
    
    datos.push(obtenerDato);
        
    let tabla = `<table>`;
    
    for (const elem of datos) {
        tabla = tabla + 
                `<tr>
                <td colspan="3">${elem.tipo}</td>
                <td colspan="3">${elem.nombre}</td>
                <td colspan="2">${elem.monto}</td>
                <td colspan="1">${elem.moneda}</td>
                </tr>`;
    }
    
    console.log(obtenerDato.tipo);
    tabla = tabla + `</table>`;
    
    imprimirIngreso.innerHTML = tabla;
    
})

// //-------------------- FUNCION PARA MOSTRAR EL INPUT CUOTAS----------------------
// function mostrarCuotas() {
//     let valorTipo = document.getElementById("tipo").value;
//     if (valorTipo == "3"){
//     document.getElementById("cuotas").style.display = "flex";
//     }else {
//         document.getElementById("cuotas").style.display = "none";
//     }
// }