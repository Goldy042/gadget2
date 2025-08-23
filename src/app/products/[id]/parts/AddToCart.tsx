// src/app/product/[id]/parts/AddToCart.tsx
'use client'
import { Product } from '@/app/context/CartContext'
import { useCart } from '@/app/context/CartContext'

export default function AddToCart({product}:{product:Product}){
  const { add, open } = useCart()
  return (
    <button onClick={()=>{ add(product,1); open(); }} className="mt-4 w-full py-3 rounded-xl bg-primary hover:bg-secondary transition-colors duration-500 cursor-pointer text-white font-semibold">
      Add to Cart
    </button>
  )
}
