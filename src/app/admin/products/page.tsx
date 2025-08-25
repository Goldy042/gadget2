"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([
    { id: 1, name: "Smart Watch", price: 120 },
    { id: 2, name: "Wireless Earbuds", price: 80 },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      
      {/* Add product form */}
      <form className="p-4 bg-white/80 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Product</h3>
        <input type="text" placeholder="Product name" className="border p-2 rounded mb-2 w-full"/>
        <input type="number" placeholder="Price" className="border p-2 rounded mb-2 w-full"/>
        <button type="submit" className="px-4 py-2 bg-brown-600 text-white rounded">Add</button>
      </form>

      {/* Product list */}
      <div className="grid gap-4">
        {products.map((p) => (
          <div key={p.id} className="p-4 bg-white/60 rounded-lg shadow flex justify-between items-center">
            <span>{p.name} - ₦{p.price}</span>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
