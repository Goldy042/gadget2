export default function Testimonials(){
const items = [
{ text: '“Got my iPhone in 24 hours. Packaging was neat and the phone is spotless.”', name: 'Ada, Lagos' },
{ text: '“Great prices and genuine products. My laptop battery life is insane.”', name: 'Tunde, Abuja' },
{ text: '“Customer service is 10/10. They helped me pick the right earbuds.”', name: 'Sarah, Port Harcourt' },
];
return (
<section id="testimonials" className="py-9">
<div className="container">
<h2 className="text-center text-2xl font-bold text-brandBrown mb-6">What Customers Say</h2>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
{items.map((t,i)=> (
<div key={i} className="glass rounded-xl p-5 shadow-soft">
<div className="text-brandGold text-lg mb-1">★★★★★</div>
<p className="text-black/80">{t.text}</p>
<div className="mt-2 font-semibold text-brandBrown">— {t.name}</div>
</div>
))}
</div>
</div>
</section>
)
}