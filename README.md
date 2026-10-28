# Operación Supervivencia — Phaser 3

Shooter 2D de supervivencia con un soldado visto desde arriba y zombis que se acercan al jugador.

## Ejecutar
1. Extrae el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` con Live Server.
4. Se necesita internet para cargar Phaser 3 desde su CDN.

## Controles
- WASD o flechas: movimiento.
- Ratón: apuntar.
- Clic izquierdo: disparar.
- ENTER: iniciar o reiniciar desde los menús.

## Conceptos de diseño
- **Protagonista:** soldado con uniforme verde y rifle, reconocible por silueta y color. Los zombis tienen una silueta humanoide con cabeza, torso, brazos y piernas, en lugar de ser simples círculos.
- **Meta:** eliminar tantos zombis como sea posible y sobrevivir.
- **Acciones:** movimiento, apuntado y disparo.
- **Respuesta:** enemigos desaparecen al recibir impactos; puntos y salud se actualizan; la cámara tiembla brevemente al recibir daño.
- **Ciclo de juego:** observar amenazas, decidir hacia dónde moverse, disparar y evaluar la situación.
- **Reglas:** cada zombi eliminado suma uno al contador; el jugador comienza con tres puntos de salud; cada contacto con un zombi resta uno; al llegar a cero termina la partida.
- **Diseño del nivel:** escenario único de ciudad destruida, con asfalto gris agrietado, línea de carril desgastada, escombros, siluetas de edificios derrumbados, pequeños focos de fuego y barreras de hormigón.
- **HUD:** contador de zombis eliminados y salud siempre visibles en la parte superior.
- **Escenas:** Boot genera texturas; Menu explica el objetivo; Game contiene la lógica; End muestra el resultado y permite repetir.

El arte se dibuja con formas geométricas creadas en Phaser, sin archivos gráficos externos.
