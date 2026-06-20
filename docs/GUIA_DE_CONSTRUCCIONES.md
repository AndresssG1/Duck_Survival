# Guía para añadir construcciones

Las ocho categorías y todas sus opciones se administran desde:

`src/data/buildings.ts`

## 1. Preparar la imagen

Guarda la imagen en una carpeta con el `slug` de su categoría:

`public/images/construcciones/departamento-de-ingenieria/[categoria]/[opcion].webp`

Ejemplo:

`public/images/construcciones/departamento-de-ingenieria/la-base/campamento-de-supervivientes.webp`

Usa nombres en minúsculas, sin tildes y separados con guiones. En Windows, comprueba que el archivo no termine accidentalmente en `.webp.webp`.

## 2. Añadir la opción

Busca su categoría dentro de `buildingCategories` y añade el nuevo objeto dentro de `options: []`. Separa cada opción con una coma.

Elementos permitidos: `quemadura`, `rayo`, `escarcha`, `energia` y `fisico`.

### Plantilla para nivel máximo 30

```ts
{
  slug: 'nombre-sin-tildes',
  name: 'Nombre visible',
  description: 'Descripción mostrada por el juego',
  element: 'fisico',
  maxLevel: 30,
  image: '/images/construcciones/departamento-de-ingenieria/categoria/nombre-sin-tildes.webp',
  imageAlt: 'Nombre visible de Duck Survival',
  // upgradeEffect: 'Efecto general', // Elimina esta línea si el juego no muestra uno.
  levels: [
    { level: 1, effect: 'Efecto de Lv1.' },
    { level: 3, effect: 'Efecto de Lv3.' },
    { level: 6, effect: 'Efecto de Lv6.' },
    { level: 10, effect: 'Efecto de Lv10.' },
    { level: 15, effect: 'Efecto de Lv15.' },
    { level: 20, effect: 'Efecto de Lv20.' },
    { level: 25, effect: 'Efecto de Lv25.' },
    { level: 30, effect: 'Efecto de Lv30.' },
  ],
  verifiedAt: '2026-06-20',
  gameVersion: '1.4.1',
},
```

### Plantilla para nivel máximo 10

```ts
{
  slug: 'nombre-sin-tildes',
  name: 'Nombre visible',
  description: 'Descripción mostrada por el juego',
  element: 'energia',
  maxLevel: 10,
  image: '/images/construcciones/departamento-de-ingenieria/categoria/nombre-sin-tildes.webp',
  imageAlt: 'Nombre visible de Duck Survival',
  // upgradeEffect: 'Efecto general', // Elimina esta línea si el juego no muestra uno.
  levels: [
    { level: 1, effect: 'Efecto de Lv1.' },
    { level: 2, effect: 'Efecto de Lv2.' },
    { level: 3, effect: 'Efecto de Lv3.' },
    { level: 4, effect: 'Efecto de Lv4.' },
    { level: 5, effect: 'Efecto de Lv5.' },
    { level: 6, effect: 'Efecto de Lv6.' },
    { level: 7, effect: 'Efecto de Lv7.' },
    { level: 8, effect: 'Efecto de Lv8.' },
    { level: 9, effect: 'Efecto de Lv9.' },
    { level: 10, effect: 'Efecto de Lv10.' },
  ],
  verifiedAt: '2026-06-20',
  gameVersion: '1.4.1',
},
```

## 3. Actualizar la cantidad

`optionCount` representa las opciones disponibles en la versión actual del juego, no un máximo permanente. Si una actualización añade otra, aumenta ese número.

## 4. Publicar

Guarda los archivos, revisa en GitHub Desktop que aparezcan tanto `buildings.ts` como la imagen, escribe el mensaje del commit y pulsa **Commit to main** y luego **Push origin**.

Subir solo la imagen no basta: la propiedad `image` de la opción debe apuntar a ella para que la web la muestre.
