import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function HomePage() {
return (
<main>
<Navbar />
<HeroCarousel />
<Features />
<ProductGrid />
<Testimonials />
<Footer />
</main>
);
}