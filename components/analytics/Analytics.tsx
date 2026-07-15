import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
