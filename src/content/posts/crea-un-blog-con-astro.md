---
title: "Como crear un blog con astro"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeM_JBqeSGHevqWfSS1B3jKVv4MS5l3sMZQ&s"
description: "Aprende a construir un blog desde cero usando Astro, una herramienta ligera y poderosa para sitios estáticos..."
createdAt: 2024-10-27T18:32:27.610Z
updatedAt: 2024-10-27T18:32:27.610Z
publish: true
author: "Iván FX"
---

## Construye tu primer blog con Astro

### Paso 1: Configura tu proyecto Astro
1. Abre la consola de comandos en tu PC.
2. Navega a la carpeta donde deseas crear tu proyecto, por ejemplo:

   ```bash
   cd Escritorio
   ```

3. Ejecuta el siguiente comando para iniciar un nuevo proyecto con Astro:

   ```bash
   npm create astro@latest
   ```

4. Sigue las instrucciones en pantalla para instalar las dependencias iniciales y configurar tu proyecto.

### Paso 2: Configura el contenido de tu blog
1. En la carpeta `src` de tu proyecto, crea una carpeta llamada `content`. Aquí almacenarás todos los artículos de tu blog.
2. Dentro de la carpeta `content`, crea un archivo `config.ts`. Este archivo configurará las colecciones de datos (posts) que usará Astro en el blog.

   En `config.ts`, coloca el siguiente código:

   ```typescript
   import { z, defineCollection } from "astro:content";

   // Define una colección para los artículos del blog
   const postsCollection = defineCollection({
       type: 'content',
       schema: z.object({
         title: z.string(),
         pubDate: z.date(),
         description: z.string(),
         author: z.string(),
         image: z.object({
           url: z.string(),
           alt: z.string()
         }),
         tags: z.array(z.string())
       })
   });

   export const collections = {
     posts: postsCollection,
   };
   ```

### Paso 3: Crea tus artículos
1. En la carpeta `content`, crea una subcarpeta para tus artículos, por ejemplo, `posts`.
2. Dentro de esta subcarpeta, puedes crear tus artículos en formato `.md` o `.mdx`. Cada archivo de artículo debe incluir el contenido y los datos del esquema (`title`, `pubDate`, `description`, etc.) definidos en `config.ts`.

   Ejemplo de un archivo de artículo (`posts/primer-post.md`):

   ```markdown
   ---
   title: "Mi primer artículo en Astro"
   pubDate: 2024-10-27
   description: "Un artículo introductorio sobre cómo usar Astro."
   author: "Iván FX"
   image:
     url: "https://example.com/imagen.jpg"
     alt: "Descripción de la imagen"
   tags: ["Astro", "Blog"]
   ---

   ## Bienvenido a mi primer artículo
   ¡Este es el comienzo de un blog hecho con Astro!
   ```

### Paso 4: Configura tus rutas y plantillas
1. En la carpeta `src/pages`, crea una página para listar todos los posts, por ejemplo, `blog.astro`.
2. Dentro de `blog.astro`, usa el siguiente código para cargar y mostrar los posts:

   ```typescript
   ---
   import { getCollection } from 'astro:content';
   const posts = await getCollection('posts');
   ---

   <h1>Blog</h1>
   <ul>
     {posts.map((post) => (
       <li key={post.slug}>
         <a href={`/blog/${post.slug}`}>{post.data.title}</a>
         <p>{post.data.description}</p>
         <small>{post.data.pubDate}</small>
       </li>
     ))}
   </ul>
   ```

### Paso 5: Configura una plantilla para cada post
1. En `src/pages/blog`, crea un archivo `[slug].astro` que servirá como plantilla individual para cada artículo.
2. Utiliza el siguiente código para cargar y mostrar el contenido de cada artículo:

   ```typescript
   ---
   import { getEntry } from 'astro:content';
   const { slug } = Astro.params;
   const post = await getEntry('posts', slug);
   ---

   <h1>{post.data.title}</h1>
   <img src={post.data.image.url} alt={post.data.image.alt} />
   <p>{post.data.description}</p>
   <p>Autor: {post.data.author}</p>
   <p>Publicado en: {post.data.pubDate}</p>

   <article>
     {post.content}
   </article>
   ```

### Paso 6: Estilos y finalización
1. Aplica estilos CSS personalizados a tu blog o usa frameworks de estilo como TailwindCSS o Bootstrap para mejorar el diseño.
2. Revisa y ajusta los detalles finales, y ¡ya tendrás tu blog listo para publicar!

<div class="alert alert-primary" role="alert">
  <h6 class="alert-heading">Info</h6>
  <p class="mb-2">Parte del contenido de este artículo fue sacado de la documentación de astro</p>
  <hr>
  <a class="fw-semibold fs-sm" href="https://docs.astro.build/es/tutorials/add-content-collections/#c%C3%B3digo-de-construir-un-blog">Ir a la documentacion de astro</a>
</div>