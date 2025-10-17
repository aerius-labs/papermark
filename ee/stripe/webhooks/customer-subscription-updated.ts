// Stripe subscription webhook disabled - billing removed
import Stripe from "stripe";

export async function customerSubscriptionUpdated(event: Stripe.Event) {
  // Billing disabled - no action taken
  return;
}
