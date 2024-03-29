import { Vazirmatn } from "next/font/google";
import "./globals.css";

const Vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "mahdi jeddi",
  description: "mahdijeddi portfoilo - web-developer android developer front-end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Vazir.className}>{children}</body>
    </html>
  );
}
