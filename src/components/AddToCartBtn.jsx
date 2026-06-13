
import { ShoppingCartIcon } from 'lucide-react'
import React from 'react'

const AddToCartBtn = ({ itemProd }) => {

    const isOutOfStock = itemProd?.stock === 0;

    const submitHandler = async () => {
        console.log("Add cart")
    }

  return (
    <div>
        <button
        disabled={isOutOfStock}
            type="button"
            className="flex px-2 py-1 items-center justify-center rounded-lg bg-gray-900 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Add to cart"
          >
        {isOutOfStock ? "Out of stock" : <ShoppingCartIcon />}
          </button>
    </div>
  )
}

export default AddToCartBtn
