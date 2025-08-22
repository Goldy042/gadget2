import Navbar from "@/app/components/Navbar";
import HeroCarousel from "@/app/components/HeroCarousel";
import Features from "@/app/components/Features";
import ProductGrid from "@/app/components/ProductGrid";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import { slides } from "./data/Carousel";


export default function HomePage() {
return (
<main>
<Navbar />
<HeroCarousel slides={slides}/>
<Features />
<ProductGrid />
<Testimonials />
<Footer />
</main>
);
}