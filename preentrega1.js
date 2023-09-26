alert("Hola campeón del mundo 💙🤍");
let edad = prompt("Ingrese su edad");

function edadpermitida(edad) {
  if (edad >= 18) {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert("Bienvenido/a, " + nombre + " " + apellido + "!");
    
    let productos = ["short", "remera", "medias"];
    alert("Productos disponibles: short, remera, medias");
    
    let operacion = prompt("Ingrese el nombre del producto que desea:");
    
    switch (operacion) {
      case "short":
        alert("El producto elegido es short y su precio es de $5.000");
        break;
      case "remera":
        alert("El producto elegido es remera y su precio es de $10.000");
        break;
      case "medias":
        alert("El producto elegido es medias y su precio es de $3.000");
        break;
      default:
        alert("El producto ingresado no se encuentra");
        break;
    }
  } else {
    alert("Necesita ser mayor de edad (+18)");
  }
}

edadpermitida(edad); 
