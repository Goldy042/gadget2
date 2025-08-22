"use client";
import { useEffect, useState } from 'react';
import { Slides } from '../types/Carousel';

export default function Carousel({ slides } : {slides: Slides[]}) {
  const [index, setIndex] = useState(0);
  const total = slides?.length || 0;
  const dots = Array.from({ length: total }, (_, i) => i);

  useEffect(() => {
    if (total === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden">
      <div className="h-[520px] grid place-items-stretch">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 grid md:grid-cols-1 lg:grid-cols-2 items-center gap-6 px-4 md:px-6 container transition-all duration-700 ${i === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[.98] z-0'}`}
            aria-hidden={i !== index}
          >
            <div className="glass rounded-2xl p-6 shadow-soft">
              <div className="inline-flex items-center gap-2 text-brandBrown font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-brandGold"/> {s.tag}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brandInk mb-3">{s.title}</h1>
              <p className="text-brandBrown/80 mb-4">{s.text}</p>
              <a href={s.href} className="inline-flex items-center gap-2 bg-gradient-to-br from-brandGold to-amber-200 text-brandBrown font-semibold px-5 py-3 rounded-xl shadow-soft hover:brightness-110 transition">{s.cta}</a>
            </div>
            <div className="flex items-center justify-center">
              <div className="glass rounded-2xl shadow-soft overflow-hidden w-full max-w-[520px] aspect-[4/3] grid place-items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s?.alt || s.title} className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
        {dots.map((d) => (
          <button
            key={d}
            onClick={()=>setIndex(d)}
            className={`w-2.5 h-2.5 rounded-full ${d === index ? 'bg-brandBrown' : 'bg-black/30'}`}
            aria-label={`Go to slide ${d+1}`}
          />
        ))}
      </div>
    </section>
  );
}