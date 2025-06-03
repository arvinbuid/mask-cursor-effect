import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mask Cursor Effect",
  description: "Mask Cursor Effect created with Next.js and Motion (Framer Motion)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
