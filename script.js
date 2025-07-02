// --- Parte 1: Mostrar los Juguetes (Como se ven normalmente) ---

const listaJuguetesDiv = document.getElementById('lista-juguetes');

// Una lista de juguetes (imagina que esto viene de internet)
const juguetes = [
    { id: 1, nombre: "Tren de Madera", descripcion: "Un tren largo con muchos vagones.", imagen: "https://placehold.co/80/FFC107/000000?text=Tren" },
    { id: 2, nombre: "Muñeca Bailarina", descripcion: "Una muñeca con un vestido rosa.", imagen: "https://placehold.co/80/E91E63/FFFFFF?text=Muñeca" },
    { id: 3, nombre: "Robot Explorador", descripcion: "Un robot que se mueve solo.", imagen: "https://placehold.co/80/2196F3/FFFFFF?text=Robot" },
    { id: 4, nombre: "Bloques de Construcción", descripcion: "Muchos bloques para hacer torres.", imagen: "https://placehold.co/80/8BC34A/000000?text=Bloques" }
];

// Función para dibujar los juguetes en la pantalla
function dibujarJuguetes(juguetesArray) {
    if (juguetesArray.length === 0) {
        listaJuguetesDiv.innerHTML = '<p>No hay juguetes para mostrar.</p>';
        return;
    }

    listaJuguetesDiv.innerHTML = ''; // Limpiar el mensaje de "cargando"
    juguetesArray.forEach(juguete => {
        const itemHtml = `
            <div class="juguete-item">
                <img src="${juguete.imagen}" alt="${juguete.nombre}">
                <div class="juguete-info">
                    <h2>${juguete.nombre}</h2>
                    <p>${juguete.descripcion}</p>
                </div>
            </div>
        `;
        listaJuguetesDiv.innerHTML += itemHtml; // Añadir el juguete a la lista
    });
}

// Dibujar los juguetes cuando la página carga
dibujarJuguetes(juguetes);


// --- Parte 2: Activar al Obrero de Servicio (¡La Magia Offline!) ---

// Chequeamos si el navegador sabe lo que es un Service Worker
if ('serviceWorker' in navigator) {
    // Si sabe, le decimos que registre a nuestro Obrero de Servicio
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Obrero de Servicio registrado con éxito:', registration.scope);
            })
            .catch(error => {
                console.log('Fallo al registrar el Obrero de Servicio:', error);
            });
    });
}