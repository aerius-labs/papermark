// Stripe checkout webhook disabled - billing removed
import Stripe from "stripe";

export async function checkoutSessionCompleted(
  event: Stripe.Event,
  isOldAccount: boolean = false,
) {
  // Billing disabled - no action taken
  return;
}
