import ProductCard from "./ProductCard";
import { products } from "../data/products";
export default function ProductGrid(){
return (
<section id="products" className="bg-gray-50 py-9">
<div className="container">
<h2 className="text-center text-2xl font-bold text-primary">Shop Now</h2>
<p className="text-center text-black/60 mb-6">Add as many items as you want — the grid will auto‑flow.</p>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{products.map((p, i)=>(
<ProductCard key={i} product={p} />
))}
</div>
</div>
</section>
)
}