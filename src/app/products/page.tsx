import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'

export default function ProductsPage(){
  return (
    <div className="px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-[color:var(--brown)] mb-4">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
