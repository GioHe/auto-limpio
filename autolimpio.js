const boton = document.getElementById("btnCalcular")
boton.addEventListener("click",() => {
    const lavadoExterior = $("#lavadoExterior").prop("checked");
    const lavadoMotor = $("#lavadoMotor").prop("checked");
    let montoNeto = 0;

    if(lavadoExterior) {
        montoNeto=montoNeto+7000;
    }

    if(lavadoMotor) {
        montoNeto=montoNeto+5000;
    }

    let impuesto = montoNeto*0.19;
    const total = montoNeto + impuesto;

    document.getElementById("neto").innerHTML=`<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML=`<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML=`<span>$ ${total}</span>`;
});


