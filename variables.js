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
let obtenerDato;

// --------------------- VARIABLES HTML --------------------------------------------
// let datoMes = document.getElementById("mes");
let datoTipo = document.getElementById("tipo");
// let datoCuotas = document.getElementById("numCuotas");
let datoNombre = document.getElementById("nombre");
let datoMonto = document.getElementById("monto"); 
let datoMoneda = document.getElementById("moneda");
let btnIngresar = document.getElementById("btnIngresar");
//-----------------------------------------------------------------
let imprimirIngreso = document.getElementById("ingreso");
let imprimirGasto = document.getElementById("gastos");
//-----------------------------------------------------------------
let totalIngresoARS = document.getElementById("totalIngresoARS");
let totalIngresoBRL = document.getElementById("totalIngresoBRL");
let totalIngresoUYU = document.getElementById("totalIngresoUYU");
let totalIngresoUSD = document.getElementById("totalIngresoUSD");
let totalIngresoEUR = document.getElementById("totalIngresoEUR");
//-----------------------------------------------------------------
let totalGastoARS = document.getElementById("totalGastoARS");
let totalGastoBRL = document.getElementById("totalGastoBRL");
let totalGastoUYU = document.getElementById("totalGastoUYU");
let totalGastoUSD = document.getElementById("totalGastoUSD");
let totalGastoEUR = document.getElementById("totalGastoEUR");
//-----------------------------------------------------------------
let totalBalanceARS = document.getElementById("bGralARS");
let totalBalanceBRL = document.getElementById("bGralBRL");
let totalBalanceUYU = document.getElementById("bGralUYU");
let totalBalanceUSD = document.getElementById("bGralUSD");
let totalBalanceEUR = document.getElementById("bGralEUR");