# README
### Descripción
Este archivo README proporciona información sobre la web app y cómo ejecutarla correctamente. La aplicación utiliza JSON server como backend y se requiere el siguiente comando para su ejecución:

css
Copy code
npm json-server --watch src/api/db.json --port 5000
### Configuración del servidor
La API falsa se ejecuta en el puerto 5000 de forma predeterminada. Si se desea cambiar el puerto, es posible modificarlo en el archivo "package.json".

### Inicio de sesión
El inicio de sesión está incompleto en la aplicación. Para acceder a las diferentes rutas, es necesario agregar "/home" o "/clock" a la URL.

### Navbar
El botón de "logout" en la barra de navegación no tiene funcionalidad en este momento.
