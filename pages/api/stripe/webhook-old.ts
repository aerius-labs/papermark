// Stripe webhook (old) disabled - billing removed
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({ message: "Stripe webhooks disabled" });
}
