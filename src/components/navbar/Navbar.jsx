
import { useTranslation } from '@/app/i18n'
import { languages } from '@/app/i18n/setting'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import MyDetails from './MyDetails'


async function Navbar({ lng }) {

  const { t } = await useTranslation(lng, 'navbar')
  return (
    <section className='w-full bg-white flex justify-between items-center px-10'>
      {/* ******************************* right */}
      <MyDetails lng={lng} />

      {/* ******************************* left */}
      <div className='flex justify-between items-center '>
      <div className='me-8'>
          {languages.filter((l) => lng !== l).map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && (' or ')}
                <Link className='text-lg text-green-500  hover:text-green-300' href={`/${l}`}>
                  {l}
                </Link>
              </span>
            )
          })}
        </div>

        <ul className='flex gap-2 justify-center items-center'>

          <li className='hover:scale-105 p-1'><Link className='text-xs text-gray-600' href={'/resume'}>{t("resume")}</Link></li>

          {/* div for horizontal lines */}
          <div className='border-s-[1px] h-6 border-solid border-gray-300' />
          {/*  */}

          <li className='hover:scale-105 p-1'><Link className='text-xs text-gray-600' href={'/projects'}>{t("projects")}</Link></li>

          {/* div for horizontal lines */}
          <div className='border-s-[1px] h-6 border-solid border-gray-300' />
          {/*  */}

          <li className='hover:scale-105 p-1'><Link className='text-xs text-gray-600' href={'/contact-me'}>{t("contact")}</Link></li>

        </ul>

      </div>
 

    </section>
  )
}

export default Navbar