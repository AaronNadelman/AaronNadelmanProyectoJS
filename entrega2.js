class instrumento {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

let instrumento1 = new instrumento('Guitarra', 500, 2)
let instrumento2 = new instrumento('Batería', 1000, 5)
let instrumento3 = new instrumento('Teclado', 800, 3)
let instrumento4 = new instrumento('Saxofón', 600, 5)
let instrumento5 = new instrumento('Violín', 300, 2)
let instrumento6 = new instrumento('Trompeta', 400, 3)
let instrumento7 = new instrumento('Bajo', 600, 8)
let instrumento8 = new instrumento('Flauta', 200, 1)
let instrumento9 = new instrumento('Piano', 1200, 3)
let instrumento10 = new instrumento('Tambor', 150, 2)
let insrumnento11 = new instrumento('Acordeón', 800, 10)

let lista = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5, instrumento6, instrumento7, instrumento8, instrumento9, instrumento10, insrumnento11]

function filtrarInstrumento() {
    const instrumentoIngresado = prompt('Ingrese el nombre de un instrumento:').toLowerCase()
    const instrumentoEncontrado = lista.find(instrumento => instrumento.nombre.toLowerCase() === instrumentoIngresado.toLowerCase());
    if (instrumentoEncontrado) {
        console.log(`¡Encontrado! Detalles de ${instrumentoEncontrado.nombre}:`);
        console.log(`Precio: $${instrumentoEncontrado.precio}`);
        console.log(`Stock disponible: ${instrumentoEncontrado.stock} unidades`);
    } else {
        console.log(`Lo siento, no se encontró información para ${instrumentoIngresado}.`)
    }
}

function agregarInstrumento() {
    let nombre = prompt("ingrese el nombre").toLowerCase().trim()
    let precio = parseInt(prompt("ingrese el precio"))
    let stock = parseInt(prompt("ingrese el stock"))
    if (isNaN(precio) || isNaN(stock)) {
        alert("ingrese un valor que sea válido")
    } else {
        let productoIngresado = new instrumento(nombre, precio, stock)

        lista.push(productoIngresado)
        console.table(lista)
    }


}

function main() {
    let op = parseInt(prompt("Ingrese 1 para buscar un instrumento o 2 para agregar un instrumento."))
    if (op == 1) {
        filtrarInstrumento()
    } else {
        agregarInstrumento()
    }
}

main()