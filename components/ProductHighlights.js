"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductHighlights() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8))) // show 4 featured products
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="py-12 px-6 w-11/12  mx-auto mb-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Phones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col text-black"
                    >
                        {/* Image */}
                        <div className="relative w-full h-70 flex-shrink-0">
                            <Image
                                src={product.images}
                                alt={product.name}
                                fill
                                className="object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-1">
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-500 text-sm mt-1 mb-2 line-clamp-3">
                                    {product.description}
                                </p>
                                <p className="text-blue-600 font-bold text-lg mb-2">
                                    ${product.price.toLocaleString()}{" "}
                                    <span className="line-through text-gray-400 text-sm">
                                        ${product.original_price.toLocaleString()}
                                    </span>
                                </p>
                            </div>

                            {/* Button at the bottom */}
                            <div className="mt-auto">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="block w-full text-center btn_primary py-2 rounded hover:bg-blue-700 transition"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
