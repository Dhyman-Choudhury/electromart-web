"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Phones & Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <div className="p-4 flex flex-col justify-between h-64">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500 text-sm mt-1 mb-2 line-clamp-3">{product.description}</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold text-lg mb-2">
                  ${product.price.toFixed(2)}{" "}
                  <span className="line-through text-gray-400 text-sm">${product.original_price.toFixed(2)}</span>
                </p>
                <Link href={`/products/${product.id}`} className="block text-center btn_primary py-2 rounded hover:bg-blue-700 transition">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
