import AddToCart from "../products/[id]/parts/AddToCart";
import { Product } from "../context/CartContext";

export default function ProductCard({ product }: {product: Product}){
return (
<article className="glass rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition">
<div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
</div>
<div className="p-4">
<h4 className="font-semibold text-brandInk mb-1">{product.name}</h4>
<div className="font-bold text-primary">{product.price}</div>
<AddToCart product={product} />
</div>
</article>
);
}