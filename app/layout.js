import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MyContext } from "@/context/MyContext";

const jetbrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainMono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainMono.variable}>
        <MyContext>
          <TopNav />
          <Navbar />
          {children}
          <Footer />
        </MyContext>
      </body>
    </html>
  );
}
