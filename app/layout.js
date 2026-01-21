import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>
        {children}

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
