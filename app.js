
//definición de varables para hacer referencia a objetod del HTML
const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const comentario = document.getElementById("comentario")
const mensaje = document.getElementById("mensaje")

//evento de validación del formulario
formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let mensajes = ""
    let entrar = false
    let patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/  //patrón de validación del correo
    let patronTlf =   /^\d{7,14}$/                                     //patrón de validaciòn del teléfono 
                                                                          // 7 a 14 números   

    mensaje.innerHTML = ""

    //validación del campo nombre
    if(nombre.value.length <6){
        mensajes += `El nombre debe tener mas de 6 caracteres <br>`
        entrar = true
    }

    //validación del campo email
    if(!patronEmail.test(email.value)){
        mensajes += `Introduzca un email válido <br>`
        entrar = true
    }

    //validación del campo telefono
    if(!patronTlf.test(telefono.value)){
        mensajes += `Introduzca un número telefónico válido <br>`
        entrar = true
    }

    //validación del campo ccomentario
    if(comentario.value.length <8){
        mensajes += `El comentario debe tener más de 8 caracteres <br>`
        entrar = true
    }

    //Resultado de la validación
    if(entrar){
        mensaje.innerHTML = mensajes
    }else{
        mensaje.innerHTML = "Enviado"
        alert("Mensaje Enviado. ¡Gracias!")
    }
    
})