import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoWorkflows.AI — We Build AI That Works While You Sleep",
  description:
    "Custom AI agents and workflow automation for businesses that want to scale without scaling headcount. First workflow free.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "business automation",
    "AI agency",
    "custom AI",
  ],
  openGraph: {
    title: "AutoWorkflows.AI — We Build AI That Works While You Sleep",
    description:
      "Custom AI agents and workflow automation for businesses. First workflow free.",
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
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
