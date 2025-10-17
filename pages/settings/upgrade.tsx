// Upgrade page disabled - redirects to general settings
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UpgradePage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/settings/general");
  }, [router]);
  
  return null;
}
