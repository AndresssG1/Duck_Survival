# Guia para editar el contenido

La mayor parte del contenido editorial vive en `src/content/guides`. Cada archivo Markdown genera una pagina dentro de `/guias/`.

## Editar una guia desde GitHub

1. Abre `src/content/guides` en el repositorio.
2. Selecciona el archivo que quieres cambiar.
3. Pulsa el icono del lapiz, **Edit this file**.
4. Modifica el texto sin borrar el bloque inicial entre `---`.
5. Actualiza `updatedAt` y `gameVersion`.
6. Selecciona **Commit changes**.
7. Cloudflare publicara el cambio automaticamente si el commit entra en `main`.

## Estados editoriales

- `draft`: no se publica.
- `review`: contiene informacion confirmada, pero la guia sigue incompleta.
- `verified`: todo el alcance de la pagina fue contrastado para la version indicada.

## Fuentes

Cada dato que pueda cambiar debe proceder de una fuente oficial, una prueba dentro del juego o una captura fechada. No copies parrafos de otras guias: resume, contrasta y enlaza la fuente.

## Formato basico

```md
## Titulo de seccion

Parrafo normal con **texto importante**.

- Elemento de una lista
- Otro elemento
```

Usa la plantilla de `docs/templates/guia.md` para crear una pagina nueva.

## Codigos

Los codigos se editan en `src/data/codes.ts`. Un codigo solo puede marcarse como `active` si fue probado recientemente y tiene una fuente o captura de respaldo.
