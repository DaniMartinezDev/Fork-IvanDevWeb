---
title: "Como empezar a programar en HTML"
createdAt: 2024-10-28T04:17:40.061Z 
updatedAt: 2024-10-28T04:17:40.061Z
topic: html
---

### Guía para empezar a programar en HTML

## ¿Qué es HTML?

**HTML (HyperText Markup Language)** es el lenguaje de marcado usado para estructurar y presentar contenido en la web. Es el fundamento de las páginas web y se utiliza para organizar textos, imágenes, enlaces, formularios, y mucho más.

## ¿Qué necesitas para empezar?

### 1. **Editor de texto**
   Puedes comenzar con un editor de texto sencillo o un editor de código más completo. Algunas opciones populares incluyen:
   - **Visual Studio Code** (VS Code) - Gratuito y fácil de usar.
   - **Atom** - Gratuito, personalizable y amigable para principiantes.
   - **Sublime Text** - Rápido y personalizable (versión gratuita limitada).
   - **Bloc de notas (Notepad)** o **TextEdit** - Para principiantes que solo necesiten algo básico.

### 2. **Un navegador web**
   Cualquier navegador puede mostrar páginas HTML. Algunos recomendados para desarrollo web son:
   - **Google Chrome**
   - **Mozilla Firefox**
   - **Microsoft Edge**

### 3. **Creación de un archivo HTML**
   Los archivos HTML se guardan con la extensión `.html`. Puedes crear un archivo nuevo con un nombre como `index.html`, que servirá como el punto de partida de la página web.

---

## Estructura básica de un documento HTML

Todo documento HTML tiene una estructura básica que incluye etiquetas específicas para darle un formato coherente. Aquí está el código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página HTML</title>
</head>
<body>
    <!-- Contenido va aquí -->
</body>
</html>
```

### Explicación de cada parte

- `<!DOCTYPE html>`: Le dice al navegador que estamos utilizando HTML5, la versión más reciente de HTML.
- `<html lang="es">`: Define el inicio del documento HTML y el idioma del contenido (`es` para español).
- `<head>`: Contiene la información sobre la página, como el título y las configuraciones de codificación.
- `<meta charset="UTF-8">`: Asegura que el documento pueda mostrar correctamente caracteres especiales.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Hace que la página sea responsive, adaptándose a distintos tamaños de pantalla.
- `<title>`: Define el título que se muestra en la pestaña del navegador.
- `<body>`: Contiene el contenido visible de la página.

---

## Ejemplo "¡Hola, Mundo!"

El siguiente código es un ejemplo básico que muestra el mensaje "¡Hola, Mundo!" en la página web:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>
<body>
    <h1>¡Hola, Mundo!</h1>
    <p>Este es mi primer sitio web en HTML.</p>
</body>
</html>
```

### Explicación del código

- `<h1>¡Hola, Mundo!</h1>`: Crea un título de nivel 1 (H1) con el texto "¡Hola, Mundo!".
- `<p>Este es mi primer sitio web en HTML.</p>`: Crea un párrafo con texto adicional.

### Visualización del archivo

1. Guarda el archivo como `hola_mundo.html`.
2. Abre el archivo en tu navegador (puedes hacer doble clic en el archivo o abrirlo directamente desde el navegador).
3. Deberías ver el mensaje "¡Hola, Mundo!" en la página.

## Preview
<img src="https://i.imgur.com/3cZtrnf.png" alt="Logo" class="img-fluid" style="width: 1000px; height: auto; object-fit: cover; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); border-radius: 12px;">

---

## Recursos adicionales

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/HTML): Una referencia completa para HTML.
- [W3Schools](https://www.w3schools.com/html/): Un sitio con tutoriales interactivos y ejemplos.

¡Ahora estás listo para comenzar a programar en HTML! 🎉