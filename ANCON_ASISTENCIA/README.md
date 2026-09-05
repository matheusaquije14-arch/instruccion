# Control de Instrucción — Ancón 163

Prototipo estático, responsive y accesible para el sistema de control de asistencia de la Compañía de Bomberos Voluntarios Ancón N.º 163.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta a su raíz.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/(root)`.
4. Guarda. GitHub mostrará la URL pública al terminar el despliegue.

No requiere compilación, dependencias ni servidor: GitHub Pages sirve directamente `index.html`.

## Alcance del prototipo

Incluye dashboard administrativo, navegación adaptable para móvil, modal de registro de asistencia con captura de cámara y feedback de interacción. Los datos mostrados son de demostración.

Para producción se requiere un backend seguro (por ejemplo Firebase), autenticación basada en roles, reglas de acceso, almacenamiento privado de evidencias, hora de servidor, auditoría y validaciones de asistencia indicadas en el documento de requisitos.
