const listaCuotasMes = 5;
const valorCredito= 596000 ;
const interesMes = 1.9 ;


function calcularInteres (){

    const interesTotalPorcentaje = interesMes * listaCuotasMes;
    const interesTotalValor = (valorCredito * interesTotalPorcentaje)/100;

    const totalPago = (valorCredito + interesTotalValor)*1;

    const cuotasMes = totalPago/listaCuotasMes;


    return ("el interes mensual es de " + interesMes + " con la cantidad de cuotas mensuales de " + listaCuotasMes 
    + " por un credito con valor de " + valorCredito + " lo que nos da un total de  " + interesTotalPorcentaje 
    + "% de interes. Un pago mensual de " + cuotasMes + " y se pagaria en total " + totalPago);
}

