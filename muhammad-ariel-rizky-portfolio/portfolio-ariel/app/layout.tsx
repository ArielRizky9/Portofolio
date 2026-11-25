import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ariel Rizky — Data & Technology Portfolio",
  description: "Portfolio of Muhammad Ariel Rizky, a student and aspiring data scientist interested in data, technology, and meaningful digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
