'use client'
import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../../context/CartContext'
declare global { interface Window { PaystackPop:any } }

export default function Checkout(){
  const { lines, total, clear } = useCart()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // Load Paystack script once
  useEffect(()=>{
    if (window.PaystackPop) return
    const s = document.createElement('script')
    s.src = 'https://js.paystack.co/v1/inline.js'
    s.async = true
    document.body.appendChild(s)
  },[])

  const pay = () => {
    if(!window.PaystackPop){ alert('Payment library not loaded yet'); return }
    if(!email){ alert('Enter your email'); return }

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email,
      amount: Math.max(100, Math.round(total * 100 * 1600)), // NGN kobo (rough USD→NGN conv for demo)
      currency: 'NGN',
      metadata: { custom_fields: [
        { display_name:'Name', variable_name:'name', value:name },
        { display_name:'Phone', variable_name:'phone', value:phone }
      ]},
      callback: function(response:any){
        alert('Payment complete! Ref: ' + response.reference)
        clear()
      },
      onClose: function(){ console.log('Payment closed') }
    })
    handler.openIframe()
  }

  return (
    <div className="min-h-[70vh] px-4 pt-24 pb-12">
      <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 glass rounded-2xl p-6 shadow-glass">
          <h1 className="text-2xl font-bold text-[color:var(--brown)] mb-4">Checkout</h1>
          <div className="grid gap-3">
            <input className="glass rounded-xl px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="glass rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input className="glass rounded-xl px-3 py-2" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
          </div>
          <button onClick={pay} className="mt-4 w-full py-3 rounded-xl btn-brand font-semibold">Pay with Paystack</button>
          <p className="text-xs text-neutral-600 mt-2">Set <code>NEXT_PUBLIC_PAYSTACK_KEY</code> in your <code>.env.local</code> (use test key while developing).</p>
        </div>
        <aside className="md:col-span-2 glass rounded-2xl p-6 shadow-glass h-fit">
          <h2 className="font-semibold text-[color:var(--brown)] mb-3">Order Summary</h2>
          <div className="space-y-3 max-h-64 overflow-auto">
            {lines.map(l=> (
              <div key={l.id} className="flex items-center gap-3">
                <img src={l.image} className="w-12 h-12 rounded-lg object-cover"/>
                <div className="flex-1 text-sm">
                  <div className="font-medium">{l.name}</div>
                  <div className="text-neutral-600">Qty {l.qty}</div>
                </div>
                <div className="text-sm font-semibold">${(l.price*l.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
