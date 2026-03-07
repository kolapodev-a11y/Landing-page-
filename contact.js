// Vercel Serverless Function: /api/contact
// Sends email via Resend using REST API (no npm dependencies).
//
// Required environment variables in Vercel:
// - RESEND_API_KEY
// - CONTACT_TO_EMAIL (your inbox)
// Optional:
// - CONTACT_FROM_EMAIL (must be a verified sender on Resend; fallback uses onboarding@resend.dev)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ ok: false, error: 'Missing RESEND_API_KEY' }));
    }

    if (!toEmail) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ ok: false, error: 'Missing CONTACT_TO_EMAIL' }));
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const name = (body?.name || '').toString().trim();
    const email = (body?.email || '').toString().trim();
    const message = (body?.message || '').toString().trim();
    const botField = (body?.botField || '').toString().trim();

    // Honeypot: if filled, silently accept.
    if (botField) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ ok: true }));
    }

    if (!name || !email || !message) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ ok: false, error: 'Missing required fields' }));
    }

    const subject = `New contact message from ${name}`;

    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      })
    });

    const data = await resendResp.json().catch(() => ({}));

    if (!resendResp.ok) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json');
      return res.end(
        JSON.stringify({
          ok: false,
          error: data?.message || 'Email service error',
          details: data
        })
      );
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: true, id: data?.id }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'Unexpected error',
        details: String(err && err.message ? err.message : err)
      })
    );
  }
};
