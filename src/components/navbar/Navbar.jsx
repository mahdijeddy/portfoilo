
import { useTranslation } from '@/app/i18n'
import { languages } from '@/app/i18n/setting'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'


async function Navbar({ lng }) {

  const { t } = await useTranslation(lng, 'navbar')

  return (
    <section className='w-full h-5 bg-white flex justify-between items-center px-10'>
      <div>Mahdi Jeddi oooo</div>
      <div>
        <div>1</div>
        <div>2</div>
        <Trans i18nKey="languageSwitcher" t={t}>
          Switch from <strong>{{ lng }}</strong> to:{' '}
        </Trans>
        <div>___  {t('test')} ____</div>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}

<div>_______</div>
      </div>
    </section>
  )
}

export default Navbar