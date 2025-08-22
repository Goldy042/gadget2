// src/app/product/[id]/page.tsx
import { products } from '../../../data/products'
import { notFound } from 'next/navigation'
import AddToCart from './parts/AddToCart'

export default function ProductDetail({ params:{ id } }:{ params:{ id:string } }){
  const product = products.find(p=>p.id===id)
  if(!product) return notFound()
  return (
    <div className="px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        <div className="glass rounded-2xl overflow-hidden shadow-glass">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
        </div>
        <div className="glass rounded-2xl p-6 shadow-glass">
          <h1 className="text-3xl font-bold text-[color:var(--brown)]">{product.name}</h1>
          <div className="mt-2 text-xl font-semibold">${product.price.toFixed(2)}</div>
          <p className="mt-3 text-neutral-700">Premium quality gadget with warranty and fast delivery.</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}
