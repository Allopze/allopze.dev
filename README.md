# allopze.dev

Sitio estático de la práctica freelance de Alejandro, construido con Astro, TypeScript estricto y Tailwind CSS v4. La dirección visual es **Nocturno editorial**: Newsreader para titulares, Geist para lectura y Geist Mono para rótulos; una paleta oscura con un solo acento menta, separadores de 1 px y casi nada de movimiento.

El campo de líneas del hero se calcula en el frontmatter de Astro al compilar. Las hebras menta se desplazan lentamente con CSS; el movimiento se desactiva con `prefers-reduced-motion`. La franja de referido usa un script inline pequeño que valida `?desde=` contra `referrals` y actualiza el texto con `textContent`.
La hoja de estilos se incluye en el HTML estático para quitar la petición bloqueante de CSS; las fuentes permanecen como archivos locales separados.

## Desarrollo y compilación

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` ejecuta primero `astro check` y luego compila el sitio en `dist/`. El proyecto no usa un adaptador SSR.
Usa Node.js 22.12 o posterior.

## Cloudflare Pages

En la configuración de Pages, usa:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** la raíz de este repositorio
- **Framework preset:** Astro (o configuración personalizada para un sitio estático)
- **Node.js:** 22.12 o posterior; si la imagen de Pages no cumple el mínimo, fija `NODE_VERSION` en la configuración de build.

No se necesita un adaptador ni un comando de funciones. Las fuentes y páginas se sirven desde el mismo dominio.

## Datos pendientes

- Publicar en Cloudflare Pages, enlazar `allopze.dev` y comprobar la vista previa social servida desde el dominio.

## Referidos desde sitios de clientes

Usa un slug por cliente, igual a una llave de `referrals` en `src/config.ts`. El enlace del footer del sitio de cada cliente debe verse así:

```html
<a href="https://allopze.dev/?desde=chome" rel="noopener">Hecho por Allopze</a>
```

Slugs configurados: `chome`, `neltume` y `hidromont`. Slugs desconocidos y valores manipulados conservan el texto por defecto.

## Decisiones simples

- Las páginas de proyecto muestran el contenido y las imágenes disponibles; ocultan el contenido editorial vacío y las filas de año o enlace que no tienen datos confirmados.
- Cada proyecto indica 2026 y reemplaza los apartados de problema, solución y resultado por una lista «Qué incluye», basada en capturas o contenido visible en el sitio público.
- Los cinco casos se generan desde una única fuente (`src/data/projects.ts`) y se publican con barra final, de acuerdo con las rutas estáticas de Astro.
- `public/og.png` es la propuesta editorial generada para compartir el sitio; los metadatos Open Graph y Twitter ya apuntan a ella.
- El favicon SVG usa Newsreader italic si está disponible y Georgia como fallback.
- Las tipografías se sirven localmente desde artefactos Fontsource. Sus licencias Open Font License acompañan a los archivos en `public/fonts/`.
