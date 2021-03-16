let cantidadDatos = prompt("Cuantos Datos desea Ingresar?")
let datos = [];

function ingresarDato(tipoDato,nombreDato,montoDato,mesDato){
    this.tipoDato = tipoDato;
    this.nombreDato = nombreDato;
    this.montoDato = montoDato;
    this.mesDato = mesDato;
}

function crearDato(){
    let tipo = prompt("Ingreso o Gasto?");
    let nombre = prompt("Nombre del Movimiento");
    let monto = parseInt(prompt("Introduce el Monto"));
    let mes = prompt("Mes del Movimiento");

    let datos = new ingresarDato(tipo,nombre,monto,mes);
    console.log(datos);
}

for (i = 0; i < cantidadDatos ; i++) {
    crearDato();
}