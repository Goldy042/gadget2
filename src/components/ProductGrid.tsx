import ProductCard from "./ProductCard";


const products = [
{ title: 'iPhone 14 Pro', price: '$999', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop' },
{ title: 'Samsung Galaxy S Series', price: '$899', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop' },
{ title: 'MacBook Air M2', price: '$1199', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
{ title: 'HP Pavilion 14"', price: '$749', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
{ title: 'Wireless Earbuds', price: '$149', img: 'https://images.unsplash.com/photo-1518544801976-3e1883cc9696?q=80&w=1200&auto=format&fit=crop' },
{ title: 'JBL Smart Speaker', price: '$199', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop' },
];


export default function ProductGrid(){
return (
<section id="products" className="py-9">
<div className="container">
<h2 className="text-center text-2xl font-bold text-brandBrown">Shop Now</h2>
<p className="text-center text-black/60 mb-6">Add as many items as you want — the grid will auto‑flow.</p>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{products.map((p, i)=>(
<ProductCard key={i} {...p} />
))}
</div>
</div>
</section>
)
}