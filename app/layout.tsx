import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spray Foam Insurance | Call 844-967-5247",
  description:
    "Spray Foam Insurance - Supporting Your Success, Beyond the Policy. Specialized insurance solutions for spray foam contractors. Call 844-967-5247 (844-WORK-247).",
  keywords: [
    "spray foam insurance",
    "spray foam contractor insurance",
    "general liability insurance",
    "workers compensation",
    "commercial auto insurance",
    "surety bonds",
    "environmental liability",
    "spray foam rig insurance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-700 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
