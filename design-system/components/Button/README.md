# Button

Píldora de 48px de alto, la única forma redondeada del sistema.

- `az-btn az-btn--primary`: relleno `accent`, texto `on-accent`. Una sola acción primaria por bloque ("Escríbeme", "Escribir por correo →").
- `az-btn az-btn--ghost`: borde y texto `ink`. Acción secundaria ("Ver trabajo", "WhatsApp →").
- Al pasar el cursor ambos se rellenan de `ink` con texto `on-accent`.
- Agrupar con `az-actions` (gap `space-3`, se envuelve en móvil).
- Si navega, es `<a href>`; si envía un formulario, `<button>`. Flecha → solo cuando la acción sale de la página o abre otra app.
