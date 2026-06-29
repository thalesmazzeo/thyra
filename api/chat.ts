import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Use POST" });
  }

  const { provider, model, messages } = req.body || {};

  if (
    !messages ||
    !Array.isArray(messages) ||
    messages.length === 0 ||
    typeof messages[0].content !== "string"
  ) {
    return res.status(400).json({ success: false, error: "Missing messages" });
  }

  res.status(200).json({
    success: true,
    result: {
      content: `THYRA API funcionando. Recebi sua solicitação: ${messages[0].content}`
    }
  });
}
