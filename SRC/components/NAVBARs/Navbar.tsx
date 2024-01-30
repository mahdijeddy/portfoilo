"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import S from '@/SRC/utils/strings'
import Link from 'next/link'
import './navbar.css'

function Navbar() {
const [val, setVal] = useState({
    x:-50 , y:-10 , opacity : 0
})
    useEffect(() => {
        initializer()
    }, [])
    
    function initializer (){
        setVal({x : 0 , y : 15 , opacity : 1})
    }
    return (
        <motion.nav
            animate ={{x : val.x , y:val.y , opacity:val.opacity}}
            whileHover={{scale:1.02}}
       
            className='w-full  justify-center flex select-none' 
        >
            <div className='shadow'>
            <ul className='list_container  list-none flex gap-4 justify-center py-2  bg-slate-200 px-4 rounded-sm '>
                <motion.li 
                whileHover={{
                    y:-4,
                    backgroundColor : "#ec650a"
                }}
                className=''>
                    <Link href={""} >{S.home}</Link>
                </motion.li>
                <li className=''>
                    <Link href={""} >{S.about_me}</Link>
                </li>
                <li className=''>
                    <Link href={""} >{S.contact_me}</Link>
                </li>
            </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar