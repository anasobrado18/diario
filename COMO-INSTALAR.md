# Cómo poner el Diario en tu iPhone

## 1. Subir los archivos a GitHub

1. Entra en github.com con tu cuenta y crea un repositorio nuevo, por ejemplo `diario`.
2. Márcalo como **Public** (Pages gratis solo funciona con repos públicos).
3. En el repo, pulsa **Add file → Upload files** y arrastra estos archivos:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-512-maskable.png`
   - `apple-touch-icon.png`
4. Pulsa **Commit changes**.

## 2. Activar GitHub Pages

1. En el repo, ve a **Settings → Pages**.
2. En *Source*, elige **Deploy from a branch**.
3. Branch: `main`, carpeta: `/ (root)`. Guarda.
4. Espera 1–2 minutos. Te dará una dirección tipo:
   `https://anasobrado18.github.io/diario/`

## 3. Instalarla en el iPhone

1. Abre esa dirección **en Safari** (importante: en Safari, no en Chrome).
2. Pulsa el botón de **Compartir** (el cuadrado con la flecha).
3. Baja y elige **Añadir a pantalla de inicio**.
4. Ponle el nombre que quieras y pulsa **Añadir**.

Ya tienes el icono en la pantalla de inicio. Al abrirlo se ve a pantalla
completa, sin barra de navegador, y funciona sin conexión.

---

## Sobre tus datos

- Todo lo que registras se guarda **solo en tu iPhone**. No se envía a ningún
  servidor, ni a GitHub, ni a nadie.
- Lo que está en GitHub es únicamente el código de la app, que no contiene
  ningún dato tuyo.
- Si borras la app de la pantalla de inicio, se borran también los datos.
  Exporta una copia antes desde **Ajustes → Exportar mis datos**.
- Conviene exportar una copia de vez en cuando (una vez al mes va sobrado) y
  guardarla donde tú quieras.

## Si quieres que el código no sea público

GitHub Pages con repo privado necesita plan de pago. Alternativa gratuita:
**Netlify Drop** (netlify.com/drop) — arrastras la carpeta y te da una URL
con HTTPS, sin que el código quede expuesto en un repo público.
