'use client'
import { useCart } from '../context/CartContext'


export default function CartButton(){
const { count, toggle } = useCart()
return (
<button
onClick={toggle}
aria-label="Open cart"
className="fixed z-50 top-4 right-4 glass shadow-glass rounded-full px-4 py-2 flex items-center gap-2 hover:translate-y-[-2px] transition transform"
>
<span className="text-xl">🛒</span>
<span className="text-sm font-semibold text-[color:var(--brown)]">Cart</span>
<span className="ml-1 inline-flex items-center justify-center min-w-6 h-6 text-xs font-bold rounded-full bg-[var(--gold)] text-[#2b1b16] px-2">{count}</span>
</button>
)
}