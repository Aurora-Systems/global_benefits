import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./globals.css";
import TopNavigation from "./components/top_navigation";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Global Benefits PBC",
  description: "Expert Trade Financial Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopNavigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
