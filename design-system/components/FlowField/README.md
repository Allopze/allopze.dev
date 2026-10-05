# FlowField

El campo de líneas: el único elemento gráfico del sistema, cientos de trazos cortos que siguen un campo de ángulos, con unas pocas hebras largas en `accent`.

- Un `<svg class="az-flow" viewBox="0 0 520 560" aria-hidden="true">` con dos `<path>`: `az-flow__base` (220 hebras de 14 pasos, `flow-line`) y `az-flow__accent` (14 hebras de 30 pasos, `accent`).
- Determinista: semillas fijas (12345 y 987), así se ve igual en cada carga. En producción el `d` se calcula al compilar, no en el navegador.
- Algoritmo: generador Lehmer (`s = s * 16807 % 2147483647`); punto inicial aleatorio en 560×600 desplazado −20; en cada paso `a = sin(x·0.011)·1.4 + cos(y·0.013)·1.3 + sin((x−y)·0.006)·0.8`, avanza 6px en dirección `a`.
- Solo en el hero. Estático por defecto; si se anima, debe detenerse con `prefers-reduced-motion`.
