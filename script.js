// -------------------- PORTADA ------------------------------------------------


$("#comenzar").on("click", () => {
    $("#portada").hide();
    $("#contenido").show();
})


// --------------------- CLASS DONDE INGRESAN LOS DATOS ----------------------------

class dato {
    constructor (tipo,nombre,monto,moneda) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.monto = monto;
        this.moneda = moneda;
    }
};

// --------------------- ARRAY DE LA CLASS dato ------------------------------------

let datos = [];
let obtenerDato;

// --------------------- VARIABLES HTML --------------------------------------------

let datoTipo = $("#tipo").on("change", (e) =>{datoTipo = e.target.value});
let datoNombre = $("#nombre").on("change", (e) =>{datoNombre = e.target.value});
let datoMonto = $("#monto").on("change", (e) =>{datoMonto = e.target.value});
let datoMoneda = $("#moneda").on("change", (e) =>{datoMoneda = e.target.value});

//-------------------- CONDICIONAL PARA MOSTRAR LOS DATOS DEL STORAGE  ------------

if (localStorage.getItem("memoria") === null){

}else {
    datos = JSON.parse(localStorage.getItem("memoria"));
    imprimirDato ();
};

// --------------------- EVENTO PARA CREAR OBJETO Y MOSTRARLO ---------------------

$("#btnIngresar").on("click", () =>{    
    crearDato();
    imprimirDato();        
});

// --------------------- EVENTO PARA GUARDAR DATOS  -------------------------------

$("#btnGuardar").on("click", () => {
    localStorage.setItem("memoria", JSON.stringify(datos));
});

// --------------------- EVENTO PARA ELIMINAR DATOS  -----------------------------

$("#btnEliminar").on("click", () => {
    localStorage.clear(); 
    location.reload();
});

//-------------------- FUNCION PARA OBTENER LOS DATOS DE LOS INPUT----------------------

function crearDato () {   
    obtenerDato = new dato(datoTipo, datoNombre, datoMonto, datoMoneda);
    datos.push(obtenerDato);
    $("#ingreso, #gasto").hide();
};  

//-------------------- FUNCION PARA MOSTRAR LOS DATOS  --------------------------------

function imprimirDato() {    
    
    let sumaIngresosARS = 0;
    let sumaIngresosBRL = 0;
    let sumaIngresosUYU = 0;
    let sumaIngresosUSD = 0;
    let sumaIngresosEUR = 0;

    let sumaGastosARS = 0;
    let sumaGastosBRL = 0;
    let sumaGastosUYU = 0;
    let sumaGastosUSD = 0;
    let sumaGastosEUR = 0;

    let balanceGeneralARS;
    let balanceGeneralBRL;
    let balanceGeneralUYU;
    let balanceGeneralUSD;
    let balanceGeneralEUR;

    
    let ingreso = `<table>`;
    let gasto = `<table>`;

    let incremento = 0; 

    for (const d of datos) {

        function ingresarIngreso (a,b){
            
            incremento++;
            ingreso = ingreso + `<tr class="table-active bg-primary"">
                                    <td colspan="${a}">${d.nombre}</td>
                                    <td colspan="${b}">${d.monto} ${d.moneda}</td>
                                </tr>`;
            $("#resumenTitle, #ingresoTitle").slideDown(500);
            $("#totalIngresoTitle").delay(500).slideDown(1000)
            $("#btnGuardar, #btnEliminar").delay(1500).slideDown(500);
        }
        function ingresarGasto (a,b){
            gasto = gasto + `<tr class="table-active bg-primary">
                                <td colspan="${a}">${d.nombre}</td>
                                <td colspan="${b}">${d.monto} ${d.moneda}</td>
                            </tr>`;
            $("#resumenTitle, #gastosTitle").slideDown(1000);
            $("#totalGastosTitle").delay(1000).slideDown(1000)
            $("#btnGuardar, #btnEliminar").delay(2000).slideDown(1000);
        }


        if (d.tipo == "Ingreso") {
            
            if (d.moneda == "ARS" && d.monto > 0) {
                ingresarIngreso(4,5);
                sumaIngresosARS = parseInt(d.monto) + sumaIngresosARS;
                $("#totalIngresoARS").html(sumaIngresosARS + " " +  "ARS");
            } else if (d.moneda == "BRL" && d.monto > 0){
                ingresarIngreso(5,4);
                sumaIngresosBRL = parseInt(d.monto) + sumaIngresosBRL; 
                $("#totalIngresoBRL").html(sumaIngresosBRL + " " + "BRL");
            }else if (d.moneda == "UYU" && d.monto > 0){
                ingresarIngreso(6,3)
                sumaIngresosUYU = parseInt(d.monto) + sumaIngresosUYU; 
                $("#totalIngresoUYU").html(sumaIngresosUYU + " " + "UYU");
            }else if (d.moneda == "USD" && d.monto > 0){
                ingresarIngreso(7,2);
                sumaIngresosUSD = parseInt(d.monto) + sumaIngresosUSD;
                $("#totalIngresoUSD").html(sumaIngresosUSD + " " + "USD");
            }else if (d.moneda == "EUR" && d.monto > 0){
                ingresarIngreso(8,1);
                sumaIngresosEUR = parseInt(d.monto) + sumaIngresosEUR; 
                $("#totalIngresoEUR").html(sumaIngresosEUR + " " + "EUR"); 
            }            
        }else if(d.tipo == "Gasto") {
            
            if (d.moneda == "ARS" && d.monto > 0) {
                ingresarGasto(4,5);
                sumaGastosARS = parseInt(d.monto) + sumaGastosARS;
                $("#totalGastoARS").html(sumaGastosARS + " " + "ARS");                           
            } else if (d.moneda == "BRL" && d.monto > 0){
                ingresarGasto(5,4);
                sumaGastosBRL = parseInt(d.monto) + sumaGastosBRL;
                $("#totalGastoBRL").html(sumaGastosBRL + " " + " BRL"); 
            }else if (d.moneda == "UYU" && d.monto > 0){
                ingresarGasto(6,3);
                sumaGastosUYU = parseInt(d.monto) + sumaGastosUYU;
                $("#totalGastoUYU").html(sumaGastosUYU + " " + " UYU"); 
            }else if (d.moneda == "USD" && d.monto > 0){
                ingresarGasto(7,2);
                sumaGastosUSD = parseInt(d.monto) + sumaGastosUSD;
                $("#totalGastoUSD").html(sumaGastosUSD + " " + " USD");  
            }else if (d.moneda == "EUR" && d.monto > 0){
                ingresarGasto(8,1);
                sumaGastosEUR = parseInt(d.monto) + sumaGastosEUR;
                $("#totalGastoEUR").html(sumaGastosEUR + " " + " EUR"); 
            }
        };
        
        if (sumaGastosARS > 0 && sumaIngresosARS > 0){
            balanceGeneralARS = parseInt(sumaIngresosARS) - parseInt(sumaGastosARS);
            $("#bGralARS").html(balanceGeneralARS + " " + "ARS"); 
            $("#balanceTitle").slideDown(1000);
            if (balanceGeneralARS < 0) {
                $("#bGralARS").css("color", "red");
            }
        }

        if (sumaIngresosBRL > 0 && sumaGastosBRL > 0) {
            balanceGeneralBRL = parseInt(sumaIngresosBRL) - parseInt(sumaGastosBRL);
            $("#bGralBRL").html(balanceGeneralBRL + " " + " BRL");
            $("#balanceTitle").slideDown(1000);
            if (balanceGeneralBRL < 0) {
                $("#bGralBRL").css("color", "red");
            }
        }
        
        if (sumaIngresosUYU > 0 && sumaGastosUYU > 0) {
            balanceGeneralUYU = parseInt(sumaIngresosUYU) - parseInt(sumaGastosUYU);
            $("#bGralUYU").html(balanceGeneralUYU + " " + " UYU");
            $("#balanceTitle").slideDown(1000);
            if (balanceGeneralUYU < 0) {
                $("#bGralUYU").css("color", "red");
            }
        }
        
        if (sumaIngresosUSD > 0 && sumaGastosUSD > 0) {
            balanceGeneralUSD = parseInt(sumaIngresosUSD) - parseInt(sumaGastosUSD);
            $("#bGralUSD").html(balanceGeneralUSD + " " + " USD");
            $("#balanceTitle").slideDown(1000);
            if (balanceGeneralUSD < 0) {
                $("#bGralUSD").css("color", "red");
            }
        }
        
        if (sumaIngresosEUR > 0 && sumaGastosEUR > 0) {
            balanceGeneralEUR = parseInt(sumaIngresosEUR) - parseInt(sumaGastosEUR);
            $("#bGralEUR").html(balanceGeneralEUR + " " + " EUR");
            $("#balanceTitle").slideDown(1000);
            if (balanceGeneralEUR < 0) {
                $("#bGralEUR").css("color", "red");
            }
        }

    }
    
    ingreso = ingreso + `</table>`;
    gasto = gasto + `</table>`;    
    $("#ingreso").fadeIn("slow").html(ingreso);
    $("#gasto").fadeIn("slow").html(gasto);   
    $("input").val("");
}