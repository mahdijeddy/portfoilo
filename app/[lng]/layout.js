import { Vazirmatn } from "next/font/google"; // add vazir font
import "./globals.css"; // global css
import '@/public/styles/reset.css' // reset css file 

// i18n
import { dir } from "i18next";
import {languages} from '@/app/i18n/setting'

export const metadata = {
  title: "mahdi jeddi",
  description: "mahdijeddi portfoilo - web-developer android developer front-end developer برنامه نویس برنامه نویس-اندروید اندرویدکار فرانت اند کار ",
};


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


const Vazir = Vazirmatn({ subsets: ["latin"] }); // vazir fonts from google

export default function RootLayout({ children , params:{lng} }) {
  return (
    <html lang={lng} dir={dir(lng)} >
      <body className={Vazir.className} >
        {children}
      </body>
    </html>
  );
}
