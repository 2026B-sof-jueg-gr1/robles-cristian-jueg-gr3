# Operación Supervivencia — Protocolo Sector 04

Shooter 2D de supervivencia hecho con **Phaser 3**. Un guardia de seguridad, tres puntos de salud
y ningún relevo. Corre en el navegador, sin descargas ni instalación.

- **Landing page:** https://2026b-sof-jueg-gr1.github.io/robles-cristian-jueg-gr3/
- **Jugar directo:** https://2026b-sof-jueg-gr1.github.io/robles-cristian-jueg-gr3/operacion_supervivencia/

---

## Estructura del repositorio

```
.
├── index.html                      Landing page inmersiva (terminal de contención)
├── operacion_supervivencia/
│   ├── index.html                  El juego (Phaser 3, todo en un archivo)
│   └── README.md                   Documento de diseño del juego
├── press/
│   ├── cover.html                  Portada dibujada con HTML + SVG
│   ├── cover-630x500.png           Portada lista para itch.io
│   └── render-cover.js             Exporta la portada a PNG
├── .github/workflows/
│   └── publish-itch.yml            CI/CD: publica en itch.io con Butler
├── LICENSE                         MIT
└── README.md                       Este archivo
```

`index.html` en la raíz es el "menú de inicio"; el juego vive en la subcarpeta y se abre con el
botón **JUGAR**. Los enlaces son relativos, así que funciona igual en GitHub Pages, en local con
Live Server o dentro de un iframe en itch.io.

---

## Ejecutar en local

1. Abre la carpeta en Visual Studio Code.
2. Clic derecho sobre `index.html` → **Open with Live Server** (puerto 5501 según `.vscode/settings.json`).
3. Navega a `http://127.0.0.1:5501/`.

> Se necesita internet: Phaser 3 se carga desde su CDN.

## Controles

| Acción | Tecla |
| --- | --- |
| Mover | `W A S D` o flechas |
| Apuntar | Ratón |
| Disparar | Clic izquierdo |
| Iniciar / reintentar | `ENTER` |

---

## Misión 1 — El alma del juego

**Logline.** El turno de noche más largo de la historia: un operador de contención, armado con un
rifle reglamentario y tres latidos de salud, debe sostener el Sector 04 hasta que llegue el relevo.
El relevo no existe.

**Resonancia ludonarrativa.** La mecánica principal no ilustra la historia: *es* la historia. Tres
puntos de salud sin botiquines ni guardado convierten cada decisión en una decisión real, y obligan
al jugador a leer el espacio antes de moverse. Lo que se aprende es procedimental —priorizar
amenazas, gestionar un recurso escaso, decidir con información incompleta— y no se puede memorizar:
solo se aprende jugando, fallando y repitiendo. Es el mismo bucle del desarrollo de software
(observar → decidir → ejecutar → evaluar), con la diferencia de que aquí el *bug* te muerde.

---

## Misión 2 — Legal y ético

Clasificaciones **creativas** (ejercicio del taller, no certificaciones oficiales):

- **ESRB E10+** — violencia de dibujos animados contra polígonos. Cero sangre, cero cuerpos.
- **PEGI 7** — violencia no realista. Los infectados son formas geométricas.

Compromisos reales del proyecto:

- **Sin datos personales.** Ni cookies, ni analítica, ni formularios, ni rastreadores.
- **Sin monetización.** Sin anuncios, sin cajas de botín, sin pases de temporada.
- **Código abierto** bajo licencia MIT (ver [`LICENSE`](LICENSE)).

### Muro de Honor

El juego **no usa arte ni audio de terceros**: todo se dibuja por código con la API `Graphics` de
Phaser en tiempo de ejecución. Las obras libres que sí se usan:

| Obra | Autoría | Licencia |
| --- | --- | --- |
| Phaser 3.80.1 | Photon Storm | MIT |
| Share Tech Mono | Carrois Apostrophe | SIL OFL 1.1 |
| VT323 | Peter Hull | SIL OFL 1.1 |

Si en el futuro se incorpora arte o sonido CC0/CC-BY, se registra en esa tabla **antes** de publicar.

---

## Misión 3 — Despliegue en GitHub Pages

El sitio está publicado desde la rama `main`, carpeta raíz:

> **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `/ (root)`**

Cada `push` a `main` republica el sitio automáticamente (1–2 minutos). No hay paso de build porque
todo es HTML estático.

**URL:** https://2026b-sof-jueg-gr1.github.io/robles-cristian-jueg-gr3/

---

## Misión 4 — Plataforma indie: itch.io

Elegimos **itch.io** por tres razones concretas: es el estándar de facto para juegos HTML5, permite
subir builds desde la línea de comandos con **Butler** (lo que hace posible el CI/CD) y no cobra por
publicar. Game Jolt y Newgrounds tienen mejores comunidades para fandoms, pero su automatización es
más frágil.

### Publicar a mano (primera vez)

1. Crea la cuenta y el estudio en <https://itch.io> → **Dashboard → Create new project**.
2. Título: `Operación Supervivencia` · Proyecto/URL: `operacion-supervivencia`.
3. **Kind of project:** `HTML` · **Pricing:** `No payments`.
4. Sube `operacion_supervivencia/` comprimido en ZIP con `index.html` **en la raíz del ZIP**.
5. Marca **"This file will be played in the browser"** y elige `Embed in page`, 800×600, `Manually
   set the viewport` desactivado.
6. Guarda como **Draft** y revisa la vista previa antes de publicar.

### Publicar con Butler (CLI)

```bash
# 1. Instalar
curl -L -o butler.zip https://broth.itch.ovh/butler/windows-amd64/LATEST/archive/default
unzip butler.zip && ./butler.exe version

# 2. Autenticarse (abre el navegador una vez)
butler login

# 3. Empaquetar y subir
cd operacion_supervivencia && zip -r ../build.zip . -x '*.md' && cd ..
butler push build.zip USUARIO/operacion-supervivencia:html --userversion 1.0.0
```

### Portada y ficha listas para pegar

La portada también está dibujada por código (HTML + SVG), no es una imagen generada: mantiene la
paleta y las formas exactas del juego.

| Recurso | Archivo |
| --- | --- |
| Portada 630×500 (1260×1000 px reales) | `press/cover-630x500.png` |
| Fuente editable | `press/cover.html` |
| Exportador | `node press/render-cover.js` |

Texto para el formulario de **Create new project**:

- **Title:** `Operación Supervivencia`
- **Short description / tagline:** `Tres puntos de salud. Cero relevos. Un shooter de supervivencia
  en el navegador donde el cambio de turno nunca llega.`
- **Genre:** `Shooter` · **Tags:** `survival`, `top-down`, `zombies`, `html5`, `phaser`, `singleplayer`, `short`
- **Classification:** `HTML` · **Pricing:** `No payments` · **Platforms:** `HTML5`
- **Embed:** 800×600, `Embed in page`, sin scrollbars
- **Description:** pega la sección *Misión 1* de este README (logline + resonancia) y añade los
  controles. Es el mismo texto que la landing, así que la voz se mantiene.

---

## Misión legendaria — CI/CD con GitHub Actions

El workflow [`.github/workflows/publish-itch.yml`](.github/workflows/publish-itch.yml) empaqueta el
juego y lo publica en itch.io en cada `push` a `main` que toque `operacion_supervivencia/`.

```
git push  →  GitHub Actions  →  Butler CLI  →  itch.io
```

Incluye una comprobación previa: si los secretos todavía no están configurados, la ejecución termina
en verde con un aviso en el resumen en lugar de fallar. Así el repositorio no acumula cruces rojas
mientras se termina de configurar la cuenta.

### Activarlo (una sola vez)

1. `butler login` y copia el contenido de `~/.config/itch/butler_creds`
   (en Windows: `%USERPROFILE%\.config\itch\butler_creds`).
2. En GitHub: **Settings → Secrets and variables → Actions → New repository secret**.

   | Secreto | Valor |
   | --- | --- |
   | `BUTLER_CREDENTIALS` | contenido completo del archivo `butler_creds` |
   | `ITCH_USER` | tu usuario de itch.io |
   | `ITCH_GAME` | `operacion-supervivencia` (la URL del proyecto) |

3. Haz un `push` que modifique el juego, o lánzalo a mano desde **Actions → Publicar en itch.io →
   Run workflow**.
4. El número de ejecución (`github.run_number`) se usa como versión del build: siempre sabes qué
   commit está en línea.

> **Nota:** Butler exige que el proyecto exista en itch.io antes del primer `push`. Crea la página
> (aunque sea en borrador) primero.

### Si prefieres GitHub Pages servido por Actions

La publicación actual usa la rama `main` directamente, que es más simple y no necesita build. Si
quieres migrar a un workflow, cambia en **Settings → Pages → Source** a `GitHub Actions` y añade un
job con `actions/upload-pages-artifact` + `actions/deploy-pages`. No se incluye por defecto para no
romper la publicación que ya funciona.

---

## Créditos

Diseño, código y narrativa: **Cristian Robles**. Motor: **Phaser 3** (MIT, Photon Storm).
Licencia del proyecto: **MIT**.
