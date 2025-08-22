"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description: desc, price: Number(price) }),
    });
    router.push("/products");
  }

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" placeholder="Product Name" value={name} onChange={e=>setName(e.target.value)} className="px-4 py-2 border rounded"/>
        <input type="text" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} className="px-4 py-2 border rounded"/>
        <input type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} className="px-4 py-2 border rounded"/>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Product</button>
      </form>
    </div>
  );
}
