function confirmarVenta() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    let ventas = JSON.parse(localStorage.getItem('ventas')) || [];

    productos.forEach((producto, index) => {
        const cantidadSeleccionada = parseInt(document.getElementById(`cantidad-${index}`).value, 10);
        if (cantidadSeleccionada > 0) {
            producto.cantidad -= cantidadSeleccionada;

            // Crear una nueva venta y añadirla al array de ventas
            const venta = {
                producto: producto.nombre,
                valorUnitario: producto.precio,
                cantidad: cantidadSeleccionada,
                total: cantidadSeleccionada * producto.precio
            };
            ventas.push(venta);
        }
    });

    // Guardar las ventas en LocalStorage
    localStorage.setItem('ventas', JSON.stringify(ventas));

    // Actualizar los productos en LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    cerrarModal();
    alert('Venta realizada con éxito.');
    cargarProductos();
}
function cargarProductos() {
    const productosContainer = document.querySelector('.product-container');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log(productos); // Verifica que los productos se están cargando correctamente
    
    productosContainer.innerHTML = '';
    productos.forEach((producto, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p><b>${producto.nombre}</b></p>
            <p><b>Cantidad disponible: ${producto.cantidad}</b></p>
            <input type="number" id="cantidad-${index}" class="w-full p-2 rounded border border-gray-400" min="0" max="${producto.cantidad}" value="0">
        `;
        productosContainer.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', cargarProductos);
function mostrarConfirmacion() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    let resumenCompra = '';
    let totalCompra = 0;

    productos.forEach((producto, index) => {
        const cantidadSeleccionada = parseInt(document.getElementById(`cantidad-${index}`).value, 10);
        if (cantidadSeleccionada > 0) {
            const subtotal = cantidadSeleccionada * producto.precio;
            totalCompra += subtotal;

            resumenCompra += `
                <p><b>${producto.nombre}</b> - Cantidad: ${cantidadSeleccionada} - Subtotal: $${subtotal}</p>
            `;
        }
    });

    if (resumenCompra) {
        document.getElementById('resumenCompra').innerHTML = resumenCompra;
        document.getElementById('totalCompra').textContent = `Total: $${totalCompra}`;
        document.getElementById('modalConfirmacion').classList.remove('hidden');
    } else {
        alert('No has seleccionado ningún producto.');
    }
}

function cerrarModal() {
    document.getElementById('modalConfirmacion').classList.add('hidden');
}
