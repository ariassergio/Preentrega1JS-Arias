const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function() {
    if (contenedor.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})

// Obtén referencias a los elementos de entrada y al botón de guardar
const nombreInput = document.getElementById("nombreInput");
const apellidoInput = document.getElementById("apellidoInput");
const guardarNombreApellidoBtn = document.getElementById("guardarNombreApellido");

// Comprueba si ya hay nombres y apellidos guardados en el LocalStorage
const storedNombre = localStorage.getItem("nombre");
const storedApellido = localStorage.getItem("apellido");

// Si se encuentran nombres y apellidos en el LocalStorage, llénalos en los campos de entrada
if (storedNombre) {
    nombreInput.value = storedNombre;
}

if (storedApellido) {
    apellidoInput.value = storedApellido;
}

// Agrega un evento de clic al botón de guardar
guardarNombreApellidoBtn.addEventListener("click", function() {
    // Obtiene los valores de nombre y apellido ingresados por el usuario
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;

    // Guarda los valores en el LocalStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);

    // Muestra el mensaje de bienvenida con los valores ingresados por el usuario
    alert("Hola " + nombre + " " + apellido + ". Muchas gracias por visitarnos");
});




const contenedorProductos = document.getElementById("contenedor");

const productos = [
    {
        "nombre": "Camiseta de algodon blanca",
        "precio": "$4.999",
        "imagen": "./imagenes/camisetaalgodon.jpg"
    },
    {
        "nombre": "Camiseta de algodon negra",
        "precio": "$4.499",
        "imagen": "./imagenes/camisetalgodonne.jpg"
        
    },
    {
        "nombre": "Camiseta titular Argentina",
        "precio": "$19.999",
        "imagen": "./imagenes/camisetatitular.jpg"
        
    },
    {
        "nombre": "Camiseta suplente Argentina",
        "precio": "$19.999",
        "imagen": "./imagenes/camisetasuplente.jpg"
        
    }
];


 // Iterar a través de los productos y construir el HTML para cada uno
 productos.forEach(producto => {
    const productoHTML = `
       <div>     
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto">
                <p>${producto.nombre}</p>
                <p class="pprecio" > ${producto.precio}</p>
                <button class="botoncomprar" onclick="comprarProducto(${JSON.stringify(producto)})">Comprar</button>
            </div>
        </div>    
    `;
    contenedorProductos.innerHTML += productoHTML;
});
  
const carrito = document.getElementById('carrito');
const carritoContenido = document.getElementById('carrito-contenido');

// Agrega un evento de clic a la imagen del "carrito"
carrito.addEventListener('click', toggleCarrito);

function toggleCarrito() {
    // Mostrar u ocultar el contenido del carrito
    if (carritoContenido.style.display === 'none' || carritoContenido.style.display === '') {
        carritoContenido.style.display = 'block';
    } else {
        carritoContenido.style.display = 'none';
    }
}

// Agrega un evento de clic a todos los botones "Comprar"
// Inicializa el contador de productos y el total
let contadorProductos = 0;
let totalCarrito = 0;

// Agrega un evento de clic a todos los botones "Comprar"
const botonesComprar = document.querySelectorAll('.producto button');
botonesComprar.forEach((boton) => {
    boton.addEventListener('click', mostrarDialogo);
    boton.addEventListener('click', mostrarProductoSeleccionado);
    
});

const mensajeProducto = document.getElementById('mensaje-producto');

function mostrarProductoSeleccionado(event) {
    const productoSeleccionado = event.target.parentElement.querySelector('p:first-child').textContent;
    mensajeProducto.textContent = `Producto seleccionado: ${productoSeleccionado}`;
    mensajeProducto.className = 'producto-seleccionado';
    mensajeProducto.style.display = 'block';
    
}


// Definir la función eliminarProductoDelCarrito fuera de agregarAlCarrito
function eliminarProductoDelCarrito(elementoCarrito, precio, cantidad) {
    const listaCarrito = document.getElementById('lista-carrito');

    // Elimina el elemento del carrito
    listaCarrito.removeChild(elementoCarrito);

    // Actualiza el contador de productos y el total del carrito
    contadorProductos -= cantidad;
    totalCarrito -= precio * cantidad;

    // Actualiza el encabezado con el contador y el total
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarritoElement = document.getElementById('total-carrito');
    contadorCarrito.textContent = contadorProductos;
    totalCarritoElement.textContent = totalCarrito.toFixed(2);

   
}

// Obtén una referencia al botón
var botonCompra = document.getElementById("botonCompra");

// Agrega un controlador de eventos al botón
botonCompra.addEventListener("click", function() {
  // Muestra un alert al hacer clic en el botón
  alert("¡Muchas gracias por su compra!");
});


const dialog = document.getElementById('dialog');
const cantidadInput = document.getElementById('cantidad');
const agregarAlCarritoButton = document.getElementById('agregarAlCarrito');
agregarAlCarritoButton.addEventListener('click', agregarAlCarrito);


let productoSeleccionado;

function mostrarDialogo(event) {
    productoSeleccionado = event.target.parentElement;
    dialog.style.display = 'block';
}
function agregarAlCarrito() {
    if (productoSeleccionado) {
        const nombre = productoSeleccionado.querySelector('p:first-child').textContent;
        const precio = parseFloat(productoSeleccionado.querySelector('.pprecio').textContent.replace('$', '').replace(',', ''));
        const cantidad = parseInt(cantidadInput.value, 10);

        const elementoCarrito = document.createElement('li');
        elementoCarrito.innerHTML = `${nombre} x ${cantidad} - $${(precio * cantidad).toFixed(3)}`;
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.appendChild(elementoCarrito);

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'eliminar-producto';
        botonEliminar.textContent = 'Eliminar';
        elementoCarrito.appendChild(botonEliminar);

        botonEliminar.addEventListener('click', function() {
            eliminarProductoDelCarrito(elementoCarrito, precio, cantidad);
        });

        contadorProductos += cantidad;
        totalCarrito += precio * cantidad;

        const contadorCarrito = document.getElementById('contador-carrito');
        const totalCarritoElement = document.getElementById('total-carrito');
        contadorCarrito.textContent = contadorProductos;
        totalCarritoElement.textContent = totalCarrito.toFixed(2);

        const elementoCarritoHeader = document.createElement('li');
        elementoCarritoHeader.textContent = `${nombre} x ${cantidad}`;
        const listaCarritoHeader = document.getElementById('lista-carrito-header');
        listaCarritoHeader.appendChild(elementoCarritoHeader);

        dialog.style.display = 'none';

        cantidadInput.value = 1;

        productoSeleccionado = null;

        
    }
    
}
