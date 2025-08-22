// src/context/CartContext.tsx
'use client'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Product = { id:string; name:string; price:number; image:string }
export type CartLine = Product & { qty:number }

type CartCtx = {
  lines: CartLine[]
  count: number
  total: number
  add: (p:Product, qty?:number)=>void
  dec: (id:string)=>void
  remove: (id:string)=>void
  clear: ()=>void
  isOpen: boolean
  open: ()=>void
  close: ()=>void
  toggle: ()=>void
}

const Ctx = createContext<CartCtx | null>(null)
const STORAGE_KEY = 'kels-cart-v1'

export function CartProvider({children}:{children:React.ReactNode}){
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setOpen] = useState(false)

  // Load from localStorage (client only)
  useEffect(()=>{
    try{
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
      if(raw){
        const data = JSON.parse(raw) as CartLine[]
        if(Array.isArray(data)) setLines(data)
      }
    }catch{}
  },[])

  // Save to localStorage
  useEffect(()=>{
    try{
      if(typeof window !== 'undefined'){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
      }
    }catch{}
  },[lines])

  const add: CartCtx['add'] = (p, qty = 1) => {
    setLines(prev => {
      const i = prev.findIndex(l => l.id === p.id)
      if(i > -1){
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: Math.min(copy[i].qty + qty, 99) }
        return copy
      }
      return [...prev, { ...p, qty }]
    })
  }

  const dec: CartCtx['dec'] = (id) => {
    setLines(prev => prev.flatMap(l => l.id === id ? (l.qty > 1 ? [{...l, qty:l.qty-1}] : []) : [l]))
  }
  const remove: CartCtx['remove'] = (id) => setLines(prev => prev.filter(l => l.id !== id))
  const clear: CartCtx['clear'] = () => setLines([])

  const count = useMemo(()=> lines.reduce((a,b)=> a + b.qty, 0), [lines])
  const total = useMemo(()=> lines.reduce((a,b)=> a + b.price * b.qty, 0), [lines])

  const value: CartCtx = {
    lines, count, total, add, dec, remove, clear,
    isOpen, open: ()=>setOpen(true), close: ()=>setOpen(false), toggle: ()=>setOpen(v=>!v)
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart(){
  const v = useContext(Ctx)
  if(!v) throw new Error('useCart must be used within CartProvider')
  return v
}
