# WorkRow

Una fila del índice de trabajos: número, título serif, cliente y tipo; no es una tarjeta.

- `ul.az-worklist > li.az-work` con `span.az-work__n` (01…), `a.az-work__title` (enlace al caso), `span.az-work__client`, `span.az-work__type` (WEB o SISTEMA).
- Filas separadas por hairline `line`; la lista cierra con una hairline inferior.
- Orden: primero los sistemas, después las webs.
- El título describe lo construido ("Cotizador automático desde correo y WhatsApp"), no el nombre del cliente.
- Al pasar el cursor, el título se subraya en `accent`. Sin miniaturas en el índice: las capturas van en la página del caso.
