'use client'
import { ShoppingBagIcon } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartButton() {
  const { count, toggle } = useCart()

  return (
    <button
      onClick={toggle}
      aria-label="Open cart"
      className="fixed z-50 top-4 right-4 glass shadow-glass rounded-full p-3 flex items-center justify-center hover:translate-y-[-2px] transition transform"
    >
      {/* Cart Icon */}
      <ShoppingBagIcon className="w-6 h-6 text-[color:var(--brown)]" />

      {/* Badge (only show when > 0) */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-[var(--gold)] text-[#2b1b16]">
          {count}
        </span>
      )}
    </button>
  )
}
