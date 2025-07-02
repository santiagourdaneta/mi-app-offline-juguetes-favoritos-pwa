// --- 1. Nombres para los Bolsillos Secretos del Cartero (Cachés) ---
const CACHE_NAME = 'mis-juguetes-cache-v1'; // Un nombre para nuestro bolsillo secreto (cache)
// Lista de archivos que el Obrero de Servicio debe guardar en su bolsillo la primera vez
const urlsToCache = [
    '/', // La página principal (index.html)
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/assets/bs_icon_192.png', // Tu icono pequeño
    '/assets/bs_icon_512.png'  // Tu icono grande
];

// --- 2. Cuando el Obrero de Servicio Se Instala por Primera Vez ---
// (Es como cuando el cartero llega nuevo al barrio)
self.addEventListener('install', event => {
    console.log('Obrero de Servicio: Instalando y guardando archivos...');
    event.waitUntil(
        caches.open(CACHE_NAME) // Abrir el bolsillo secreto con el nombre que le dimos
            .then(cache => {
                return cache.addAll(urlsToCache); // Guardar todos los archivos importantes dentro del bolsillo
            
                then(() => console.log('Service Worker: Todos los recursos han sido cacheados exitosamente.'))
               .catch(error => console.error('Service Worker: Fallo al cachear todos los recursos:', error));
            })
            // self.skipWaiting() fuerza al nuevo Service Worker a activarse inmediatamente,
            // sin esperar a que el usuario cierre todas las pestañas de la app.
            .then(() => self.skipWaiting()) // Le decimos al cartero que empiece a trabajar ya
            .catch(error => console.error('Service Worker: Error durante la fase de instalación:', error))
    );
});

// --- 3. Cuando el Obrero de Servicio Recibe una Petición (Alguien pide algo) ---
// (Es como cuando alguien le pide una carta al cartero)
self.addEventListener('fetch', event => {
    // Si la petición es para una imagen de placeholder (que no existe como archivo local)
    // podemos dejar que vaya a la red o servir una imagen por defecto
    try {
        const requestUrl = new URL(event.request.url);
        if (requestUrl.host === 'via.placeholder.com') {
            // En este ejemplo simple, si es una imagen de placeholder, la dejamos ir a la red
            // En un caso real, la guardarías o servirías una imagen offline por defecto.
            event.respondWith(fetch(event.request));
            return; // Salir de la función para no procesarla con la caché
        }
    } catch (error) {
        console.error('Obrero de Servicio: URL inválida en la petición:', event.request.url, error);
    }

    event.respondWith(
        caches.match(event.request) // Primero, mira en el bolsillo secreto del cartero (la caché)
            .then(response => {
                if (response) {
                    // ¡Si lo encuentra en el bolsillo, lo devuelve rapidísimo! (modo offline)
                    console.log('Obrero de Servicio: Sirviendo desde la caché:', event.request.url);
                    return response;
                }
                // Si no está en el bolsillo, el cartero va a la tienda (el internet)
                console.log('Obrero de Servicio: No encontrado en caché, buscando en la red:', event.request.url);
                return fetch(event.request) // Va a buscarlo en internet
                    .then(response => {
                        // Si lo trae de internet y es una respuesta válida (no un error)
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // Guarda una copia nueva en el bolsillo secreto para la próxima vez
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response; // Devuelve la respuesta que trajo de internet
                    });
            })
    );
});

// --- 4. Cuando el Obrero de Servicio Se Activa (Ya está listo para trabajar) ---
// (Es como cuando el cartero empieza su jornada)
self.addEventListener('activate', event => {
    console.log('Obrero de Servicio: Activado y listo para servir!');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                     // Si el nombre de la caché no coincide con nuestro CACHE_NAME actual,
                    // significa que es una caché antigua y debe ser eliminada.
                    if (cacheName !== CACHE_NAME) { // Si hay otros bolsillos viejos (otras versiones)
                        console.log('Obrero de Servicio: Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName); // Borra los bolsillos viejos para limpiar
                    }
                })
            );
        })
    );
});