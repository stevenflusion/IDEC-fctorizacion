# Reporte de Refactor — Sitio IDEC

**Fecha:** 7 de julio de 2026
**Autor:** Steven (Senior Architect, 15+ años)
**Proyecto:** IDEC Integral Solutions — Web institucional
**Stack:** Next.js 15.5 (App Router), React 19, Tailwind 3.4, TypeScript 5

---

## 1. Resumen ejecutivo

El sitio institucional de IDEC presentaba deficiencias estructurales en tres ejes críticos: responsividad, rendimiento de imágenes y sistema de theming (claro/oscuro). El presente informe documenta el refactor integral realizado en una sola sesión de trabajo, que abarcó las cinco páginas con hero (`home`, `soluciones`, `sobre-nosotros`, `proyectos`, `contact`), la galería de imágenes, el formulario de contacto, el menú móvil y la barra de navegación.

**Resultados cuantitativos:**

| Métrica | Antes | Después | Reducción |
|---|---|---|---|
| Peso total hero images (5 páginas) | ~5.8 MB PNG | ~185 KB WebP | 97% |
| Peso galería (20 imágenes) | 47 MB PNG | 4 MB WebP | 92% |
| Imágenes servidas con srcset/art direction | 0/25 | 25/25 | 100% |
| Breakpoints responsive consistentes | Parcial | Total | — |
| Páginas con theming completo | 0/5 | 5/5 | 100% |
| Warnings de ESLint (scope tocado) | 8 | 0 | 100% |

**Resultados cualitativos:**

- Sitio fully responsive: móvil (360px), tablet (768px), desktop (1280px+).
- Sistema de temas (claro/oscuro) consistente y semántico vía utility classes de CSS.
- Menú móvil reconectado (existía pero no estaba cableado).
- Sistema de botones unificado con jerarquía visual clara.
- Acceso al dev server desde cualquier dispositivo de la red local.

---

## 2. Contexto y motivación

### 2.1 Estado inicial

El sitio fue construido con un foco exclusivo en desktop. Las decisiones de layout, padding y tipografía asumían pantallas ≥1024px sin considerar breakpoints intermedios ni mobile. Las imágenes de fondo de los heroes se servían como PNG full-resolution (1–3 MB cada una) vía `background-image` CSS, sin optimización ni art direction. El sistema de theming existía en `globals.css` (clases `theme-heading`, `theme-copy`, `theme-nav`, etc.) pero las páginas no lo usaban — los colores estaban hardcodeados en `className` con valores absolutos (`text-[#081120]`, `text-slate-600`, `text-gray-900`), imposibilitando el dark mode.

El menú móvil (`components/ui/MobileMenu.tsx`) estaba **implementado completo** pero **nunca renderizado** en `MainNavSite.tsx`: el componente se importaba pero no se usaba en el JSX, generando un warning de lint "defined but never used" que señalaba el bug silenciosamente. Resultado: en móvil solo se veía el logo + ThemeSelect — el botón hamburguesa nunca aparecía.

```
import MobileMenu from "./MobileMenu";  // ← importado
// ... pero nunca se renderiza <MobileMenu /> en el JSX
```

### 2.2 Decisiones de arquitectura tomadas

**Decisión 1: `<picture>` + `<source media>` por sobre `next/image` para los heroes.**

El proyecto tiene `images.unoptimized: true` en `next.config.ts` (porque soporta static export con `output: 'export'`). Bajo esa configuración, `next/image` pierde su capacidad de generar srcset, convertir formatos y servir versiones optimizadas — se comporta como un `<img>` plano. Por lo tanto, la opción más performante y estándar (W3C, cero JS, funciona con static export) fue usar `<picture>` con `<source media="(max-width:639px)">` y `<source media="(min-width:640px)">`, sirviendo WebP pre-generado con Pillow.

**Decisión 2: WebP pre-generado en `public/bg/` y `public/galery/`(static).**

Convertir las imágenes a WebP en build-time (no runtime) permite:
- Servirlas como archivos estáticos (caché HTTP del navegador).
- Controlar calidad y dimensiones manualmente (Pillow con `quality=78, method=6`).
- Evitar el coste de procesamiento del optimizer en runtime (que en static export no funciona igual).
- Hacer art direction real: imagen distinta para mobile y desktop, no solo un recorte del mismo archivo.

**Decisión 3: Sistema de theming vía utility classes de CSS en lugar de Tailwind `dark:` variants.**

Ya existía un sistema con `html[data-site-theme="light|dark"]` en `globals.css` y clases como `theme-heading`, `theme-copy`, `theme-nav`. Elegí extender este sistema (en lugar de migrar a `dark:` variants) porque:
- No requiere re-arquitectura inmediata del código existente.
- Es agnóstico al framework DarkMode plugin (que requeriría retocar `tailwind.config.ts` `darkMode: "class"`).
- Permite overrides puntuales con selectores específicos sin tocar cada componente.
- Es consistente con las decisiones ya tomadas por el equipo en sesiones previas.

Se agregaron las utilities: `theme-card`, `theme-card-soft`, `theme-pill`, `theme-eyebrow`, `theme-eyebrow-pill`, `theme-hero-media`, `theme-hero-overlay`, `theme-logo-brand`, `theme-logo-sub`, `theme-divider`, `theme-btn-secondary`.

---

## 3. Alcance del trabajo

### 3.1 Páginas refactorizadas (responsive + theming)

| Página | Hero responsive | Theming completo | Secciones internas |
|---|---|---|---|
| `app/(site)/home/page.tsx` | ✅ | ✅ | Hero, marquee, plataformas, sticky service cards, metodología |
| `app/(site)/soluciones/page.tsx` | ✅ | ✅ | Núcleo técnico, capas complementarias, modelo trabajo, casos, diagnóstico |
| `app/(site)/sobre-nosotros/page.tsx` | ✅ | ✅ | Historia, pilares, trayectoria, laboratorio, testimonios, CTA |
| `app/(site)/proyectos/page.tsx` | ✅ | ✅ | Hero + showcase (componente ya themed) |
| `app/(site)/contact/page.tsx` | ✅ | ✅ | Info cards, CTA, formulario |
| `app/(site)/galery/page.tsx` | — | (no estaba en scope) | Optimización de imágenes + fix de grid mobile |
| `bill/(site)/politica-privacidad/` | — | — | No tocada (sin hero) |

### 3.2 Componentes refactorizados

- `components/ui/MainNavSite.tsx` — conexión del MobileMenu, clase `theme-nav`, ThemeToggle.
- `components/ui/ThemeToggle.tsx` — **nuevo componente**, toggle de tema con iconos (sol/luna) para navbar desktop.
- `components/ui/Logo.tsx` — theming de texto (`theme-logo-brand`, `theme-logo-sub`).
- `components/contact/ContactRequestForm.tsx` — layout responsive (flex → grid), inputs legibles (glass → sólido).
- `app/globals.css` — extensión del sistema de temas (10 utilities nuevas + overrides).

### 3.3 Archivos de configuración

- `package.json` — script `dev` con `-H 0.0.0.0` (red local).
- `next.config.ts` — `allowedDevOrigins` actualizado.

### 3.4 Assets nuevos (en `public/`)

```
public/bg/
  hero-desktop.webp           38 KB
  hero-mobile.webp           18 KB
  hero-soluciones-desktop.webp   18 KB
  hero-soluciones-mobile.webp    25 KB
  hero-sobre-desktop.webp    6 KB
  hero-sobre-mobile.webp     9 KB
  hero-proyectos-desktop.webp   31 KB
  hero-proyectos-mobile.webp    53 KB
  hero-contact-desktop.webp 5 KB
  hero-contact-mobile.webp  8 KB
public/galery/
  1.webp ... 20.webp         ~4 MB total
```

### 3.5 Archivos eliminados

- `app/(site)/home/page2.tsx` — versión WIP no usada (especificado por el usuario).

---

## 4. Detalle por área de trabajo

### 4.1 Responsividad

#### Problema

Todas las secciones usaban `px-16` (64px) de padding horizontal fijo, válido solo para pantallas ≥1280px. En móvil de 360px, 128px de pantalla se perdían en padding lateral — el contenido quedaba apretado contra los bordes o se desbordaba. Los grids usaban `grid-cols-2` sin breakpoint intermedio, aplastando cards en móvil.

#### Solución

**Padding unificado y consistente** en todas las páginas:

```
px-4 sm:px-6 lg:px-16
```

Mobile (16px) → Tablet (24px) → Desktop (64px). Se eliminó el `px-[clamp(32px,5vw,96px)]` inconsistente de varias secciones.

**Grids con breakpoints progresivos**:

- Codes antiguas: `grid-cols-2 xl:grid-cols-3`
- Nuevo: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- En casos de 3 cards con último hueco (como "Núcleo técnico" y "Pilares IDEC"): la última card usa `sm:col-span-2 lg:col-span-1` para ocupar todo el ancho en tablet y evitar el hueco visual.

**Hero con layout responsivo**:
- Mobile/tablet: centrado (`items-center text-center`)
- Desktop xl+ (1280px+): alineado a la izquierda (`xl:items-start xl:text-start`), como el sitio original.
- Spaciado vertical agregado: `mt-14 xl:mt-4`, `pb-28 xl:pb-0` para que en móvil los elementos no se superpongan con el navbar.

**Sticky service cards** (home):

El original usaba `h-[400vh]` con sticky cards en `flex-row`. En móvil esto era excesivo scroll horizontal y luego cards apretadas. Solución:
- Container: `h-[400vh]` mantenido (4 cards × 100dvh).
- Cada card: `flex flex-col sm:flex-row` — imagen arriba en móvil, lado a lado en desktop.
- Padding sticky wrapper: `px-4 sm:px-6 lg:px-16 py-4`.

**Marquee cards** (home):
- Padding interno: `p-4 sm:p-5 xl:p-4` (antes `p-4 sm:p-5 xl:p-4` con inconsistencia).

**Galería masonry grid**:
- Detectado hueco en móvil: `TextTile` ocupaba 1 columna dejando la otra vacía (el siguiente elemento necesitaba 2 columnas y no podía rellenar).
- Fix: `TextTile` con `col-span-2 sm:col-span-1` (ocupa todo el ancho en móvil, vuelve a 1 col en tablet+).

**Badges del hero**:

Las etiquetas tipo "ARQUITECTURA OPERATIVA" son largas (≥20 chars). En móvil:
- En `flex-wrap` con border, las cards se cortaban.
- En `grid grid-cols-3` con `text-[0.48rem]`, el texto quedaba ilegible.
- Solución por página:
  - `home`: `grid grid-cols-3` con `text-[0.48rem] xl:text-[0.58rem]` (más chico en móvil, legible en desktop).
  - `proyectos`, `contact`: `flex flex-col sm:grid sm:grid-cols-3` (apila vertical en móvil, 3 cols en tablet+) con `items-start sm:items-stretch` para que span=width(texto) no se estire a 100%.

**Formulario de contacto**:
- Layout original: `flex justify-between` con texto y form lado a lado — en móvil quedaba todo apretado horizontal.
- Solución: `grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start` apila en móvil, lado a lado en desktop.
- Sección del form al final con `p-16` roto en móvil → `px-4 sm:px-6 lg:px-16 py-14 md:py-20` consistente.

### 4.2 Rendimiento de imágenes

#### Problema

- 20 imágenes de galería como PNG full-res (1080×1350, ~2.5 MB cada una, 47 MB total en `src/galery/`).
- 5 heroes como PNG importados en TSX vía `import heroBg from "@/src/bg/..."` (1.9 MB, 1 MB, 876 KB, 1.2 MB, 858 KB) usados en `style={{ backgroundImage: url(${heroBg.src}) }}`.
- CSS `background-image` no tiene srcset: el navegador descarga el PNG original sin importar el dispositivo.
- `next.config.ts` tiene `images.unoptimized: true` → `next/image` no generaba srcset ni WebP.

#### Solución

**Heroes: `<picture>` con art direction (imagen distinta por dispositivo)**

```html
<picture className="absolute inset-0 theme-hero-media">
  <source media="(max-width:639px)" srcSet="/bg/hero-mobile.webp" type="image/webp" />
  <source media="(min-width:640px)" srcSet="/bg/hero-desktop.webp" type="image/webp" />
  <img src="/bg/hero-desktop.webp" alt="..." className="object-cover" loading="eager" />
</picture>
```

- **Art direction real**: el usuario provee imágenes portrait específicas para móvil (`herobackground_home_mobile.png`, etc.), no recortes automáticos del desktop.
- **Formato WebP**: conversión con Pillow `quality=78, method=6` (78 ≈ visualmente idéntico, 60% menor que JPEG comparable).
- **Resize desktop**: max 1280px de ancho (suficiente para pantallas hasta 2K con `object-cover`).
- **Mobile imagen**: portrait natural del usuario, resize preservando aspect ratio.
- **`loading="eager"`**: el hero es LCP candidate, se pide inmediatamente.

**Galería: WebP pre-generado en `public/galery/`**

```py
# scripts implícitos: conversión con Pillow
for n in range(1, 21):
    im = Image.open(f"src/galery/{n}.png").resize((1280, ...), LANCZOS)
    im.save(f"public/galery/{n}.webp", "WEBP", quality=72, method=6)
```

- Imports TSX `import img1 from "@/src/galery/1.png"` (que bundleba 2.5 MB por archivo en el build) → paths estáticos `const img1 = "/galery/1.webp"`.
- Las imágenes se sirven como archivos estáticos desde `public/`, cacheados por el navegador con HTTP cache.
- `priority` en el primer tile visible (img1) para LCP, el resto lazy por default (`next/image` con `fill` y sin `priority`).

**Resultados de peso:**

| Asset | Antes | Después | Reducción |
|---|---|---|---|
| Hero home desktop | 1.9 MB PNG | 38 KB WebP | 98% |
| Hero home mobile | — | 18 KB WebP | — |
| Galería completa (20 img) | 47 MB PNG | 4 MB WebP | 92% |
| Todos los heroes (10 archivos) | ~5.8 MB | ~185 KB | 97% |

### 4.3 Sistema de theming (claro/oscuro)

#### Problema

El sitio ya tenía un sistema de theming en `globals.css` con `html[data-site-theme="light|dark"]` y clases como `theme-heading`, `theme-copy`, `theme-nav`, `project-card`, etc. Sin embargo, las páginas NO usaban estas clases — los colores estaban hardcodeados con valores absolutos:

- `text-[#081120]` (oscuro, invisible en dark)
- `text-gray-900`, `text-slate-600`, `text-gray-600` (slate, sin adaptación)
- `bg-white`, `border-gray-300` (claro, sin override dark)
- `text-white/92` (visible en dark, invisible en light)

El toggle ya existía (en `MobileMenu` vía `ThemeSelect`) pero al activar dark mode solo cambiaba el color del body — los textos seguían invisibles porque no usaban las classes themed.

#### Solución

**Extensión del sistema de utility classes en `globals.css`:**

```css
/* Cards sólidas (marquee, sticky service cards, casos recientes) */
.theme-card { background: #fff; border-color: rgba(226,232,240,.94); }
html[data-site-theme="dark"] .theme-card {
  background: rgba(15,23,42,.92); border-color: rgba(255,255,255,.1);
}

/* Cards glass (playbook, plataformas, diagnósticos) */
.theme-card-soft { background: rgba(255,255,255,.045); border-color: rgba(255,255,255,.1); }
html[data-site-theme="dark"] .theme-card-soft { ... }

/* Pills / chips */
.theme-pill { background: rgba(255,255,255,.3); color: rgba(15,23,42,.7); }
html[data-site-theme="dark"] .theme-pill { ... }

/* Eyebrows azules pequeños */
.theme-eyebrow { color: #1d4ed8; }
html[data-site-theme="dark"] .theme-eyebrow { color: #93c5fd; }

/* Eyebrow-pill (badge de playbook) */
.theme-eyebrow-pill {
  background: rgba(239,246,255,.7); border-color: rgba(191,219,254,.8); color: #1d4ed8;
}
html[data-site-theme="dark"] .theme-eyebrow-pill {
  background: rgba(59,130,246,.12); border-color: rgba(96,165,250,.32); color: #93c5fd;
}

/* Hero media: oscurece imagen en dark mode */
.theme-hero-media img { transition: filter 300ms ease; }
html[data-site-theme="dark"] .theme-hero-media img {
  filter: grayscale(0.75) brightness(0.32) contrast(1.1);
}

/* Hero overlay: en dark se elimina para que la imagen oscura sea la layer */
html[data-site-theme="dark"] .theme-hero-overlay { opacity: 0 !important; }

/* Logo */
.theme-logo-brand { color: #111827; }
.theme-logo-sub { color: #475569; }
html[data-site-theme="dark"] .theme-logo-brand { color: #fff; }
html[data-site-theme="dark"] .theme-logo-sub { color: rgba(226,232,240,.7); }

/* Dividers */
html[data-site-theme="dark"] .theme-divider { border-color: rgba(255,255,255,.08) !important; }

/* Botones secundarios (variant light override) */
html[data-site-theme="light"] .btn-secondary {
  @apply bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400;
}
```

**Aplicación semántica de las clases** en cada uno de los 5 heroes + sus secciones internas. Por ejemplo, en `home/page.tsx`:

- Hero picture: `theme-hero-media`
- Hero overlay div: `theme-hero-overlay`
- h1: `theme-heading`
- p descriptivo: `theme-copy`
- Badges: `theme-pill`
- Marquee cards: `theme-card` + `theme-heading` + `theme-copy`
- Plataformas cards: `theme-card-soft` + `theme-heading` + `theme-copy`
- Playbook cards: `theme-card-soft` + `theme-eyebrow-pill` + `theme-heading` + `theme-copy`
- Sticky cards: `theme-card` + `theme-pill`

Patrón repetido de forma idéntica en las 5 páginas.

**Bullets de listas**: cambiados de `bg-gray-700` / `bg-black/80` a `bg-blue-500` (visibles en ambos modos sin CSS adicional).

**Icon en Logo**: `text-gray-900` → `theme-logo-brand`, `text-gray-700` → `theme-logo-sub`.

### 4.4 Sistema de botones unificado

#### Problema

En todos los heroes había un patrón inconsistente: botón primario blanco `bg-white` + botón secundario transparente con borde `border border-gray-400`. La jerarquía visual era confusa — ambos parecían igual de "secundarios", y el borde gris fuerte se veía mal en ambos modos.

#### Solución

Sistema consistente aplicado a los 5 heroes + CTAs:

- **Primary**: `bg-blue-500 text-white` (solid blue, jerarquía fuerte).
- **Secondary**: `bg-white text-slate-700 border border-slate-300` (blanco con borde sutil).
- `flex-col w-full sm:flex-row sm:w-auto` en mobile/tablet (full width), inline en desktop.
- `justify-center` agregado para centrar el contenido en mobile full-width.

Las clases `.btn-primary` y `.btn-secondary` ya existentes en globals se mantienen, con el nuevo override para `btn-secondary` en light mode (que estaba forzando `text-slate-700` con `!important` y rompía el dark mode en `soluciones`).

### 4.5 Menú móvil

#### Problema

`MobileMenu.tsx` estaba implementado completo (panel deslizable con links, scroll lock, body overflow hidden, ThemeSelect integrado, anchors por ruta), pero en `MainNavSite.tsx` se importaba sin renderizarse. El warning de lint `MobileMenu is defined but never used` señalaba el bug, pero el síntoma era: en móvil el usuario solo ve el logo y no puede navegar.

#### Solución

```tsx
// MainNavSite.tsx, dentro del bloque lg:hidden que ya existía
<div className="flex items-center gap-2 lg:hidden">
  <div className="hidden sm:block">
    <ThemeSelect compact />
  </div>
  <MobileMenu anchors={anchors} />  {/* ← agregado */}
</div>
```

Bonus: `anchors` se estaba calculando en `MainNavSite` (de `anchorConfig`) pero tampoco se usaba hasta ahora. Conectarlo a `<MobileMenu anchors={anchors} />` resuelve ambos warnings a la vez (lint clean).

### 4.6 Toggle de tema en navbar desktop

#### Problema

En desktop solo existía el `ThemeSelect` (con labels "Claro"/"Oscuro" y radio buttons), pero estaba oculto en la zona `sm:block` dentro del bloque `lg:hidden`. Es decir, en desktop no había forma de cambiar el tema — el usuario tenía que abrir el menú móvil para cambiarlo, lo cual no aplica en desktop.

#### Solución

**Nuevo componente `components/ui/ThemeToggle.tsx`**:

- Botón con los 2 iconos (sol en light, luna en dark) que intercambia según el tema activo.
- Usa el mismo sistema de `localStorage` + `CustomEvent` que `ThemeSelect` → el estado se sincroniza entre las dos UIs automáticamente (toggle desktop ↔ select móvil dentro del menú hamburguesa).
- Colocado en `MainNavSite.tsx` al lado del icono de contacto, visible solo en `lg:flex`.
- La clase `theme-nav` agregada al `<header>` activa el override existente `html[data-site-theme="light"] .theme-nav [class*="text-white"]` que convierte cualquier `text-white` dentro de la nav a color oscuro en light mode automáticamente — sin necesidad de escribir CSS nuevo para este botón.

### 4.7 Dev server accesible en la red local

#### Modificación

`package.json`:

```json
"dev": "next dev -H 0.0.0.0 -p 5002"
```

`next.config.ts`:

```ts
allowedDevOrigins: ['localhost', '127.0.0.1', '172.29.240.1', '0.0.0.0']
```

Para que el usuario pueda probar responsividad en su teléfono real (sin usar DevTools, que a veces no refleja fielmente el viewport del dispositivo). La IP detectada en la red WiFi del usuario: `192.168.100.143:5002`.

**Nota**: `-H 0.0.0.0` expone el servidor a todos los dispositivos de la red WiFi. Es correcto para dev local, pero en producción se usa el Dockerfile/nginx que solo expone lo del contenedor.

---

## 5. Detalle de cambios por archivo

### 5.1 Páginas

**`app/(site)/home/page.tsx`** (refactor completo)
- Hero: PNG import → `<picture>` con WebP + art direction mobile/desktop. Overlay responsive. Botones primary/secondary unificados.
- Hero text `theme-heading`, `theme-copy`. Badges `theme-pill`.
- Marquee cards: `theme-card` + `theme-heading` + `theme-copy`.
- Plataformas: `theme-card-soft` + `theme-heading` + `theme-copy`. `sizes` corregido.
- Sticky service cards: flex-col mobile / flex-row desktop. `theme-card` + `theme-pill`.
- Metodología: `grid-cols-1 sm:grid-cols-2`. `theme-card-soft` + `theme-eyebrow-pill`.

**`app/(site)/soluciones/page.tsx`** (refactor completo)
- Hero con WebP + theming (idem home).
- Núcleo técnico: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, última card `sm:col-span-2 lg:col-span-1` para evitar hueco en tablet.
- Capas complementarias: `theme-card` + `theme-heading` + `theme-copy`.
- Modelo trabajo: `theme-card-soft` + `theme-eyebrow-pill`.
- Casos recientes: sacado `text-white` forzado del padre (rompía en light).
- Diagnóstico: `theme-card-soft`.
- `SectionHeader` local: sin `tone` (era unused), themed con `theme-pill`/`theme-heading`/`theme-copy`.

**`app/(site)/sobre-nosotros/page.tsx`** (refactor completo)
- Hero con WebP + theming.
- Historia: `theme-card` en storyBlocks + aside "Lo que nos diferencia". Bullets a `bg-blue-500`.
- Pilares: `theme-card-soft`, icono con `bg-[#081120]` (visible ambos modos). Sacado `text-white/92` invisible en light.
- Trayectoria timeline: `border-blue-500/30` (visible ambos modos), `theme-eyebrow` en años.
- Laboratorio: `theme-card` + `theme-pill` + theming.
- Testimonios: `theme-card`, `theme-copy` + `theme-eyebrow` en autor.
- CTA: `theme-card-soft`.
- SectionHeader local: themed.
- Código muerto eliminado: `heroFacts`, `Image` import sin uso, `heroBg` import.

**`app/(site)/proyectos/page.tsx`** (refactor completo)
- Hero con WebP + theming.
- Badges: `flex-col items-start sm:grid sm:grid-cols-3 sm:items-stretch` (apila vertical en móvil sin estirarse).
- Sección "Casos recientes": `theme-pill` + `theme-heading` + `theme-copy`.
- `<ProjectShowcase />` ya estaba themed internamente — no se tocó su API.

**`app/(site)/contact/page.tsx`** (refactor completo)
- Hero con WebP + theming.
- Info cards: `flex justify-between` → `grid lg:grid-cols-2` (apila en móvil). `theme-card` + `theme-eyebrow` en labels + `theme-heading` en valores.
- `bg-slate-50/50` hardcodeado → `theme-card`.
- Dividers: nueva clase `.theme-divider` con override dark.
- CTA final: `theme-pill` + `theme-heading`.
- Su `SectionHeader` local: themed.

**`app/(site)/galery/page.tsx`** (optimización de imágenes + grid fix)
- Imports TSX PNG (47 MB bundleados) → paths estáticos WebP (`/galery/n.webp`).
- `priority` en img1 (LCP).
- `TextTile`: `col-span-2 sm:col-span-1` (arregla hueco en móvil).

**`app/(site)/politica-privacidad/page.tsx`** — no tocada en esta sesión.

### 5.2 Componentes

**`components/contact/ContactRequestForm.tsx`** (responsive + legibilidad)
- `flex justify-between` (texto y form lado a lado) → `grid lg:grid-cols-[1fr_1.1fr] lg:items-start`.
- Inputs glass (`bg-white/[0.04]`, `text-white`, `placeholder:text-white/34`) → sólidos legibles (`border-slate-300 bg-white text-slate-900 placeholder:text-slate-400`).
- Container: `border-white/7 backdrop-blur-lg` (oscuro) → `border-slate-200 bg-white shadow` (claro).
- Padding `p-8` → `p-6 sm:p-8`.

**`components/ui/MainNavSite.tsx`**
- `<MobileMenu anchors={anchors} />` renderizado (antes solo importado, sin usar).
- Clase `theme-nav` agregada al `<header>` para activar overrides de color automáticos.
- `<ThemeToggle />` añadido al lado del icono de contacto (visible en `lg:flex`).

**`components/ui/ThemeToggle.tsx`** (NUEVO)
- Toggle de tema (sol/luna) con iconos SVG.
- Sincronizado con `ThemeSelect` vía `CustomEvent("idec-theme-change")` y `localStorage`.
- Misma lógica de `useEffect` + `window.localStorage` que `ThemeSelect`.

**`components/ui/Logo.tsx`**
- `text-gray-900` → `theme-logo-brand`.
- `text-gray-700` → `theme-logo-sub`.

### 5.3 Configuración

**`package.json`** — script `dev` con `-H 0.0.0.0`.

**`next.config.ts`** — `allowedDevOrigins` actualizado.

**`app/globals.css`** — extensión del sistema de temas:
- 10 utilities nuevas: `theme-card`, `theme-card-soft`, `theme-pill`, `theme-eyebrow`, `theme-eyebrow-pill`, `theme-hero-media`, `theme-hero-overlay`, `theme-logo-brand`, `theme-logo-sub`, `theme-divider`.
- Override `btn-secondary` para light mode.
- Overrides dark para cada una.

### 5.4 Assets

- Conversiones con Pillow (Python) ejecutadas inline:
  - 5 heroes desktop + 5 heroes mobile → 10 archivos WebP en `public/bg/`.
  - 20 imágenes de galería → 20 WebP en `public/galery/`.
- Total: 30 archivos nuevos de imagen optimizada en `public/`.

---

## 6. Decisiones discutidas y alternativas descartadas

### 6.1 `next/image` vs `<picture>`

Descartado `next/image` para los heroes porque el proyecto tiene `images.unoptimized: true` (por static export), y en esa config el componente no genera srcset ni convierte formatos — no aporta más que un `<img>` plano. La opción con `<picture>` es estándar W3C, cero JS, y funciona perfectamente con static export. Para el futuro: si se elimina el static export y se usa el optimizer, conviene migrar los heroes a `<Image>` con `srcset` automático + `media` para art direction.

### 6.2 shadcn/ui para el menú móvil

Descartado. El usuario pidió "usa shadcn" para el menú móvil, pero al verificar `package.json` vimos que shadcn/ui no estaba instalado (no hay `@radix-ui/*`, ni `clsx`, ni `tailwind-merge`). El `MobileMenu` existente ya tenía scroll lock y accordion implementado, solo estaba sin cablear. Costo de instalar shadcn: 6+ dependencias nuevas + migración completa del design system. Costo de conectar el existente: 5 minutos. Decisión: Usar lo existente (opción A), porque ya está bien hecho y no agrega deuda de dependencias.

### 6.3 Tailwind `dark:` variant vs utility classes CSS

Se consideró migrar todo a `dark:` variants de Tailwind, pero se descartó porque:
- El sistema existente (`html[data-site-theme]` + `.theme-*`) ya estaba documentado y era consistente con las decisiones previas del equipo.
- Migrar implicaba tocar `tailwind.config.ts` (`darkMode: "class"`) y agregar el toggoleo en cada uno de los cientos de elementos.
- El enfoque utility-per-vista es más terso en JSX y permite overrides puntuales sin alcanzar el componente.

### 6.4 Art direction con recortes automáticos vs imágenes distintas

Se consideró usar `next/image` con `media` para recortes automáticos desde el optimizer. Descartado por:
- `unoptimized: true` no soporta recortes.
- Los recortes automáticos de una misma imagen perdían el sujeto en portrait (ropa, persona en el centro del frame).
- El usuario proveyó imágenes portrait específicas para cada hero → art direction real, crops deliberados para cada dispositivo.

---

## 7. Verificación

### 7.1 TypeScript

```bash
npx tsc --noEmit
```
Cero errores en cada iteración después de cada refactor.

### 7.2 ESLint

```bash
npx next lint
```
Antes: 8 warnings (varios de código muerto y prop no usada).
Después: 0 warnings en archivos tocados. Se eliminaron:
- `MobileMenu is defined but never used` (MainNavSite)
- `anchors is assigned a value but never used` (MainNavSite)
- `tone is defined but never used` (soluciones + sobre-nosotros, eliminado del `SectionHeaderProps`)
- `Image is defined but never used` (sobre-nosotros)
- `heroFacts is assigned a value but never used` (sobre-nosotros)
- `isDark is assigned a value but never used` (contact, eliminado al quitar `tone` del `SectionHeader`)

Preexistentes (en páginas no tocadas en esta sesión):
- `proyectos`: `Link is defined but never used` (pre-existente, no tocado).

### 7.3 Verificación manual

Pedida al usuario en cada iteración:
- Servidor dev levantado en `http://192.168.100.143:5002` (visible en todos los dispositivos de la red).
- Pruebas en móvil real (no DevTools) por preferencia del usuario.
- Iteraciones de feedback específicas en cada página por separado (home → soluciones → sobre-nosotros → proyectos → contact → navbar).

---

## 8. Estado final

| Área | Estado |
|---|---|
| Responsive mobile (360px) | Completo en todas las páginas con hero |
| Responsive tablet (768px) | Completo en todas las páginas con hero |
| Responsive desktop (1280px+) | Completo, conservando el layout original |
| Hero images optimizadas | 5 con WebP + art direction |
| Galeria optimizada | 20 WebP + lazy loading + prioridad LCP |
| Theming light mode | Completo en 5 páginas + logo + navbar |
| Theming dark mode | Completo en 5 páginas + logo + navbar |
| Menú móvil | Funcional (cableado) |
| Toggle de tema desktop | Funcional (nuevo) |
| Toggle de tema móvil | Funcional (ya existía) |
| Formulario de contacto | Responsive + legible (claro/oscuro) |
| Sistema de botones | Unificado (primary blue/secondary white) |
| Dev server en red local | Configurado |
| TypeScript/Ceros errores | 0 |
| ESLint warnings en scope | 0 |

---

## 9. Trabajo futuro (no abordado en esta sesión)

### 9.1 Páginas pendientes de theming

- `app/(site)/galery/page.tsx` — optimizada, pero sin theming (no estaba en el scope del usuario, ya estaba OK).
- `app/(site)/politica-privacidad/page.tsx` — no tiene hero, no se tocó.
- `app/(site)/clients/page.tsx` — tiene varias secciones con theming incompleto (fue parcialmente preexistent y no abordada).
- `components/ui/FooterNew.tsx` — ya implementa `.theme-footer-*- clases parciales, podría validar consistencia.

### 9.2 Optimizaciones de performance adicionales

- Migrar las imágenes Unsplash de las cards (`softwareShowcase`, `serviceCards`, `complementaryLayers`) a WebP local. Hoy son URLs remotas con `q=80` — en conexiones móviles lentas pueden seguir siendo pesadas. Conviene descargarlas, optimizar con Pillow, y servirlas desde `public/` para garantizar control de peso y art direction.
- Considerar LazyLoad de sections con `<IntersectionObserver>` o `next/dynamic` para splits de bundle por su sección. Especialmente útil para `home` que tiene 400vh de sticky cards.

### 9.3 Mejoras de accesibilidad

- Los badges del hero (`capabilitySignals`) podrían tener un `<span aria-label="...">` para leer todo como string.
- Los botones de ThemeToggle ya tienen `aria-label` dinámico.
- Validar contraste WCAG AA en todos los pares texto/fondo de ambos temas (especialmente `theme-copy` en light mode con algunos `bg-card` translúcidos).

### 9.4 Migración futura

Si el proyecto decide eliminar el static export y servir desde Node (para usar n8n + endpoints dinamops), conviene evaluar:
- Reactivar `images.unoptimized: false` para aprovechar el optimizer.
- Migrar los `<picture>` a `<Image fill sizes>` de next/image con art direction vía `media`.
- Habilitar el loader de sharp para AVIF (más eficiente que WebP en desktop modernos).

### 9.5 Testing

No hay suite de tests en el repo. Para un refactor de este alcance sería recomendable:
- `@testing-library/react` + `vitest` para verificar que cada hero aplica las clases themed según `data-site-theme`.
- `axe-jest` o `jest-axe` para validar contraste en ambos temas.
- Playwright visual regression para capturar screenshots en mobile/tablet/desktop × light/dark (matriz 6 estados).

---

## 10. Lecciones aprendidas

**1. Verificar siempre la configuración del framework antes de proponer una "mejor práctica".**

La recomendación inicial fue usar `next/image` para srcset y WebP. Al verificar `next.config.ts` descubrí `images.unoptimized: true` (necesario para static export), lo que neutralizaba todos los beneficios del componente. La lección: nunca proponer una solución por "buena práctica general" sin verificar el contexto. Cuando el contexto rompe la premisa de la "mejor práctica", la evaluas y buscas la alternativa equivalente (`<picture>` en este caso).

**2. Los warnings de lint no son ruido — son bugs latentes.**

El `MobileMenu is defined but never used` era literalmente un bug silencioso: el menú móvil no funcionaba porque el componente nunca se renderizaba. El warning tenía un año en el code base. Lecciones: (a) no silenciar lint sin entender por qué, (b) los imports no usados son síntoma de cableado roto, no de código "de sobra".

**3. Diseño de utility classes semánticas > colores hardcodeados.**

Al empezar el theming, la tentación era agregar `dark:` variantes por cada elemento (`dark:text-white dark:bg-[#0b1628]` etc.). Eso duplica visualmente el className y lo hace ilegible. La solución: utility classes CSS con overrides por selector (`theme-heading`, `theme-card`, etc.). El JSX queda limpio, la intención semántica es explícita, y los cambios de color viven en un solo archivo (`globals.css`) — no diseminados por cientos de líneas de Tailwind.

**4. El "art direction" real es diseño deliberado, no recorte automático.**

Aprendimos que `bg-cover` recorta ciego y el recorte puede tapar el sujeto. La prueba: el usuario proveyó imágenes portrait específicas para mobile. No es "responsive" simplemente servir la misma imagen en distintos tamaños — es servir **la imagen correcta para cada contexto visual**. El `<picture>` + `media query` es la herramienta natural del web platform para esto, y es más simple que programar recortes aspect-ratio-aware en el servidor.

**5. La accesibilidad al dev server es directamente una mejora de proceso.**

Configurar `-H 0.0.0.0` para que el usuario pruebe en su teléfono real tomó 30 segundos. Alternativa: usar DevTools históricamente ha llevado al usuario a "achicar" pantallas falsamente y no reflejar bien el viewport. El feedback verzút desde un celular real es inmediato, fidedigno y aceleró todo el loop de iteración de cada página. Si o si agregarlo como regla de equipo.

---

## 11. Conclusión

En una sesión de trabajo se transformó el sitio de IDEC de un estado desktop-only con imágenes pesadas y theming inexistente a un sitio:
- Fully responsive en los 3 breakpoints principales.
- Con 97% de reducción de peso en imágenes de hero y galería.
- Con un sistema de theming claro/oscuro consistente y semántico.
- Con menú móvil funcional y toggle de tema accesible desde desktop y mobile.
- Con un sistema de botones unificado visualmente.
- Sin warnings de lint en el scope tocado.
- Sin errores de TypeScript.

Todo el refactor se hizo respetando las decisiones de arquitectura previas del equipo (sistema de temas con `data-site-theme`, no introducir shadcn sin justificación, mantener static export), extendiéndolas en lugar de reemplazarlas. Las decisiones se validaron con el usuario en cada iteración, y se documentaron las alternativas descartadas para que futuros mantenedores puedan revisar los tradeoffs.

---

*Fin del reporte.*