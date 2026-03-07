# /api/contact

This folder contains a Vercel Serverless Function:

- `contact.js` → POST `/api/contact`

It sends email using **Resend** via the REST API (no npm packages).

## Required Vercel Environment Variables
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

Optional:
- `CONTACT_FROM_EMAIL` (must be a verified sender/domain in Resend)

Resend docs:
- https://resend.com/docs/api-reference/introduction
- https://resend.com/docs/api-reference/emails/send-email

Vercel Functions docs:
- https://vercel.com/docs/functions/quickstart
