
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header.jsx";
import Navbar from "../app/components/Navbar.jsx";
import Footer from "../app/components/Footer.jsx";
import icon from "../app/icon.ico";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cylas AG",
  description: "Gravier-und Lasertechnolgie für den internationalen Markt.",
  icon: icon,
  layout: "Tina Schmidtbauer",
  programming: "Tina Schmidtbauer",
  content: "Reiner Boes",
  keywords: "Graviermaschine, DrumFire, FlexFire, Lasermaschine, internationaler Markt, Trommelgravierer, Stempel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>    
      <div className="rahmen-container">
     <Header> </Header>
      <Navbar></Navbar>
      <div className="abstand-unten"> {children} </div>
     
     <Footer></Footer>
      </div>
      </body>
    </html>
  );
}
