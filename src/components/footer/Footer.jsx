import { useTranslation } from '@/app/i18n'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Footer({ lng }) {
    const { t } = await useTranslation(lng, 'translation')
    const year = new Date().getFullYear()
    return (
        <section className='px-10'>
            <div className='border-t-[1px]  border-gray-400 border-solid' />
            <div className='flex justify-between pt-8 pb-14'>

                {/* **************************************  phone *********************** */}
                <Link href={'tel:09225074085'} className='cursor-pointer hover:bg-red-500  rounded-sm hover:scale-105  transition-all p-3 first:text-gray-700 last:text-gray-600 hover:first:text-white'>
                    <p className='mb-1 font-bold  text-sm'>{t("phone")}</p>
                    <p className='text-xs '>09225074085</p>
                </Link>

                {/* **************************************  email *********************** */}
                <Link href={'mailto:mahdiakhar@gmail.com'} className='cursor-pointer hover:bg-green-500 rounded-sm hover:scale-105  transition-all p-3 first:text-gray-700 last:text-gray-600 hover:first:text-white' >
                    <p className='mb-1 font-bold  text-sm '>{t("email")}</p>
                    <p className='text-xs'>mahdiakhar@gmail.com</p>
                </Link>
                {/* **************************************  Icons *********************** */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-3'>
                        <Image className='cursor-pointer hover:scale-105 grayscale-[1] hover:grayscale-0' alt='telegram' src={'/icons/telegram.svg'} width={26} height={26} />
                        <Image className='cursor-pointer hover:scale-105 grayscale-[1] hover:grayscale-0' alt='linkedin' src={'/icons/linkedin.svg'} width={26} height={26} />
                        <Image className='cursor-pointer hover:scale-105 grayscale-[1] hover:grayscale-0' alt='twitter' src={'/icons/twitter.svg'} width={26} height={26} />
                        <Image className='cursor-pointer hover:scale-105 grayscale-[1] hover:grayscale-0' alt='whatsapp' src={'/icons/whatsapp.svg'} width={26} height={26} />
                    </div>
                </div>
                {/* **************************************  CopyRight *********************** */}
                <div dir={'ltr'} >
                    <p className='mb-1 font-bold text-gray-700 text-sm'>CopyRight</p>
                    <p className='text-xs text-gray-600' >&#169; {year} by <span className='font-bold text-gray-950'>mahdi jeddi</span> </p>
                </div>
            </div>
        </section>
    )
}

export default Footer