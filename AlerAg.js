let productos = [];

function guardarProducto() {
    const nombre = document.getElementById('nombre-producto').value;
    const cantidad = document.getElementById('cantidad-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const imagen = document.getElementById('product-image').src;

    if (nombre && cantidad && precio) {
        const producto = { nombre, cantidad, precio, imagen };
        productos.push(producto);

        alert("Producto Guardado");
        actualizarProductos();

        // Resetea los campos del formulario
        document.getElementById('nombre-producto').value = '';
        document.getElementById('cantidad-producto').value = '';
        document.getElementById('precio-producto').value = '';
    } else {
        alert("Por favor, completa todos los campos");
    }
}

function cargarImagen() {
    // Lógica para cargar la imagen del producto
    const imageUrl = prompt("Ingresa la URL de la imagen del producto:");
    if (imageUrl) {
        document.getElementById('product-image').src = imageUrl;
    }
}

function actualizarProductos() {
    // Guardar los productos en el almacenamiento local
    localStorage.setItem('productos', JSON.stringify(productos));
}

function cargarProductos() {
    // Cargar los productos del almacenamiento local
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        productos = JSON.parse(productosGuardados);
    }
}

document.addEventListener('DOMContentLoaded', cargarProductos);