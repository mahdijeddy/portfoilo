import Image from "next/image";
import C from "@/src/components";
import { useTranslation } from "../i18n";
import MainPage from "./MainPage";

export default async function Home({params : {lng}}) {

  const { t } = await useTranslation(lng)
  return (
    <main className="w-full h-screen flex flex-col  select-none">
      {/* TOP SECTION */}
        <C.Navbar lng={lng} />
      {/* ----main----- */}
      <MainPage lng={lng}/>

      {/* ----footer----- */}
    <C.Footer lng={lng}/>
    </main>
  );
}
