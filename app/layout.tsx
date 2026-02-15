import type { Metadata } from "next";
import Providers from "./components/Providers";
import "./globals.css";
import TopNav from "./components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Next Match",
  description: "Dating App for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className="flex flex-col min-h-[calc(100vh-80px)] pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}


