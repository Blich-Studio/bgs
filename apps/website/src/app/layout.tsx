import "../styles/globals.scss";
import { Footer, Header, Navbar } from "@bgs-website/components";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Blich Game Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
