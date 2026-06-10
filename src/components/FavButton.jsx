import { Heart } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const FavButton = () => {
  return (
   <Link className="group relative" href={"/cart"}>
        <Heart className='w-5 h-5 hover:text-shop_light_green hoverEffect' />
        <span className='absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs flex font-semibold items-center justify-center' >0</span>
    </Link>
  )
}

export default FavButton
