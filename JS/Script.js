const Nombre = document.getElementById("Nombre")
const Contraseña = document.getElementById("Contraseña")
const Correo = document.getElementById("Correo")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(Nombre.value.lenght < 3){
       warnings += "el nombre no es valido <br>"
       entrar = true
    }

    if(Contraseña.value.lenght < 4){
        warnings += "el nombre no es valido <br>"
        entrar = true
    }

    console.log(regexEmail.test(Correo.value))
    if(!regexEmail.test(Correo.value)){
        warnings +="el correo no es valido <br>"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }

})

