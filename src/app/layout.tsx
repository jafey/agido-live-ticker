"use client"

import "./globals.css";
import { Provider } from "react-redux";
import store from "@/app/store/store";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="de">
      <body>
      {children}
      </body>
      </html>
    </Provider>
  );
}
