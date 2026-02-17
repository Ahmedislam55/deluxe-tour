import { Playfair_Display, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Delux Tours Egypt",
  description: "Experience the luxury of Egypt with our premium tours.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${greatVibes.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${dmSans.className} antialiased bg-stone-50 text-stone-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
