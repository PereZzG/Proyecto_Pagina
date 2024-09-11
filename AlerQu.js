let productoSeleccionadoIndex = null; // Variable para almacenar el índice del producto seleccionado

function cargarProductos() {
    const productosContainer = document.querySelector('.product-container');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productosContainer.innerHTML = '';
    productos.forEach((producto, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'bg-red-500 p-4 rounded-lg flex flex-col items-center space-y-2 cursor-pointer';
        productItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-20 h-20 rounded-full">
            <p class="text-white">${producto.nombre}</p>
        `;
        productItem.addEventListener('click', () => mostrarModal(index, producto.nombre));
        productosContainer.appendChild(productItem);
    });
}

function mostrarModal(index, nombreProducto) {
    productoSeleccionadoIndex = index; // Guarda el índice del producto seleccionado
    document.getElementById('productoEliminar').textContent = `¿Deseas eliminar el producto "${nombreProducto}"?`;
    document.getElementById('modalConfirmacion').classList.remove('hidden');
}

function cerrarModal() {
    document.getElementById('modalConfirmacion').classList.add('hidden');
}

function confirmarEliminacion() {
    eliminarProducto(productoSeleccionadoIndex);
    cerrarModal();
}

function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Eliminar el producto del array
    productos.splice(index, 1);
    
    // Guardar el nuevo array en LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    
    alert('Producto eliminado con éxito.');
    
    // Recargar los productos en la página
    cargarProductos();
}

document.addEventListener('DOMContentLoaded', cargarProductos);
