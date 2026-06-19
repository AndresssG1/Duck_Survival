# Formulario de la comunidad experta

El formulario de `/guias/experto/` se publica inicialmente desactivado. No debe aceptar aportes hasta disponer de almacenamiento, proteccion contra bots y moderacion.

## Arquitectura prevista

- Cloudflare Pages Function para recibir el formulario.
- Cloudflare D1 para almacenar aportes pendientes.
- Cloudflare Turnstile para reducir envios automatizados.
- Texto plano: no se acepta HTML proporcionado por usuarios.
- Limites de longitud y frecuencia por solicitud.

## Datos del aporte

- Nombre o alias opcional.
- Version del juego.
- Titulo.
- Estrategia.
- Enlace de fuente opcional.
- Fecha de envio.
- Estado de moderacion: `pending`, `approved` o `rejected`.

## Flujo de publicacion

1. El jugador envia una propuesta sin crear una cuenta.
2. Turnstile y el servidor validan la solicitud.
3. D1 la guarda con estado `pending`.
4. Un moderador comprueba contenido, fuentes y version del juego.
5. Solo los aportes `approved` pueden mostrarse publicamente.

## Requisitos antes de activarlo

1. Crear la base D1 y vincularla al proyecto Pages.
2. Crear las claves de Turnstile y guardarlas como secretos de Cloudflare.
3. Implementar el endpoint y las consultas parametrizadas.
4. Actualizar Privacidad y Terminos de uso.
5. Probar spam, limites, enlaces peligrosos y errores de red.

Aunque no se solicite una cuenta, no debe prometerse anonimato absoluto: el proveedor de infraestructura puede procesar registros tecnicos de seguridad.
