---
title: "Añade comentarios de GitHub a tus articulos"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fTvBqEpyLmHNzZVx0YlKR5wOxFoLRAtZxA&s"
description: "Utterances es un sistema de comentarios ligero que utiliza los Issues de GitHub para gestionar comentarios en tu sitio web..."
createdAt: 2024-10-23T22:13:29.000Z
updatedAt: 2024-10-23T22:13:29.000Z
author: "Iván FX"
---
#### ¿Cómo puedo añadir comentarios de GitHub a mis artículos o cualquier código HTML, PHP y Astro usando Utterances?

**Utterances** es un sistema de comentarios ligero que utiliza los *Issues* de GitHub para gestionar comentarios en tu sitio web. Este enfoque permite que los comentarios se almacenan directamente en tu repositorio, facilitando la interacción entre tus lectores y el contenido. A continuación, te muestro cómo implementarlo y optimizarlo para tus necesidades.

## ¿Qué es Utterances?

Utterances es un sistema de comentarios basado en GitHub que permite a los usuarios dejar comentarios en tus páginas web. Cada comentario se almacena como un *Issue* en tu repositorio de GitHub, lo que significa que puedes administrar los comentarios con las mismas herramientas que utilizas para el código.

### Beneficios de Utterances

- **Sin Costos**: Utterances es gratuito y no requiere servidores ni bases de datos adicionales.
- **Fácil Integración**: Solo necesitas un poco de código JavaScript para empezar.
- **Transparente**: Los comentarios se gestionan a través de GitHub, lo que permite a los usuarios ver la conversación y el contexto.
- **Compatible con GitHub**: Muchos desarrolladores ya están familiarizados con GitHub, lo que facilita su uso.

## Pasos para Implementar Utterances

### 1. Crear un Repositorio en GitHub

Si no tienes uno, crea un nuevo repositorio en GitHub donde puedas alojar tus proyectos.

- **Nombre del Repositorio**: Elige un nombre descriptivo.
- **Habilitar Issues**: Asegúrate de que la opción de *Issues* esté habilitada en la configuración del repositorio.

### 2. Configurar Utterances

Ve a la página de [Utterances](https://utteranc.es/) y configura tu implementación:

- **Repository**: Especifica el repositorio donde se guardarán los comentarios (por ejemplo, `tu_usuario/tu_repositorio`).
- **Issue term**: Escoge cómo se identificarán las discusiones de comentarios. Puedes utilizar:
  - `title`: Usa el título de la página como nombre del *Issue*.
  - `url`: Usa la URL de la página como identificador.
- **Label**: Opcionalmente, puedes establecer etiquetas para los *Issues* creados. Por ejemplo, "comentarios" para filtrar fácilmente.

Una vez que hayas configurado Utterances, recibirás un código de inserción.

### 3. Añadir el Código a tu HTML

Inserta el siguiente código en el lugar donde deseas que aparezcan los comentarios (por ejemplo, al final de tu artículo):

```html
<script src="https://utteranc.es/client.js"
        repo="tu_usuario/tu_repositorio"
        issue-term="title"  <!-- Cambiar a "url" si prefieres usar la URL -->
        theme="github-light" <!-- Cambia a "github-dark" para tema oscuro -->
        crossorigin="anonymous"
        async>
</script>
```

### 4. Integración en HTML, PHP y Astro

#### HTML

Simplemente agrega el script de Utterances en el HTML de tu artículo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Artículo</title>
</head>
<body>
    <h1>Título del Artículo</h1>
    <p>Contenido de tu artículo aquí...</p>

    <!-- Añadir Utterances -->
    <div id="utterances"></div>
    <script src="https://utteranc.es/client.js"
            repo="tu_usuario/tu_repositorio"
            issue-term="title"
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
</body>
</html>
```

#### PHP

Si estás usando PHP para generar el contenido, asegúrate de incluir el script de Utterances en el lugar correcto de tu plantilla:

```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
</head>
<body>
    <h1><?php echo $titulo; ?></h1>
    <p><?php echo $contenido; ?></p>

    <!-- Añadir Utterances -->
    <div id="utterances"></div>
    <script src="https://utteranc.es/client.js"
            repo="tu_usuario/tu_repositorio"
            issue-term="title"
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
</body>
</html>
```

#### Astro

Para integrar Utterances en un proyecto de Astro, puedes hacerlo dentro de un componente:

```jsx
---
const Utterances = () => (
    <div id="utterances"></div>
);

export default Utterances;
---

<Utterances />
<script src="https://utteranc.es/client.js"
        repo="tu_usuario/tu_repositorio"
        issue-term="title"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```
### Preview
<img src="https://i.imgur.com/1UO2GpE.png" alt="Logo" class="img-fluid" style="width: 1000px; height: auto; object-fit: cover;">

### 5. Personalización

Puedes personalizar el tema de Utterances utilizando la opción `theme`. Los temas disponibles son:

- `github-light` para un tema claro.
- `github-dark` para un tema oscuro.
- `preferred-color-scheme` para que el tema se adapte automáticamente al esquema de color del usuario (claro u oscuro).

Además, puedes ajustar la visibilidad de los comentarios según tus necesidades, como habilitar o deshabilitar la posibilidad de comentar.

## Uso y Moderación

Una vez que hayas implementado Utterances, tus lectores podrán dejar comentarios en tus artículos. Aquí hay algunas recomendaciones para gestionar los comentarios:

- **Moderación**: Revisa periódicamente los comentarios y elimina los inapropiados. Puedes hacerlo directamente desde la sección de *Issues* de tu repositorio.
- **Respuestas**: Fomenta la interacción respondiendo a los comentarios. Esto puede ayudar a construir una comunidad en torno a tu contenido.
- **Etiquetas**: Usa etiquetas para categorizar los comentarios y hacer más fácil su gestión.

## Conclusión

Utilizar Utterances es una forma efectiva y simple de añadir un sistema de comentarios a tus artículos. Al aprovechar los *Issues* de GitHub, puedes gestionar comentarios de manera eficiente y mantener una interacción activa con tus lectores. Además, la transparencia y la familiaridad de GitHub como plataforma mejoran la experiencia del usuario. ¡Empieza hoy a integrar Utterances en tu sitio web y observa cómo crece la interacción!

### Detalles Agregados:

1. **Descripción de Utterances**: Explicación sobre qué es Utterances y sus beneficios.
2. **Pasos Detallados**: Instrucciones más claras para la configuración y uso, incluyendo opciones de personalización.
3. **Moderación y Uso**: Consejos sobre cómo moderar y gestionar los comentarios.
4. **Ejemplos de Código**: Ejemplos de implementación en HTML, PHP y Astro.

Esto debería proporcionar una guía completa para integrar comentarios de GitHub utilizando Utterances en cualquier proyecto. ¡Espero que te sea útil!

<div class="alert alert-primary" role="alert">
  <div class="d-flex gap-4">
    <span><i class="bi bi-info-circle-fill"></i></i></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">Info</h6>
      <p class="mb-0">Parte del contenido de este artículo fue generado por IA</p>
    </div>
  </div>
</div>