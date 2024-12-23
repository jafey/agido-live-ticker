import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agido Live Ticker",
  description: "Agido Live Ticker App",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
    <body>
    {children}
    </body>
    </html>
  );
}
