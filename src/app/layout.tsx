import type { Metadata } from "next";

import "./styles/globals.css";
import MswProvider from "./providers/msw-provider";
import QueryClientProvider from "./providers/query-client-provider";
import { pretendard } from "./styles/font";

export const metadata: Metadata = {
  title: "Next.js Prototype",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body>
        <MswProvider>
          <QueryClientProvider>{children}</QueryClientProvider>
        </MswProvider>
      </body>
    </html>
  );
};

export default RootLayout;
