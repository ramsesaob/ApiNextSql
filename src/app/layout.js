import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`bg-dark text-white-50 ${inter.className}`}>
        <Header />
          {children}
        <Footer />
        <BootstrapClient/>
      </body>
    </html>
  );
}
