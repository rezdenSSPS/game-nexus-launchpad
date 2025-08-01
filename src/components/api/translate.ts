import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Translate } from '@google-cloud/translate/build/src/v2';

const translate = new Translate({
  key: process.env.GOOGLE_TRANSLATE_API_KEY
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const { text, targetLang } = request.body;

  if (!text || !targetLang) {
    return response.status(400).json({ error: 'Missing text or targetLang' });
  }

  try {
    const [translation] = await translate.translate(text, targetLang);
    return response.status(200).json({ translation });
  } catch (error) {
    console.error("Translation API error:", error);
    return response.status(500).json({ error: 'Failed to translate text' });
  }
}