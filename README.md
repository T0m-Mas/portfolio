This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Formulario de contacto

La página `/contact` permite enviar nombre, apellido, email y mensaje en español o inglés. El servidor envía el correo mediante la [API de Resend](https://resend.com/docs/api-reference/emails/send-email), sin exponer la clave al navegador. El email del visitante se usa como `reply_to` para responder directamente.

1. Crear una cuenta en Resend, verificar el dominio del remitente y generar una clave con permiso de envío.
2. Copiar `.env.example` a `.env.local` y completar `RESEND_API_KEY` y `CONTACT_FROM_EMAIL` (por ejemplo, `Portfolio <contacto@tu-dominio.com>`). El destinatario `CONTACT_TO_EMAIL` ya está definido como `tomas_masotta@live.com`.
3. Reiniciar el servidor local. En producción, configurar las mismas variables en el alojamiento y volver a desplegar. Se necesita un servidor Next.js; una exportación estática no ejecuta `/api/contact`.
4. Enviar un mensaje desde `/contact` y comprobar su recepción, incluida la carpeta de spam, y que Responder apunta al email del visitante.

Sin configuración el formulario informa que está temporalmente indisponible y ofrece un enlace al email. Solo se confirma el envío cuando Resend acepta el mensaje; la entrega final debe comprobarse en el buzón o en Resend.

El endpoint limita el tamaño de las solicitudes, valida los campos e incluye un campo trampa, una espera de 60 segundos entre intentos por IP (también si falla el proveedor) y un límite de cinco intentos por diez minutos e IP. Las respuestas indican la espera mediante `Retry-After`. El formulario bloquea el botón y conserva la espera al recargar o abrir otra pestaña, sin mostrar el tiempo restante al visitante. El límite del servidor vive en memoria de cada instancia y se reinicia con ella; para varias instancias debe complementarse con un límite compartido en el alojamiento. El proxy del alojamiento debe establecer `x-forwarded-for` de forma confiable.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
