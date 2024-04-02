import { useTranslation } from '@/app/i18n'
import React from 'react'

async function Footer({lng}) {
    const { t } = await useTranslation(lng, 'translation')
    const year = new Date().getFullYear()
  return (
    <section className='px-10'>
        <div className='border-t-[1px]  border-gray-400 border-solid'/>
       <div className='flex justify-between pt-10 pb-14'>
       <div >
        <p className='mb-1 font-bold text-gray-700 text-sm'>{t("phone")}</p>
        <p className='text-xs text-gray-600'>09225074085</p>
       </div>
        <div>
        <p className='mb-1 font-bold text-gray-700 text-sm'>{t("email")}</p>
        <p className='text-xs text-gray-600'>mahdiakhar@gmail.com</p>
        </div>
        <div>
        <p className='mb-1 font-bold text-gray-700 text-sm'>{t("follow")}</p>
        <p className='text-xs text-gray-600'>mahdiakhar@gmail.com</p>
        </div>
        <div>
            <p className='mb-1 font-bold text-gray-700 text-sm'>CopyRight</p>
            <p className='text-xs text-gray-600'>&#169; {year} by <span className='font-bold text-gray-950'>mahdi jeddi</span> </p>
        </div>
       </div>
    </section>
  )
}

export default Footer