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

Antes del lanzamiento se debe reemplazar `https://ducksurvival.guide` en `astro.config.mjs` y `public/robots.txt` si se utiliza otro dominio.
