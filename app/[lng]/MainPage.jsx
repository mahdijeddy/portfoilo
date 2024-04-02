import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MainPage({lng}) {
  return (
    <section className='flex  justify-center items-center flex-1 max-w-7xl mx-auto'>
        {/* ************ left section ******* */}
        <div className='flex-1  justify-end flex '>
            <img alt='me | mahdi jeddi' src={'/m.PNG'} width={400} height={400} className='rounded-full mx-4 grayscale-[1]'/>
        </div>
        {/* ************ Right section ******* */}
        <div className='flex-1 bg-slate-300 p-2'>
           <div>
           <h3 className='text-8xl'>Hello</h3>
            <h5 className='text-3xl'>a bit about me</h5>
            <p>im a frontend developer . + .....</p>
           </div>
            <br />

           <div className='flex gap-4'>
              <div className='rounded-full h-28 w-28 bg-amber-400 flex justify-center items-center'>
                <Link href={"/"} className='mx-3'>resume</Link>
             </div>
              <div className='rounded-full h-28 w-28 bg-red-700 flex justify-center items-center'>
                <Link href={"/"} className='mx-3'>projects</Link>
             </div>
              <div className='rounded-full h-28 w-28 bg-sky-600 flex justify-center items-center'>
                <Link href={"/"} className='mx-3'>contact</Link>
             </div>
           </div>
        </div>
    </section>
  )
}

export default MainPage