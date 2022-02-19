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


document.getElementById("nombre").addEventListener("blur", (evento) => {
 
    const input = evento.currentTarget;
 
    const txtNombre = input.value;
  
   
    const feedbackNombre = document.getElementById("feedback-nombre");
  

    expr = /^[a-z A-Z]{3,30}$/;
 
    if (!expr.test(txtNombre)){
      feedbackNombre.innerHTML = "El Nombre es invalido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackNombre.className = "invalid-feedback";
    } else {
      feedbackNombre.innerHTML = "El Nombre es valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackNombre.className = "valid-feedback";
    }
  });

  document.getElementById("apellido").addEventListener("blur", (evento) => {
 
    const input = evento.currentTarget;
 
    const txtApellido = input.value;
  
   
    const feedbackApellido = document.getElementById("feedback-apellido");
  

    expr = /^[a-z A-Z]{3,30}$/;
 
    if (!expr.test(txtApellido)){
      feedbackApellido.innerHTML = "El Apellido es invalido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackApellido.className = "invalid-feedback";
    } else {
      feedbackApellido.innerHTML = "El Apellido es valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackApellido.className = "valid-feedback";
    }
  });

  document.getElementById("direccion").addEventListener("blur", (evento) => {
 
    const input = evento.currentTarget;
 
    const txtDireccion = input.value;
  
   
    const feedbackDireccion = document.getElementById("feedback-direccion");
  

    expr = /^[a-z A-Z]{3,30}$/;
 
    if (!expr.test(txtDireccion)){
      feedbackDireccion.innerHTML = "La Dirección es invalido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackDireccion.className = "invalid-feedback";
    } else {
      feedbackDireccion.innerHTML = "La Dirección es valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackDireccion.className = "valid-feedback";
    }
  }); 



  //Llamar al id del input
document.getElementById("marca").addEventListener("blur", (evento) => {
    //Convierte en texto lo del input
    const input = evento.currentTarget;
  //Crea una constante con lo que tiene el input
    const txtMarca = input.value;
  
    // Se llama al id donde se va a mostrar el mensaje
    const feedbackMarca = document.getElementById("feedback-marca");
  
  //expr = /^[contenido que aparecera]{cuantos caracteres seran}$/;
    expr = /^[a-z A-Z]{3,20}$/;
 
  // ! = !distinto a expr.test "que lo prueba"(el const creado con el contenido)
    if (!expr.test(txtMarca)){
      feedbackMarca.innerHTML = "La Marca es invalida.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackMarca.className = "invalid-feedback";
    } else {
      feedbackMarca.innerHTML = "La Marca es valida";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackMarca.className = "valid-feedback";
    }
  });


  
document.getElementById("modelo").addEventListener("blur", (evento) => {
 
    const input = evento.currentTarget;
 
    const txtModelo = input.value;
  
   
    const feedbackModelo = document.getElementById("feedback-modelo");
  

    expr = /^[a-z A-Z]{3,20}$/;
 
    if (!expr.test(txtModelo)){
      feedbackModelo.innerHTML = "El Modelo es invalido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackModelo.className = "invalid-feedback";
    } else {
      feedbackModelo.innerHTML = "El Modelo es valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackModelo.className = "valid-feedback";
    }
  });

  document.getElementById("año").addEventListener("blur", (evento) => {
 
    const input = evento.currentTarget;
 
    const txtAño = input.value;
  
   
    const feedbackAño = document.getElementById("feedback-año");
  

    expr = /^[0-9]{4}$/;
 
    if (!expr.test(txtAño)){
      feedbackAño.innerHTML = "El Año es invalido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackAño.className = "invalid-feedback";
    } else {
      feedbackAño.innerHTML = "El Año es valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackAño.className = "valid-feedback";
    }
  });