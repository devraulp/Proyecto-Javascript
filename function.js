//-------------------- MOSTRAR LOS DATOS DEL STORAGE  ---------------------------

if (localStorage.getItem("memoria") === null){

}else {
    datos = JSON.parse(localStorage.getItem("memoria"));
    imprimirDato ();
}


// --------------------- EVENTO PARA CREAR OBJETO Y MOSTRARLO ---------------------

btnIngresar.addEventListener("click", () => { 
    crearDato()
    imprimirDato()
});

// --------------------- EVENTO PARA GUARDAR DATOS  -----------------------------

btnGuardar.addEventListener("click", () => {     
    localStorage.setItem("memoria", JSON.stringify(datos)); 
});

// --------------------- EVENTO PARA ELIMINAR DATOS  -----------------------------

btnEliminar.addEventListener("click", () => {     
    localStorage.clear(); 
    location.reload();
});

//-------------------- FUNCION PARA OBTENER LOS DATOS DE LOS INPUT----------------------

function crearDato () {   
    obtenerDato = new dato(/* datoMes.value ,*/ datoTipo.value, 
                                /* datoCuotas.value, */ datoNombre.value, 
                                datoMonto.value, datoMoneda.value);
    datos.push(obtenerDato);   
}  

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

    for (const elem of datos) {

        function ingresarIngreso (a,b){
            ingreso = ingreso + `<tr>
                                    <td colspan="${a}">${elem.nombre}</td>
                                    <td colspan="${b}">${elem.monto} ${elem.moneda}</td>
                                    </td>
                                </tr>`;
        }
        function ingresarGasto (a,b){
            gasto = gasto + `<tr>
                                <td colspan="${a}">${elem.nombre}</td>
                                <td colspan="${b}">${elem.monto} ${elem.moneda}</td>
                            </tr>`;
        }

        if (elem.tipo == "Ingreso") {
            
            if (elem.moneda == "ARS" && elem.monto > 0) {
                ingresarIngreso(4,5);
                sumaIngresosARS = parseInt(elem.monto) + sumaIngresosARS;
                totalIngresoARS.innerHTML = sumaIngresosARS + " " +  "ARS";
            } else if (elem.moneda == "BRL" && elem.monto > 0){
                ingresarIngreso(5,4);
                sumaIngresosBRL = parseInt(elem.monto) + sumaIngresosBRL; 
                totalIngresoBRL.innerHTML = sumaIngresosBRL + " " + "BRL";
            }else if (elem.moneda == "UYU" && elem.monto > 0){
                ingresarIngreso(6,3)
                sumaIngresosUYU = parseInt(elem.monto) + sumaIngresosUYU; 
                totalIngresoUYU.innerHTML = sumaIngresosUYU + " " + "UYU";
            }else if (elem.moneda == "USD" && elem.monto > 0){
                ingresarIngreso(7,2);
                sumaIngresosUSD = parseInt(elem.monto) + sumaIngresosUSD;
                totalIngresoUSD.innerHTML = sumaIngresosUSD + " " + "USD";
            }else if (elem.moneda == "EUR" && elem.monto > 0){
                ingresarIngreso(8,1);
                sumaIngresosEUR = parseInt(elem.monto) + sumaIngresosEUR; 
                totalIngresoEUR.innerHTML = sumaIngresosEUR + " " + "EUR"; 
            }
        }else if(elem.tipo == "Gasto") {
            
            if (elem.moneda == "ARS" && elem.monto > 0) {
                ingresarGasto(4,5);
                sumaGastosARS = parseInt(elem.monto) + sumaGastosARS;
                totalGastoARS.innerHTML = sumaGastosARS + " " + "ARS";                           
            } else if (elem.moneda == "BRL" && elem.monto > 0){
                ingresarGasto(5,4);
                sumaGastosBRL = parseInt(elem.monto) + sumaGastosBRL;
                totalGastoBRL.innerHTML = sumaGastosBRL + " " + " BRL"; 
            }else if (elem.moneda == "UYU" && elem.monto > 0){
                ingresarGasto(6,3);
                sumaGastosUYU = parseInt(elem.monto) + sumaGastosUYU;
                totalGastoUYU.innerHTML = sumaGastosUYU + " " + " UYU"; 
            }else if (elem.moneda == "USD" && elem.monto > 0){
                ingresarGasto(7,2);
                sumaGastosUSD = parseInt(elem.monto) + sumaGastosUSD;
                totalGastoUSD.innerHTML = sumaGastosUSD + " " + " USD";  
            }else if (elem.moneda == "EUR" && elem.monto > 0){
                ingresarGasto(8,1);
                sumaGastosEUR = parseInt(elem.monto) + sumaGastosEUR;
                totalGastoEUR.innerHTML = sumaGastosEUR + " " + " EUR"; 
            }
        };
        
        if (sumaGastosARS > 0 && sumaIngresosARS > 0){
        balanceGeneralARS = parseInt(sumaIngresosARS) - parseInt(sumaGastosARS);
        totalBalanceARS.innerHTML = balanceGeneralARS + " " + "ARS"; 
        }

        if (sumaIngresosBRL > 0 && sumaGastosBRL > 0) {
            balanceGeneralBRL = parseInt(sumaIngresosBRL) - parseInt(sumaGastosBRL);
            totalBalanceBRL.innerHTML = balanceGeneralBRL + " " + " BRL";
        }
        
        if (sumaIngresosUYU > 0 && sumaGastosUYU > 0) {
            balanceGeneralUYU = parseInt(sumaIngresosUYU) - parseInt(sumaGastosUYU);
        totalBalanceUYU.innerHTML = balanceGeneralUYU + " " + " UYU";
        }
        
        if (sumaIngresosUSD > 0 && sumaGastosUSD > 0) {
            balanceGeneralUSD = parseInt(sumaIngresosUSD) - parseInt(sumaGastosUSD);
            totalBalanceUSD.innerHTML = balanceGeneralUSD + " " + " USD";
        }
        
        if (sumaIngresosEUR > 0 && sumaGastosEUR > 0) {
            balanceGeneralEUR = parseInt(sumaIngresosEUR) - parseInt(sumaGastosEUR);
            totalBalanceEUR.innerHTML = balanceGeneralEUR + " " + " EUR";
        }
    }
    ingreso = ingreso + `</table>`;
    gasto = gasto + `</table>`;
    imprimirIngreso.innerHTML = ingreso;
    imprimirGasto.innerHTML = gasto; 
}

// //-------------------- FUNCION PARA MOSTRAR EL INPUT CUOTAS----------------------
// function mostrarCuotas() {
//     let valorTipo = document.getElementById("tipo").value;
//     if (valorTipo == "3"){
//     document.getElementById("cuotas").style.display = "flex";
//     }else {
//         document.getElementById("cuotas").style.display = "none";
//     }