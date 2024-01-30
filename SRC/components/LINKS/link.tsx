import Link, { LinkProps } from 'next/link'
import React from 'react'

type Props = {
children : React.ReactNode 
other : LinkProps
}

function A({children , other}:Props) {
  return (
    <Link {...other}>{children}</Link>
  )
}

export default A