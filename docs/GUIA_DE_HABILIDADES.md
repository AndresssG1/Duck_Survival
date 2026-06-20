# Guía para añadir habilidades

Las fichas se generan desde `src/data/skills.ts`. Cada objeto del arreglo `skills` crea una tarjeta en el catálogo y una página en `/habilidades/<slug>/`.

## Imagen

Guarda una imagen WebP optimizada en:

```text
public/images/habilidades/nombre-de-la-habilidad.webp
```

Usa minúsculas, sin tildes ni espacios, y separa las palabras con guiones.

## Datos necesarios

- Nombre exacto.
- Elemento: `quemadura`, `rayo`, `escarcha`, `energia` o `fisico`.
- Tipo, por ejemplo `En área` u `Objetivo único`.
- Descripción.
- Uso estratégico confirmado o claramente marcado como recomendación.
- Efectos de calidad: Excelente, Élite, Épico, Legendario y Mítico.
- Efectos de 1 a 5 estrellas.
- Fecha y versión verificadas.

## Plantilla

Duplica el objeto de `Cuchillas giratorias` en `src/data/skills.ts` y cambia todos sus valores. Mantén esta estructura:

```ts
{
  slug: 'nombre-de-la-habilidad',
  name: 'Nombre de la habilidad',
  element: 'fisico',
  type: 'En área',
  description: 'Descripción confirmada.',
  image: '/images/habilidades/nombre-de-la-habilidad.webp',
  imageAlt: 'Icono de la habilidad Nombre de la habilidad',
  strategicUse: 'Uso recomendado o dato estratégico.',
  qualityEffects: [
    { quality: 'Excelente', effect: '...' },
    { quality: 'Élite', effect: '...' },
    { quality: 'Épico', effect: '...' },
    { quality: 'Legendario', effect: '...' },
    { quality: 'Mítico', effect: '...' },
  ],
  starEffects: [
    { stars: 1, effect: '...' },
    { stars: 2, effect: '...' },
    { stars: 3, effect: '...' },
    { stars: 4, effect: '...' },
    { stars: 5, effect: '...' },
  ],
  verifiedAt: 'AAAA-MM-DD',
  gameVersion: '1.4.1',
},
```

No cambies los nombres de las propiedades ni elimines comas. Cloudflare publicará la nueva ficha después de que el cambio llegue a `main`.
