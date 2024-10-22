import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./globals.css";
import TopNavigation from "./components/top_navigation";
import Footer from "./components/footer";

const poppins = Poppins({
  display:'swap',
  style:"normal",
  subsets:['latin'],
  weight:['100','200','300', '400', '500', '600', '700', '800', '900']
})

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
    <html lang="en" >
      <body className={poppins.className}>
        <TopNavigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
