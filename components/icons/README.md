# Icon Components

Conjunto de íconos SVG reutilizables para la app. Se exportan desde un barrel para importaciones limpias y consistentes.

## Importación

```tsx
import { IconHub, IconArrowRight, IconBuilding } from '@/components/icons'
```

## Props comunes

- `size?: number | string` — Ancho y alto del SVG (por ejemplo, `24` o `'1.5rem'`).
- `strokeWidth?: number` — Grosor de trazo en íconos con contorno (no aplica a íconos de relleno).
- `className?: string` — Clases utilitarias Tailwind (color, márgenes, etc.).

Ejemplos:

```tsx
// Color via Tailwind + tamaño explícito
<IconHub className="text-primary" size={28} />

// Flecha con margen y tamaño
<IconArrowRight className="ml-2 text-gray-600" size={20} />

// Ícono de edificio (relleno) con color
<IconBuilding className="text-gray-900 dark:text-white" size={24} />

// Ícono con trazo más grueso
<IconRouter size={24} strokeWidth={2} className="text-indigo-600" />
```

## Lista de íconos

- `IconHub`
- `IconArrowRight`
- `IconBuilding` (relleno)
- `IconRouter`
- `IconHomeIoT`
- `IconTarget`
- `IconEye`
- `IconStar` (relleno)

## Notas

- Preferir `size` para controlar dimensiones y `className` solo para color y layout.
- Los íconos con relleno (`IconBuilding`, `IconStar`) ignoran `strokeWidth`.
- Si necesitas nuevos íconos, añade un archivo en `components/icons/` y expórtalo en `components/icons/index.ts`.
