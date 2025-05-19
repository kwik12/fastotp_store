import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;

  switch (action) {
    case 'deposit':
      return res.status(200).json({ success: true, balance: 100 });
    case 'deduct':
      return res.status(200).json({ success: true, balance: 90 });
    default:
      return res.status(400).json({ error: 'Invalid wallet action' });
  }
}
