"use client"

import { AlignLeft, SidebarOpen } from 'lucide-react'
import React, { useState } from 'react'
import SidebarMenu from './SidebarMenu'

const MobileLogoMenu = () => {

    const [isSideBarOpen, setisSideBarOpen] = useState(false)

  return (
    <>
    <button className='flex'>
        <AlignLeft onClick={() => setisSideBarOpen(!isSideBarOpen)} className=' hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer ' />
        <SidebarMenu isOpen={isSideBarOpen} onClose={() => setisSideBarOpen(false)} />
    </button>
    </>
  )
}

export default MobileLogoMenu
