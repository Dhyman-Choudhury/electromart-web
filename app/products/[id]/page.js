"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((p) => p.id === id);
                setProduct(found);
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p className="text-center mt-10"><Loader></Loader></p>;

    return (
        <div className="flex flex-col">
            <Navbar />

            <div className="p-6 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
                {/* Images */}
                <div className="relative w-full h-96">
                    <Image src={product.images} alt={product.name} fill className="object-contain rounded-lg" />
                </div>
                {/* Price */}
                <p className="text-2xl text-blue-600 font-bold mb-4">
                    ${product.price.toFixed(2)}{" "}
                    <span className="line-through text-gray-400 text-lg">${product.original_price.toFixed(2)}</span>
                </p>

                {/* Description */}
                <p className="text-gray-700 mb-4">{product.description}</p>

                {/* Specifications */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Key Specifications</h2>
                    <ul className="list-disc list-inside text-gray-600 ">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                        ))}
                    </ul>
                </div>

                {/* Variants */}
                {product.variants && product.variants.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Variants</h2>
                        <div className="flex gap-3">
                            {product.variants.map((v, i) => (
                                <span key={i} className="px-3 py-1 border rounded">{v}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Reviews */}
                {product.reviews && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                        <p>⭐ {product.reviews.rating} / 5 ({product.reviews.total} reviews)</p>
                    </div>
                )}

                {/* Shipping */}
                {product.shipping && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Shipping & Returns</h2>
                        <p>{product.shipping}</p>
                    </div>
                )}

                {/* Comparison */}
                {product.compare && product.compare.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Compare With</h2>
                        <ul className="list-disc list-inside">
                            {product.compare.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* CTA Buttons */}
                <div className="mb-6">
                    <Link
                        href="/products"
                        className="inline-block btn_primary px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                        ← Back to Products
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    );
}
