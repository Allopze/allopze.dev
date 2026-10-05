# allopze

Sistema de diseño de allopze.dev, dirección **Nocturno editorial**. Allopze es la práctica de Alejandro: webs y sistemas a medida para empresas y profesionales en Chile. La página tiene un trabajo: que quien llega desde "Hecho por Allopze" en el sitio de un cliente entienda en cinco segundos quién eres, qué haces, que el trabajo es real y cómo escribirte.

## Principios

1. **Un fondo oscuro, un acento.** `surface` en toda la página, `accent` (menta) como único color. El acento marca: rótulos, énfasis, botón primario, foco. Nunca rellena áreas grandes.
2. **Serif para decir, sans para explicar, mono para rotular.** Newsreader en titulares, Geist en texto, Geist Mono en rótulos y metadatos.
3. **Líneas, no cajas.** Las secciones y filas se separan con una hairline (`line`, 1px). Sin tarjetas, sombras, gradientes, blur ni glassmorphism.
4. **El espacio es la jerarquía.** Mucho aire entre secciones (`section-gap`), poco dentro de un grupo.
5. **El trabajo es la prueba.** Proyectos reales con nombre de cliente. Nada de cifras infladas, logos ajenos ni testimonios inventados.

## Voz

- Primera persona singular y tuteo, español de Chile neutro: "Diseño y programo…", "Escríbeme".
- Frases cortas que dicen qué se hace, para quién y qué cambia.
- Sin superlativos ni jerga: nada de "soluciones integrales", "potenciamos tu negocio", "transformación digital".
- En los titulares, la cursiva en `accent` va sobre las 2 a 4 palabras finales y nunca en más de un lugar por bloque.

Ejemplos reales:

| Pieza | Texto |
| --- | --- |
| Rótulo del hero | WEBS Y SISTEMAS · CHILE |
| H1 | Construyo las webs y los sistemas que tu negocio usa *todos los días.* |
| Bajada | Soy Alejandro. Diseño y programo sitios web y sistemas a medida para empresas y profesionales, desde la primera conversación hasta que están funcionando. |
| Franja de referido | ¿Llegaste desde el sitio de un cliente? Ese sitio también lo hice yo. |
| Servicio | Cuando algo falla, hablas con quien lo construyó. |
| Cierre | ¿Tienes algo que ordenar? *Escríbeme.* |
| Footer | Hecho por Allopze, obviamente. |

## Color

Un solo tema, `nocturno`. Cada nota de token dice dónde es legible.

| Par | Contraste |
| --- | --- |
| `ink` sobre `surface` | 15.7:1 |
| `ink-soft` sobre `surface` | 11.2:1 |
| `ink-muted` sobre `surface` | 7.3:1 |
| `accent` sobre `surface` | 12.7:1 |
| `on-accent` sobre `accent` | 12.7:1 |
| `line-strong` sobre `surface` (bordes de control) | 3.5:1 |

`line` (1.4:1) y `flow-line` (1.9:1) son decorativos: nunca llevan información.

## Tipografía

- **Display**: Newsreader 400, con eje óptico. Cursiva solo para énfasis (`display-em`) y para la marca (`wordmark`).
- **Texto**: Geist 400 y 500.
- **Rótulos**: Geist Mono 400, en MAYÚSCULAS con `letter-spacing: 0.05em` (`eyebrow`, `nav`, `meta`). La numeración (`index`) va en dos dígitos: 01, 02…
- Los tamaños display son fluidos; cada estilo dice su `clamp()` en la nota.

## Maquetación

- Contenedor de `container-max` con `gutter` lateral. Secciones separadas por `section-gap`.
- Asimetría controlada: el texto toma el lado ancho (`flex: 999 1 600px`) y el elemento secundario el angosto (`flex: 1 1 340px`).
- Nada se apila con media queries: filas con `flex-wrap` y `flex-basis`, grillas con `repeat(auto-fit, minmax(260px, 1fr))`. A 390px todo cae en una columna sin scroll horizontal.
- Esquinas rectas en todo (`radius-0`). La única forma redondeada es el botón (`radius-pill`).

## Iconografía e imagen

- No hay set de íconos. Las flechas son caracteres de texto: → (acción), ↳ (nota), ↗ (sale del sitio).
- Sin emoji, sin fotos de stock, sin ilustraciones.
- Las capturas de proyectos son reales, planas y a sangre dentro de su columna, con borde `line` de 1px. Sin mockups de dispositivos ni sombras.
- El único elemento gráfico es el **campo de líneas** (FlowField): trazos `flow-line` con unas pocas hebras en `accent`. Solo en el hero.

## Movimiento

Casi nada. Transiciones de color de 150ms en botones y enlaces. Sin parallax, cursor personalizado, animaciones de scroll ni contadores. Si algún día el campo de líneas se anima, será lento y se detiene con `prefers-reduced-motion`.

## Accesibilidad

- Objetivos táctiles de 44px mínimo (botones de 48px).
- Foco visible: `focus-ring`, 2px sólido con 3px de separación.
- Enlaces reales (`<a href>`) y botones reales (`<button>`); el campo de líneas es `aria-hidden`.

## Componentes

Los componentes son clases CSS con prefijo `az-` en `components/bundle.css`, independientes de framework: Wordmark, Button, Nav, Hero, ReferralStrip, SectionHeader, WorkRow, ServiceItem, ProcessStep, ContactBlock, FlowField y Footer. Cada uno tiene su guía y su vista previa. Las fuentes se cargan desde Google Fonts en este sistema; en producción se recomienda servirlas desde el propio sitio.

## Archivos de este paquete

| Archivo | Qué es |
| --- | --- |
| `index.html` | Catálogo: abre este archivo en el navegador para ver todos los componentes |
| `tokens.json` | Tokens como datos (fuente de verdad) |
| `tokens.css` | Los mismos tokens como variables CSS (`--accent`, `--space-6`…) |
| `tailwind-theme.css` | Bloque `@theme` para Tailwind CSS v4 (`bg-surface`, `text-accent`, `font-display`, `text-display-lg`…) |
| `components/bundle.css` | Estilos de todos los componentes (clases `az-*`); requiere `tokens.css` antes |
| `components/<Componente>/README.md` | Guía de uso del componente |
| `components/<Componente>/preview.html` | Ejemplo del componente en HTML, abre solo |

Uso mínimo en HTML plano:

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<a class="az-btn az-btn--primary" href="#contacto">Escríbeme</a>
```

Las fuentes se cargan desde Google Fonts en `bundle.css` para que el paquete funcione sin instalar nada. En el sitio real, sírvelas desde el propio dominio (Fontsource) y quita esa línea `@import`.
