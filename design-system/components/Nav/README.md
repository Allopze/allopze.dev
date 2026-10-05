# Nav

Barra superior: marca a la izquierda, cuatro enlaces mono a la derecha; sin fondo, sin borde, no fija.

- Estructura: `header.az-wrap > div.az-nav > a.az-wordmark + nav[aria-label="Principal"] > ul.az-nav__links > li > a.az-nav__link`.
- Enlaces: Trabajo, Servicios, Proceso, Contacto. Inactivos en `ink-muted`; la página actual lleva `aria-current="page"` y va en `ink`.
- En móvil los enlaces bajan a una segunda línea por `flex-wrap`; no hay menú hamburguesa.
