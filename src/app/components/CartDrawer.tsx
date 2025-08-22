'use client'
import { useCart } from "../context/CartContext"
import React from "react"

export default function CartDrawer({ open, onClose } : {open:boolean, onClose:()=>void}) {
const { lines, total, clear, remove, dec, add } = useCart()
    return (
        <>
            <div className="mt-3 flex-1 overflow-auto drawer-scroll space-y-3 pr-1">
                {lines.length === 0 && (
                    <p className="text-sm text-neutral-600">Your cart is empty. Let’s add something cute 🤎</p>
                )}


                {lines.map(line => (
                    <div key={line.id} className="flex gap-3 items-center p-2 rounded-xl glass">
                        <img src={line.image} alt={line.name} className="w-16 h-16 object-cover rounded-lg"/>
                        <div className="flex-1">
                            <div className="font-semibold text-sm">{line.name}</div>
                            <div className="text-xs text-neutral-600">${line.price.toFixed(2)}</div>
                            <div className="mt-2 inline-flex items-center gap-2">
                            <button onClick={()=>dec(line.id)} className="w-8 h-8 rounded-md bg-white/70">-</button>
                            <span className="min-w-6 text-center">{line.qty}</span>
                            <button onClick={()=>add(line,1)} className="w-8 h-8 rounded-md bg-white/70">+</button>
                            </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                            <div className="text-sm font-semibold">${(line.price*line.qty).toFixed(2)}</div>
                            <button onClick={()=>remove(line.id)} className="text-xs text-red-600">Remove</button>
                        </div>
                    </div>
                ))}
            </div>


            <footer className="pt-3 border-t border-white/40">
            <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-neutral-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
            <button onClick={clear} className="flex-1 py-2 rounded-xl bg-white/70">Clear</button>
            <a href="/checkout" className="flex-1 py-2 rounded-xl btn-brand text-center font-semibold">Checkout</a>
            </div>
            </footer>
        </>
)
}