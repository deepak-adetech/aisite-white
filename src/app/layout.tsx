import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoWorkflows.AI — AI Workflow Automation Agency",
  description:
    "We build custom AI agents and automations for businesses. First workflow automated free, no obligation. AI is all we do.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "business automation",
    "AI agency",
  ],
  openGraph: {
    title: "AutoWorkflows.AI — AI Workflow Automation Agency",
    description:
      "We build custom AI agents and automations for businesses. First workflow automated free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
