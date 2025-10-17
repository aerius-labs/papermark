// Billing page disabled - redirects to general settings
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function BillingPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/settings/general");
  }, [router]);
  
  return null;
}
