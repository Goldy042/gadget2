// src/app/product/[id]/parts/AddToCart.tsx
'use client'
import { Product } from '../../../../context/CartContext'
import { useCart } from '../../../../context/CartContext'

export default function AddToCart({product}:{product:Product}){
  const { add, open } = useCart()
  return (
    <button onClick={()=>{ add(product,1); open(); }} className="mt-4 w-full py-3 rounded-xl bg-[color:var(--brown)] text-white font-semibold">
      Add to Cart
    </button>
  )
}
