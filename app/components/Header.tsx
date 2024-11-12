import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between px-5 py-3 text-white bg-black'>
        <h2 className='flex items-center gap-1'>
            <span>P</span>
            <span>u</span>
            <span>r</span>
            <span>e</span>
            <span>g</span>
            <span>l</span>
            <span>o</span>
            <span>w</span>
        </h2>
        <h4 className='uppercase hidden lg:block'>Unlock Clear, Glowing Skin Naturally!</h4>
        <Link href="#Contact" className='bg-white text-black text-sm lg:text-[16px] px-4 py-1 block'>Get The Guide!</Link>
    </header>
  )
}

export default Header