# Duck Survival Guia

Wiki comunitaria en espanol construida con Astro y preparada para Cloudflare Pages.

## Desarrollo

```sh
npm install
npm run dev
```

## Validacion

```sh
npm run build
```

## Despliegue en Cloudflare Pages

- Comando de build: `npm run build`
- Directorio de salida: `dist`
- Version recomendada de Node: `22`

URL de produccion: `https://duck-survival.pages.dev`.

Consulta `docs/GUIA_DE_CONTENIDO.md` para editar o crear guias desde GitHub.

Las fichas de personajes se cargan desde `src/data/characters.ts` y sus imagenes se guardan en `public/images/personajes`.

Las fichas de habilidades se cargan desde `src/data/skills.ts`. Consulta `docs/GUIA_DE_HABILIDADES.md` para añadir nuevas habilidades.

## Estandar de imagenes de personajes

- Ruta: `public/images/personajes/<elemento>/<slug-del-personaje>/`.
- Carpetas y archivos siempre en minusculas, sin tildes ni espacios.
- Usa guiones para separar palabras.
- La carpeta del personaje debe coincidir con su `slug` en `characters.ts`.
- Imagen principal: `personaje.png` o un nombre estable ya publicado, como `gordon.png`.
- Habilidades: usa su nombre en formato kebab-case, como `corte-giratorio.png`, o `habilidad-normal.png` y `habilidad-definitiva.png` cuando aun no haya un nombre definitivo.

Ejemplo: `public/images/personajes/energia/ojo-de-laser-lux/habilidad-normal.png`.
