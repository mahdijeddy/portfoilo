import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../i18n'

async function MainPage({lng}) {
  const { t } = await useTranslation(lng, 'translation')
  const { t : tNavbar } = await useTranslation(lng, 'navbar')
  return (
    <section className='flex  justify-center items-center flex-1 max-w-7xl mx-auto'>
        {/* ************ left section ******* */}
        <div className='flex-1  justify-end flex overflow-hidden'>
          <Link href={'/resume'}>
          <img alt='me | mahdi jeddi' src={'/m.PNG'} width={400} height={400} className='rounded-full mx-4 grayscale-[1] hover:grayscale-0 hover:scale-105 transition-all cursor-pointer'/>
          </Link>
        </div>
        {/* ************ Right section ******* */}
        <div className='flex-1 bg-slate-100 p-2 hover:bg-green-50 cursor-help'>
           <div>
           <h3 className='text-6xl text-green-950'>{t('hi')}</h3>
            <h5 className='text-3xl my-3 text-green-950'>{t('about')} :</h5>
            <p className='my-4 text-gray-500'>{t('about-text')}</p>
           </div>
            <br />

           <div className='flex gap-4'>
              <div className='rounded-full h-24 w-24 bg-amber-400 flex justify-center items-center hover:bg-amber-300 transition-all cursor-pointer'>
                <Link href={"/resume"} className='mx-3 text-white'>{tNavbar('resume')}</Link>
             </div>
              <div className='rounded-full h-24 w-24 bg-red-700 flex justify-center items-center hover:bg-red-600 transition-all cursor-pointer'>
                <Link href={"/projects"} className='mx-3 text-white'>{tNavbar("projects")}</Link>
             </div>
              <div className='rounded-full h-24 w-24 bg-sky-600 flex justify-center items-center hover:bg-sky-500 transition-all cursor-pointer'>
                <Link href={"/contact"} className='mx-3 text-white'>{tNavbar("contact")}</Link>
             </div>
           </div>
        </div>
    </section>
  )
}

export default MainPage