import type { Metadata } from "next";

import "../styles/globals.css";
import { pretendard } from "../styles/font";

export const metadata: Metadata = {
  title: "Next.js Prototype",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
