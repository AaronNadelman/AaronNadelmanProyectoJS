

//REGISTRO DE USUARIOS

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


//PRODUCTOS 

let productosContainer = document.getElementById("productosContainer")

const url = "https://fakestoreapi.com/products"

fetch(url)
    .then(response => {

        return response.ok ? response.json() : Promise.reject(new Error(`Error de red: ${response.status}`));
    })
    .then(data => {


        data.forEach(element => {

            let productElement = document.createElement("div")
            productElement.className = "producto"

            let imageUrl = element.image
            let image = document.createElement("img")
            image.className = "imagenProducto"
            image.src = imageUrl

            image.onload = function () {
                productElement.appendChild(image)
            }

            productosContainer.appendChild(productElement)

            productElement.innerHTML = `
            <p class = "titulo"> ${element.title} <p>
            <p class = "texto"> ${element.description} </p>
            <p class = "texto"> ${element.price}</p>

            `








        });



    })
    .catch(error => {

        console.error('Error en la solicitud:', error);
    });


// filtrar productos


let respuestaBuscar = document.getElementById("respuestaBuscar")


let botonBuscar = document.getElementById("busqueda")


botonBuscar.addEventListener("click", (event) => {
    event.preventDefault();

    let busqueda = respuestaBuscar.value

    fetch(url)
        .then(response => {

            return response.ok ? response.json() : Promise.reject(new Error(`Error de red: ${response.status}`));
        })
        .then(data => {





            let productosFiltrados = data.filter(producto => {

                return producto.title.toLowerCase().includes(busqueda.toLowerCase());


            });

            if (productosFiltrados.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se encontraron productos.',
                });
            } else {


                productosFiltrados.map((e) => {

                    let resultadoContainer = document.getElementById("productoEncontrado")
                    resultadoContainer.className = ("productoEncontrado")

                    let imageUrl = e.image
                    let image = document.createElement("img")
                    image.className = "imagenProducto"
                    image.src = imageUrl

                    image.onload = function () {
                        resultadoContainer.appendChild(image)
                    }

                    resultadoContainer.innerHTML = `
                <p class = "texto"> name: ${e.title} <p>
            <p class = "texto"> description: ${e.description} </p>
            <p class = "texto"> price: ${e.price}</p>
                
                `


                })
            }





        });



})