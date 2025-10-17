// Stripe subscription deleted webhook disabled - billing removed
import Stripe from "stripe";

export async function customerSubscriptionDeleted(event: Stripe.Event) {
  // Billing disabled - no action taken
  return;
}
