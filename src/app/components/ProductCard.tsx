/* Simple reusable card for now (static). Later we can add add-to-cart props */
export interface Product {
title: string;
price: string;
img: string;
}


export default function ProductCard({ title, price, img }: Product){
return (
<article className="glass rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition">
<div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-brandInk mb-1">{title}</h4>
<div className="font-bold text-brandBrown">{price}</div>
<a href="#" className="inline-flex items-center gap-2 mt-3 bg-brandBrown text-white px-4 py-2 rounded-lg hover:bg-[#3f2723] transition">Buy Now</a>
</div>
</article>
);
}