import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactPayload {
  firstName: string;
  email: string;
  interestType: string;
  company?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INTERESTS = [
  'Individual Driver',
  'Fleet',
  'Organization',
  'Technology',
  'Industry',
  'Other',
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailHtml(data: ContactPayload): string {
  const rows = [
    { label: 'Name', value: data.firstName },
    { label: 'Email', value: data.email },
    { label: 'Interest Type', value: data.interestType },
    ...(data.company ? [{ label: 'Company', value: data.company }] : []),
    ...(data.message ? [{ label: 'Message', value: data.message }] : []),
  ];

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:8px 16px 8px 0;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top;">${escapeHtml(row.label)}</td>
          <td style="padding:8px 0;color:#111827;vertical-align:top;">${escapeHtml(row.value)}</td>
        </tr>`
    )
    .join('');

  return `
    <div style="font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="font-size:20px;font-weight:700;color:#0B111B;margin:0 0 4px 0;">New Astrateq Gadgets Demo Request</h2>
      <p style="font-size:14px;color:#6B7280;margin:0 0 24px 0;">A visitor submitted the early-access form on the Astrateq Gadgets landing page.</p>
      <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0;" />
      <p style="font-size:12px;color:#9CA3AF;margin:0;">This message was sent via the Resend integration on astrateq.gadgets. Reply directly to this email to respond to the visitor.</p>
    </div>`;
}

function buildEmailText(data: ContactPayload): string {
  const lines = [
    'New Astrateq Gadgets Demo Request',
    '',
    `Name: ${data.firstName}`,
    `Email: ${data.email}`,
    `Interest Type: ${data.interestType}`,
  ];
  if (data.company) lines.push(`Company: ${data.company}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  lines.push('', '— Sent via the Resend integration on astrateq.gadgets');
  return lines.join('\n');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const recipientEmail = process.env.CONTACT_EMAIL || 'contact@astrateq.gadgets';

  const body = req.body as ContactPayload;
  const firstName = typeof body?.firstName === 'string' ? body.firstName.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const interestType = typeof body?.interestType === 'string' ? body.interestType.trim() : '';
  const company = typeof body?.company === 'string' ? body.company.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!firstName) {
    return res.status(400).json({ error: 'Please enter your first name.' });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!interestType || !ALLOWED_INTERESTS.includes(interestType)) {
    return res.status(400).json({ error: 'Please select a valid interest type.' });
  }

  const payload: ContactPayload = { firstName, email, interestType };
  if (company) payload.company = company;
  if (message) payload.message = message;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Astrateq Gadgets <onboarding@resend.dev>',
        to: recipientEmail,
        reply_to: email,
        subject: 'New Astrateq Gadgets Demo Request',
        html: buildEmailHtml(payload),
        text: buildEmailText(payload),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', response.status, errorText);
      return res.status(502).json({
        error: 'Could not send your request. Please try again later.',
      });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({
      error: 'Could not send your request. Please try again later.',
    });
  }
}
