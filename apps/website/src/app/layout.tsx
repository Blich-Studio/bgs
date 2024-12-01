import "../styles/globals.scss";
import '../styles/layout.scss';
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
        <main className='layout'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
