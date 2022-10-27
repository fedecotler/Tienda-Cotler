let boton = document.getElementById("boton")
boton.addEventListener("click", calculoCarrito)
boton.addEventListener("click", evitarDobleClick)


// función que evita doble click
function evitarDobleClick() {
    document.getElementById("boton").disabled = true;
    setTimeout(function() {
        document.getElementById("boton").disabled = false;
    }, 50);
}

function calculoCarrito() {
document.getElementById("resultado").innerHTML = ""

a = document.getElementById("producto1")
let a1 = a.value
b = document.getElementById("producto2")
let b2 = b.value
c = document.getElementById("producto3")
let c3 = c.value
d = document.getElementById("producto4")
let d4 = d.value
e = document.getElementById("producto5")
let e5 = e.value


class Ropa {
    constructor(nombre, precio) {
        this.name = nombre
        this.price = precio
    }

}

const Remera = new Ropa("Remera", 3500)
const Buzo = new Ropa("Buzo", 7000)
const Campera = new Ropa("Campera", 12300)
const Jean = new Ropa("Jean", 6000)
const Zapatillas = new Ropa("Zapatillas", 14000)

let listaRopa = [Remera, Buzo, Campera, Jean, Zapatillas]


let x = a1*listaRopa[0].price + b2*listaRopa[1].price + c3*listaRopa[2].price + d4*listaRopa[3].price + e5*listaRopa[4].price;

document.getElementById("resultado").innerHTML = `<br><b>Tu total es $${x}</b> <br>`
}



