//------------FUNCION PARA OBTENER LA FECHA----------------------------
function obtenerFecha(){
    let datoMes = (new Date(document.getElementById("fecha").value)).getMonth();
    let datoAño = (new Date(document.getElementById("fecha").value)).getFullYear();
    console.log(datoMes);
    console.log(datoAño);
    }
//---------------------------------------------------------------------

//-----------FUNCION PARA OBTENER EL TIPO DE DATO----------------------
function obtenerTipo(){
    let tipoTexto = (document.getElementById("tipo"));
    let tipoDato = tipoTexto.options[tipoTexto.selectedIndex].text;
    console.log(tipoDato);
}
//---------------------------------------------------------------------

//-----------FUNCION PARA MOSTRAR EL INPUT CUOTAS----------------------
function mostrarCuotas() {
    let valorTipo = document.getElementById("tipo").value;
    if (valorTipo == "3"){
    document.getElementById("cuotas").style.display = "flex";
    }else {
        document.getElementById("cuotas").style.display = "none";
    }
}
//---------------------------------------------------------------------

//-----------FUNCION PARA OBTENER LAS CUOTAS---------------------------
function obtenerCuotas(){
    let Cuotas = document.getElementById("numCuotas").value;
    console.log(Cuotas);
}
//---------------------------------------------------------------------

//----------FUNCION PARA OBTENER EL NOMBRE DEL DATO--------------------
function obtenerNombre(){
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
}
//---------------------------------------------------------------------

//----------FUNCION PARA OBTENER EL MONTO------------------------------
function obtenerMonto(){
    let monto = document.getElementById("monto").value;
    console.log(monto);
}
//---------------------------------------------------------------------

//----------FUNCION PARA OBTENER EL TIPO DE MONEDA---------------------
function obtenerMoneda(){
    let tipoMoneda = document.getElementById("moneda");
    let moneda = tipoMoneda.options[tipoMoneda.selectedIndex].text;
    console.log(moneda);
}
//---------------------------------------------------------------------

// let datos = [];

// function ingresarDato(año,mes){
//     this.año = año;
//     this.mes = mes;
// }

// crearDato(datoAño,datoMes);




// let datos = [];

// function ingresarDato(tipoDato,nombreDato,montoDato,mesDato){
//     this.tipoDato = tipoDato;
//     this.nombreDato = nombreDato;
//     this.montoDato = montoDato;
//     this.mesDato = mesDato;
// }

// function crearDato(){
//     let tipo = ("Ingreso o Gasto?");
//     let nombre = ("Nombre del Movimiento");
//     let monto = parseIn("Introduce el Monto");
//     let mes = ("Mes del Movimiento");

//     let datos = new ingresarDato(tipo,nombre,monto,mes);
// }

// for (i = 0; i < cantidadDatos ; i++) {
//     crearDato();
// }