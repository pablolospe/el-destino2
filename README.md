# Astro & Tailwind CSS Starter Kit by lexingtonthemes.com
# License

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). Feel free to fork, modify, and use it in your projects.# License

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). Feel free to fork, modify, and use it in your projects.

## Need an attribution-free version?

Checkout [Lexington Themes](https://lexingtonthemes.com/) for free and premium multipage themes & UI Kits
For freelancers, developers, businesses, and personal use.
Beautifully crafted with Astro.js, and Tailwind CSS — Simple & easy to customise.

## This template is using Tailwind CSS V4

Now we are using only a CSS file. It's called `global.css` and it's located in the src/styles folder. Now we are eimporting Tailwind CSS on the same file instead of using the `tailwind.config.cjs` file. Like this:

```css
// Importing Tailwind CSS
@import "tailwindcss";
// Importing Tailwind plugins
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Then to add your styles you will use the @theme directive. Like this:

```css
@theme {
  /* Your CSS goes here, see how styles are written on the global.css file */
}
```

Remember this is just in Alpha version, so you can use it as you want. Just keep an eye on the changes that Tailwind CSS is going to make.
## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check Astros [documentation](https://docs.astro.build)

## Reglas para cargar libros (Posts)

Para mantener la consistencia y aprovechar el formato dinámico, seguí estas reglas al editar o crear nuevos posts en `src/content/posts`:

### 1. Formato de Bio y Descripción
Los campos `bio` y `description` en el **frontmatter** (entre las líneas `---`) ahora soportan **HTML**. Esto te permite usar:
- `<b>Negrita</b>`
- `<i>Itálica</i>` o `<em>Itálica</em>`
- `<br/>` para saltos de línea (usá `<br/><br/>` para separar párrafos).

**Ejemplo:**
```yaml
bio: "Nació en Buenos Aires.<br/><br/><b>Premios:</b> Ganador del concurso X."
```

### 2. Sin cuerpo de Markdown
**No escribas nada** después del segundo `---`. El contenido que antes iba en el cuerpo del archivo ahora se maneja directamente desde el campo `bio` del frontmatter para evitar duplicaciones.

### 3. Campo de Páginas
En el campo `pages`, solo ingresá el **número**. El sistema agrega automáticamente la palabra "páginas".
- **Bien:** `pages: "120"`
- **Mal:** `pages: "120 páginas"`

### 4. Imágenes
Aseguráse de que las rutas de las imágenes existan en `public/images/`.
- `image`: Tapa del libro.
- `portrait`: Foto del autor/a.
