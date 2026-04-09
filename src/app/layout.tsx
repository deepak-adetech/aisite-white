import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoWorkflows.AI — AI Workflow Automation Agency",
  description:
    "Custom AI agents and workflow automation for businesses. First workflow free.",
  openGraph: {
    title: "AutoWorkflows.AI — AI Workflow Automation Agency",
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
      <body className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
