# 🚀 mi-app-offline-juguetes-favoritos-pwa
PWA de Juguetes Favoritos: Una aplicación web progresiva offline-first para gestionar y visualizar tu colección de juguetes. Desarrollada con HTML, CSS y JavaScript.

`mi-app-offline-juguetes-favoritos-pwa` es una **Aplicación Web Progresiva (PWA)** diseñada para que los amantes de los juguetes puedan gestionar y visualizar su colección favorita en cualquier momento y lugar. Con un enfoque **"offline-first"**, esta PWA permite acceder a tus datos y a la interfaz de usuario incluso sin conexión a internet, garantizando una experiencia fluida y fiable.

Desarrollada con las tecnologías web fundamentales (HTML, CSS y JavaScript), esta aplicación es un excelente ejemplo de cómo construir experiencias de usuario robustas y accesibles, con énfasis en:

* **Offline-First:** Acceso instantáneo a la información, incluso sin conexión.
* **Responsividad:** Diseño adaptativo para lucir genial en cualquier dispositivo (móvil, tablet, escritorio).
* **Velocidad:** Carga rápida gracias al almacenamiento en caché de los activos.
* **Instalabilidad:** Capacidad de ser instalada en la pantalla de inicio como una aplicación nativa.

## 🌟 Características Destacadas

* **Listado de Juguetes:** Visualiza una colección de juguetes con sus nombres, descripciones e imágenes.
* **Funcionalidad Offline:** Explora tus juguetes favoritos incluso cuando no tengas acceso a la red, gracias a la implementación de Service Workers.
* **Diseño Responsivo:** Interfaz de usuario que se adapta perfectamente a diferentes tamaños de pantalla y orientaciones (vertical/horizontal).
* **Experiencia de Usuario (UX):** Interfaz limpia, intuitiva y fácil de navegar.
* **Optimización SEO:** Estructura de código y meta-etiquetas optimizadas para la visibilidad en motores de búsqueda.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la aplicación.
* **CSS3:** Estilizado moderno y responsivo (incluyendo Flexbox y Media Queries).
* **JavaScript (ES6+):** Lógica interactiva de la aplicación, gestión de datos y Service Workers.
* **Progressive Web App (PWA):** Manifiesto Web y Service Workers para capacidades offline e instalabilidad.

## 🚀 Cómo Ejecutar el Proyecto Localmente

Para ver `mi-app-offline-juguetes-favoritos-pwa` en acción en tu máquina local y probar su funcionalidad offline, sigue estos pasos:

1.  **Clona el Repositorio:**
    ```bash
    git clone https://github.com/santiagourdaneta/mi-app-offline-juguetes-favoritos-pwa/
    cd mi-app-offline-juguetes-favoritos-pwa
    ```
    
2.  **Preparar Iconos (si aún no lo hiciste):**
    Asegúrate de tener la carpeta `assets/` dentro de tu proyecto, y que contenga los iconos `bs_icon_192.png` y `bs_icon_512.png` (o tus propios iconos).

3.  **Servir la Aplicación con un Servidor Web Local (Recomendado para PWA):**
    Para que las funcionalidades de PWA (como los Service Workers y el modo offline) funcionen correctamente, la aplicación debe ser servida desde un servidor web (aunque sea local). Si no usas herramientas como Live Server en VS Code, Python ofrece una forma sencilla de hacerlo:

    * **Verifica la instalación de Python:** Abre tu terminal/símbolo del sistema y escribe `python --version` o `python3 --version`. Si Python no está instalado, descárgalo de [python.org](https://www.python.org/downloads/).

    * **Navega a la carpeta raíz del proyecto:**
        ```bash
        cd /ruta/a/tu/proyecto/mi-app-offline-juguetes-favoritos-pwa
        ```
        (Reemplaza con la ruta real de tu carpeta).

    * **Inicia el servidor web local:**
        ```bash
        python -m http.server 8000
        # O si usas python3:
        # python3 -m http.server 8000
        ```
        Verás un mensaje como `Serving HTTP on 0.0.0.0 port 8000`.

4.  **Abre la Aplicación en tu Navegador:**
    Una vez que el servidor esté funcionando, abre tu navegador web (preferiblemente Google Chrome para las herramientas de desarrollo) y ve a:
    ```
    http://localhost:8000
    ```

## 🌐 Probando la Funcionalidad Offline

Para verificar que tu PWA funciona sin conexión:

1.  **Carga la Aplicación Online:** Asegúrate de que la aplicación haya cargado completamente al menos una vez en `http://localhost:8000` (mientras tu servidor Python está activo y tu computadora conectada a internet). Esto permitirá que el Service Worker se instale y cachee los archivos.

2.  **Abre las Herramientas de Desarrollador de Chrome:**
    * Presiona `F12` (Windows/Linux) o `Cmd + Option + I` (macOS).

3.  **Ve a la Pestaña `Application`:**
    * En el menú lateral izquierdo, haz clic en **`Service Workers`**. Deberías ver tu `service-worker.js` listado como `active and running`.

4.  **Activa el Modo Offline:**
    * En la misma pestaña `Service Workers`, marca la casilla **`Offline`**.
    * Alternativamente, puedes ir a la pestaña **`Network`** y cambiar el estado de "Online" a "Offline" en el menú desplegable.

5.  **Cierra la Pestaña de la Aplicación.**

6.  **Abre una Nueva Pestaña y Vuelve a la URL:**
    * Escribe `http://localhost:8000` en la barra de direcciones de una **nueva pestaña** del navegador y presiona Enter.

    **¡La aplicación debería cargar y ser completamente funcional, incluso en modo offline!**

    Para volver al modo online, simplemente desmarca la casilla `Offline` en las Herramientas de Desarrollador.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, por favor, abre un "issue" o envía un "pull request".

---
