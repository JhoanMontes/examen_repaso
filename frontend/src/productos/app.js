
export function InicializarProductos(){

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-crear-producto');
    const lista = document.getElementById('lista-productos');
    const API_URL = 'http://localhost:3000/api/productos';
 
    const cargarProductos = async () => {
        const response = await fetch(API_URL);
        const productos = await response.json();
        lista.innerHTML = ''; 
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            lista.appendChild(li);
        });
    };

    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;

        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, precio })
        });
        
        form.reset();
        cargarProductos();
    });


    cargarProductos();
});

}

