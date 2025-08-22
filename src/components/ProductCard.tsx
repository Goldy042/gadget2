'use client'
import Link from 'next/link'
import { Product } from '../context/CartContext'
import { useCart } from '../context/CartContext'

export default function ProductCard({product}:{product:Product}){
  const { add, open } = useCart()
  return (
    <article className="rounded-2xl glass shadow-glass overflow-hidden hover:-translate-y-1 transition">
      <Link href={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition" />
        </div>
      </Link>
      <div className="p-4">
        <h4 className="font-semibold text-[color:var(--brown)]">{product.name}</h4>
        <div className="text-sm text-neutral-600">${product.price.toFixed(2)}</div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link href={`/product/${product.id}`} className="py-2 rounded-xl bg-white/70 text-center">Details</Link>
          <button
            onClick={()=>{ add(product,1); open(); }}
            className="py-2 rounded-xl bg-[color:var(--brown)] text-white font-semibold"
          >Add to Cart</button>
        </div>
      </div>
    </article>
  )
}
