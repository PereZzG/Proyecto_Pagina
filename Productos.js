function cargarProductos() {
    const productosContainer = document.querySelector('.product-container');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productosContainer.innerHTML = '';
    productos.forEach(producto => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p><b>${producto.nombre}</b></p>
            <p><b>C= ${producto.cantidad}</b></p>
            <p><b>Precio: $${producto.precio}</b></p>
        `;
        productosContainer.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', cargarProductos);