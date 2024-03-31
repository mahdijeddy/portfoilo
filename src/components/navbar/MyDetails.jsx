import { useTranslation } from '@/app/i18n'
import React from 'react'

async function MyDetails({lng}) {
    
  const { t } = await useTranslation(lng, 'navbar')

  return (
    <div className='flex justify-center items-center gap-2 py-1'>
    {/* circle div for design */}
    <div className='rounded-full w-6 h-6 bg-green-100  border-green-600 border-2 border-solid '/>
    <h3 className='text-2xl text-gray-600'>{t('name')}</h3>
    <p className='text-green-600'>{t("frontDev")}</p>
  </div>
  )
}

export default MyDetails