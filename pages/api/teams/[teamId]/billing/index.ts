// Billing API disabled
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({ message: "Billing disabled - all features unlimited" });
}
