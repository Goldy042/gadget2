"use client";
import { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/10">
<div className="container h-[64px] flex items-center justify-between">
<div className="flex items-center gap-2 font-bold text-brandBrown">
<span className="w-2.5 h-2.5 rounded-full bg-brandGold" />
Kel's Gadget Hub
</div>
<nav className={`glass rounded-xl shadow-soft md:shadow-none md:bg-transparent md:border-0 md:static md:p-0 md:flex md:items-center md:gap-5 ${open ? 'absolute right-4 top-[72px] p-3' : 'hidden'} md:block`}>
<a href="#features" className="px-3 py-2 rounded-lg hover:bg-black/5">Features</a>
<a href="#products" className="px-3 py-2 rounded-lg hover:bg-black/5">Shop Now</a>
<a href="#testimonials" className="px-3 py-2 rounded-lg hover:bg-black/5">Testimonials</a>
<a href="#contact" className="px-3 py-2 rounded-lg hover:bg-black/5">Contact</a>
</nav>
<button aria-label="Menu" onClick={()=>setOpen(v=>!v)} className="md:hidden inline-flex flex-col gap-1">
<span className="w-6 h-0.5 bg-black"/>
<span className="w-6 h-0.5 bg-black"/>
<span className="w-6 h-0.5 bg-black"/>
</button>
</div>
</header>
);
}