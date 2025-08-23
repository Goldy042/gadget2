export default function Features(){
return (
<section id="features" className="py-8 bg-gray-50">
<div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{[
{ title: 'Genuine Products', desc: 'All gadgets are original and come with warranty support.' },
{ title: 'Fast Delivery', desc: 'Get your order quickly and safely across town or nationwide.' },
{ title: 'Secure Payments', desc: 'Checkout with trusted gateways and multiple payment options.' },
{ title: 'Friendly Support', desc: 'After‑sales service and easy returns when you need help.' },
].map((f, i) => (
<div key={i} className="glass rounded-xl p-4 shadow-soft hover:shadow-lift transition">
<h3 className="text-primary font-semibold mb-1">{f.title}</h3>
<p className="text-sm text-black/60">{f.desc}</p>
</div>
))}
</div>
</section>
)
}