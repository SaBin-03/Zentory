import { Heart } from 'lucide-react'
import React from 'react'

const AddToFav = () => {
  return (
    <div className='absolute top-2 right-2 z-10'>
        <button className='p-2.5 rounded-full hover:bg-shop_btn_dark_green hover:text-white hoverEffect cursor-pointer bg-white'>

        <Heart size={15} />
        </button>
    </div>
  )
}

export default AddToFav
