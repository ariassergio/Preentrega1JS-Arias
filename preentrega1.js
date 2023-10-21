alert("Hola campeón del mundo 💙🤍");
let edad = prompt("Ingrese su edad");

//Pregunta si es mayor de edad

function edadpermitida(edad) {
  if (edad >= 18) {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert("Bienvenido/a, " + nombre + " " + apellido + "!");
    const productos = [
  {nombre: "Camiseta", precio: 8000 },
  {nombre: "Short", precio: 5000 },
  {nombre: "Buzo", precio: 10000},
  {nombre: "Joggin", precio: 6500},
];

let carrito = [];

let seleccion = prompt("Desea comprar algun producto? si/no")

while(seleccion != "si" && seleccion !="no"){
  alert("Por favor, ingrese si o no")
  seleccion = prompt ("Hola, desea comprar algun producto? si/no")
}
if (seleccion == "si"){
  alert("A continuacion visualizara la lista de productos")
  let todoslosproductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
  alert(todoslosproductos.join(" - "))
} else if (seleccion == "no"){
  alert("Muchas gracias por visitarnos, hasta pronto")
}

while(seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito (Camiseta, Short, Buzo, Joggin)")
  let precio = 0

  if (producto == "Camiseta" || producto == "Short" || producto == "Buzo" || producto == "Joggin"){
    switch (producto){
      case "Camiseta":
        precio = 8000;
        break;
      case "Short":
        precio = 5000;
        break;
      case "Buzo":
        precio = 10000;
        break;
      case "Joggin":
        precio = 6500;
        break; 
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({producto, unidades, precio})

  }else{
    alert("No tenemos ese producto 😒")
  }
  seleccion = prompt("Desea comprar otro producto? si/no")
  while(seleccion === "no"){
    alert("Gracias por su compra")
    carrito.forEach((carritoFinal) =>{
      alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert("El total a pagar es " + total)
    
} else {
    alert("Necesita ser mayor de edad (+18)");
  }
}

edadpermitida(edad);
