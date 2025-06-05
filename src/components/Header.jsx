import React from 'react'
import {Menu} from "lucide-react"

export default function Header() {
  return (
    <header className="hero-header flex items-center justify-between">
      <div className="brand-name">
        <h1 className="text-xl md:text-2xl font-bold text-pink-500 text-stroke tracking-[0.1em]">
          Y2Z Travel
        </h1>
      </div>
      <div className="menu-bar block lg:hidden">
        <Menu size={24} className='cursor-pointer'/>
      </div>
    </header>
  );
}
