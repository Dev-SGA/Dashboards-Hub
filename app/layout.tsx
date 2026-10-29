import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGA Dashboards Hub",
  description: "Central hub for SGA athlete performance dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
