import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ethereal Chat",
  description: "send Ether and attach your personal message securely on the blockchain. Each transaction records your message forever. Simple, secure, and memorable!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
        <Footer/>
      </body>
    </html>
  );
}
