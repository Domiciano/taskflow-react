# Instrucciones para el asistente

Este proyecto se usa en un taller de versionamiento para personas sin experiencia en
programación. Quien te escribe no sabe programar y no va a leer el código.

## Cómo responder
- Responde siempre en español, en frases cortas y sin jerga técnica.
- Al terminar un cambio, resume en máximo 3 líneas qué hiciste y en qué archivos.
- Si el pedido es ambiguo, haz UNA pregunta corta antes de tocar archivos.
- Si algo falla, explica primero qué pasó en una frase, y después qué vas a intentar.

## Reglas del proyecto
- Solo React con Vite. No agregues dependencias, ni librerías de estilos, ni gestores de estado,
  ni archivos de configuración nuevos.
- Un componente por archivo, en src/components. La lógica de guardado vive en src/hooks.
- Los textos visibles de la interfaz van en español. El código (variables, funciones, clases
  CSS) en inglés.
- Los colores se cambian en las variables de :root de src/styles.css, nunca sueltos.
- No reformatees, reordenes ni "mejores" código que no tenga que ver con lo que se pidió.
  El diff debe mostrar solo el cambio pedido.

## Git
- Mensajes de commit en español, una sola línea, diciendo qué cambió.
- Nunca uses push --force, reset --hard sobre algo ya subido, ni rebase. Nunca reescribas
  historial publicado.
- No cambies el remoto origin a menos que te lo pidan expresamente. Apunta al repositorio
  propio de la persona.
- Antes de cualquier cosa destructiva (descartar cambios, borrar archivos o ramas), di qué
  se va a perder y espera confirmación.
- Nunca escribas tokens ni contraseñas dentro de un archivo del proyecto. Un token solo
  puede aparecer en la configuración del remoto.

## Cómo ver la app
Ejecuta `npm install` (solo la primera vez) y luego `npm run dev`, y abre la dirección que
aparezca en el navegador. Si `npm` no existe, dile a la persona que hay que instalar Node.js.
