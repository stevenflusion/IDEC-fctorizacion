# IDEC Frontend

Aplicacion Next.js (App Router) para el sitio corporativo de IDEC.
Landing publica con contenido comercial de ingenieria, tecnologia y captacion de leads por WhatsApp.

## Scripts

- `npm run dev`: inicia el servidor de desarrollo en `http://localhost:5002`.
- `npm run build`: compila la aplicacion para produccion.
- `npm run build:static`: genera export estatico en `out/`.
- `npm run build:cpanel`: alias para generar el paquete estatico listo para cPanel.
- `npm run build:coolify`: alias para generar el paquete estatico listo para Coolify.
- `npm start`: sirve el build de produccion en `http://localhost:5002`.
- `npm run lint`: ejecuta lint sobre Next.js.

## Chatbot con n8n

El proyecto incluye un widget de chat impulsado por **n8n** mediante el paquete [`@n8n/chat`](https://www.npmjs.com/package/@n8n/chat).

- El widget se monta globalmente desde `app/layout.tsx` -> `components/ui/N8nChatWidget.tsx`.
- Se conecta a un workflow de n8n via webhook.
- La URL del webhook se configura con la variable `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL`.

Para activarlo, crea un workflow en n8n con un nodo **Chat Trigger**, activa el workflow, copia la URL de produccion y asignala a la variable de entorno.

## Deploy en cPanel

Este proyecto esta configurado para exportacion estatica con Next.js.

1. Ejecuta `npm install`
2. Ejecuta `npm run build:cpanel`
3. Sube el contenido de `out/` a `public_html/` en cPanel

### Notas de hosting

- Las rutas se exportan con `trailingSlash`, por lo que cada pagina queda como carpeta con su propio `index.html`.
- `next/image` usa `unoptimized: true`, asi que no necesitas servidor Node para las imagenes.
- El build copia automaticamente `.htaccess` dentro de `out/` para priorizar `index.html` y usar `404.html`.
- Los redirects de Next.js no se usan en modo estatico. Si necesitas redirigir `idec.ec` a `www.idec.ec`, hazlo desde cPanel o `.htaccess`.

## Rutas activas

- `/`: reexporta la misma experiencia de `/home`.
- `/home`: landing principal con hero, servicios, verticales, plataformas, roadmap y testimonios.
- `/soluciones`: pagina de soluciones con ingenieria civil, electrica, mecanica, automatizacion, telecomunicaciones, software, proceso y casos.
- `/sobre-nosotros`: pagina de empresa con historia, pilares, trayectoria, laboratorio y testimonios.
- `/clients`: pagina de proyectos, alianzas y ecosistema tecnologico.
- `/contact`: pagina de contacto con formulario hacia WhatsApp.

## Arquitectura actual

### Shell de la app

- `app/layout.tsx`
  - aplica la fuente `Outfit`
  - monta `Providers`
  - monta el widget de n8n chat (`N8nChatWidget`)
- `app/(site)/layout.tsx`
  - agrega `MainNavSite`
  - envuelve las paginas publicas
  - agrega `FooterNew`
- `app/providers.tsx`
  - monta `ConfirmProvider` a nivel global
- `components/ui/N8nChatWidget.tsx`
  - widget conversacional impulsado por n8n
- `lib/business-config.ts`
  - centraliza datos de contacto y configuracion del negocio

### Componentes compartidos realmente usados

- `components/ui/MainNavSite.tsx`
- `components/ui/MobileMenu.tsx`
- `components/ui/SiteLinks.tsx`
- `components/ui/FooterNew.tsx`
- `components/ui/FooterNav.tsx`
- `components/ui/Logo.tsx`
- `components/ui/N8nChatWidget.tsx`
- `components/layout/CampaignBanner.tsx`
- `components/contact/ContactRequestForm.tsx`
- `lib/business-config.ts`
- `components/icons/*`

### Estructura de carpetas

- `app/`: rutas y layouts del sitio.
- `components/layout/`: wrappers y secciones compartidas.
- `components/ui/`: navegacion, footer, CTA y utilidades UI.
- `lib/`: configuracion compartida (`business-config.ts`).
- `components/icons/`: iconos SVG como componentes React.
- `public/`: assets estaticos.

## Variables de entorno

Usar `.env.example` como base. No versionar `.env.local`.

| Variable | Descripcion |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio |
| `NEXT_PUBLIC_BUSINESS_NAME` | Nombre de la empresa |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Correo de contacto |
| `NEXT_PUBLIC_BUSINESS_LOCATION` | Direccion fisica |
| `NEXT_PUBLIC_BUSINESS_MAPS_URL` | URL de Google Maps |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Horario de atencion |
| `NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER` | Numero de WhatsApp (solo digitos) |
| `NEXT_PUBLIC_WHATSAPP_BUSINESS_DISPLAY` | Numero formateado para mostrar |
| `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL` | Webhook del workflow de n8n |

## Configuracion relevante

- `next.config.ts`
  - `output: 'export'` solo cuando `NEXT_OUTPUT=export` o `BUILD_TARGET=static`
  - `allowedDevOrigins` para entorno local / WSL
  - `images.remotePatterns` para `localhost`, `images.unsplash.com`, `lh3.googleusercontent.com`, `deploy-pos-nestjs.onrender.com` y `res.cloudinary.com`
  - `serverActions.bodySizeLimit = '20mb'` aunque hoy no hay Server Actions
- `tailwind.config.ts`
  - `darkMode: "class"`
  - colores `primary`, `secondary`, `background-light`, `background-dark`
- `app/globals.css`
  - variables CSS del tema
  - utilidades `btn-*` y `pill-*`

## Hallazgos importantes

- La documentacion anterior de este archivo describia una arquitectura de tienda que no existe en el codigo visible actual.
- La carpeta `/assets` no existe en este proyecto al momento de esta actualizacion; no se encontro el PDF de requerimientos IDEC en el workspace del proyecto.
- `src/` esta vacio.
- Hay componentes residuales o no integrados como `Store.tsx`, `ClientSessionGate.tsx`, `LogoutButton.tsx`, `Pagination.tsx` y `SortDropdown.tsx`.
- La ruta de inicio esta duplicada entre `/` y `/home`.
- Hay estilos `dark:` en varias vistas, pero no existe un mecanismo visible para aplicar la clase `dark`.

## Validacion

Validado el `2026-07-02` con:

- `npm run lint`
- `npm run build`

## Documentacion complementaria

- [docs/frontend-ui-copy-refresh.md](docs/frontend-ui-copy-refresh.md)
