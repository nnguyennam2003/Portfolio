import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Minh Nam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth transition-colors duration-500" data-theme="">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased font-outfit leading-8 overflow-x-hidden !transition-colors duration-500 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
