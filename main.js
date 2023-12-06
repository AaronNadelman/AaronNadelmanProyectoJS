let respuestaUsuario = document.getElementById("nombreUsuario")
let respuestaEmail = document.getElementById("email")
let boton = document.getElementById("boton")
let listaUsuarios = document.getElementById("listaUsuarios")
let arrayUsuarios = [];

window.onload = () => {
    let usuarioGuardado = localStorage.getItem("usuarioGuardado")
    if (usuarioGuardado) {
        arrayUsuarios = JSON.parse(usuarioGuardado)
        mostrarUsuarios()
    }
}


boton.addEventListener("click", (event) => {
    event.preventDefault();

    let nombreUsuario = respuestaUsuario.value
    let email = respuestaEmail.value

    let usuario = {
        nombre: nombreUsuario,
        correo: email
    }

    arrayUsuarios.push(usuario)

    localStorage.setItem("usuarioGuardado", JSON.stringify(arrayUsuarios))


    respuestaUsuario.value = ""
    respuestaEmail.value = ""
    mostrarUsuarios()
})

let mostrarUsuarios = () => {
    listaUsuarios.innerHTML = ""

    if (arrayUsuarios.length > 0) {

        listaUsuarios.innerHTML += "<ul>"

        arrayUsuarios.forEach(function (usuario) {
            listaUsuarios.innerHTML += `<li>nombre: ${usuario.nombre} mail: ${usuario.correo} <br/></li>`
        })

    }
    listaUsuarios.innerHTML += "</ul>"
}