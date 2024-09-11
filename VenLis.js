document.addEventListener('DOMContentLoaded', () => {
    const salesListElement = document.getElementById('sales-list');

    // Cargar las ventas almacenadas en LocalStorage
    const salesList = JSON.parse(localStorage.getItem('ventas')) || [];

    // Función para mostrar las ventas en la tabla
    function renderSales() {
        salesListElement.innerHTML = ''; // Limpiar contenido actual

        salesList.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="p-2">${sale.producto}</td>
                <td class="p-2">$${sale.valorUnitario}</td>
                <td class="p-2">${sale.cantidad}</td>
                <td class="p-2">$${sale.total}</td>
            `;
            salesListElement.appendChild(row);
        });
    }

    // Mostrar las ventas iniciales
    renderSales();

    // Calcular y mostrar el total de ventas
    document.getElementById('calculate-total').addEventListener('click', () => {
        const totalSales = salesList.reduce((sum, sale) => sum + sale.total, 0);
        document.getElementById('total-sales').textContent = `Total de Ventas: $${totalSales}`;
    });

    // Botón para resetear las ventas
    document.getElementById('reset-sales').addEventListener('click', () => {
        localStorage.removeItem('ventas'); // Eliminar las ventas del LocalStorage
        salesList.length = 0; // Limpiar el array de ventas
        renderSales(); // Volver a mostrar la tabla vacía
        document.getElementById('total-sales').textContent = ''; // Limpiar el total de ventas mostrado
    });
});
