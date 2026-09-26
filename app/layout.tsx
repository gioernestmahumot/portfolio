import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gio Ernest Mahumot — Full-Stack Developer",
  description: "Gio Ernest Mahumot builds responsive web applications, business systems, and AI-powered software solutions."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
