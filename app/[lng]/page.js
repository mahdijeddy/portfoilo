import Image from "next/image";
import C from "@/src/components";
import { useTranslation } from "../i18n";

export default async function Home({params : {lng}}) {

  const { t } = await useTranslation(lng)
  return (
    <main className="w-screen h-screen bg-slate-200 ">
       {/* <h1>{t('title')}</h1> */}
      {/* TOP SECTION */}
      <div>
        <C.Navbar lng={lng} />
      </div>
      {/* --------- */}
    </main>
  );
}
