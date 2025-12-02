import { Poppins ,  } from "next/font/google";
import "./globals.css";
import { AppColors } from "@/components/AppColors";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});





export const metadata = {
  title: "Vecura",
  description: "All in one Information Gathering Tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pop.className} `} style={{backgroundColor:AppColors.background.main }}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
