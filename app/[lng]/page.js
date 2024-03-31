import Image from "next/image";
import C from "@/src/components";
import { useTranslation } from "../i18n";
import MainPage from "./MainPage";

export default async function Home({params : {lng}}) {

  const { t } = await useTranslation(lng)
  return (
    <main className="w-screen h-screen bg-slate-200 ">
      {/* TOP SECTION */}
        <C.Navbar lng={lng} />
      {/* ----main----- */}
      <MainPage lng={lng}/>

      {/* ----footer----- */}

    </main>
  );
}
