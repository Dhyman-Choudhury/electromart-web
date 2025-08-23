"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    price: "",
    original_price: "",
    description: "",
    shipping: "",
    specs: {},
    reviews: { rating: 0, total: 0 },
    variants: "",
    compare: ""
  });

  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSpec = () => {
    if (!specKey.trim() || !specValue.trim()) return;
    setFormData(prev => ({
      ...prev,
      specs: { ...prev.specs, [specKey]: specValue }
    }));
    setSpecKey("");
    setSpecValue("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      original_price: parseFloat(formData.original_price || formData.price),
      variants: formData.variants.split(",").map(v => v.trim()).filter(v => v),
      compare: formData.compare.split(",").map(c => c.trim()).filter(c => c),
      reviews: {
        rating: parseFloat(formData.reviews.rating) || 0,
        total: parseInt(formData.reviews.total) || 0
      }
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to add product");

      setMessage("Product added successfully!");
      setFormData({
        name: "",
        imageURL: "",
        price: "",
        original_price: "",
        description: "",
        shipping: "",
        specs: {},
        reviews: { rating: 0, total: 0 },
        variants: "",
        compare: ""
      });
    } catch (err) {
      console.error(err);
      setMessage("Error adding product.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white border border-gray-200 p-2 rounded";

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-100 rounded-xl shadow text-black">

      {/* Basic info */}
      <input name="name" value={formData.name} onChange={handleChange}
        placeholder="Product Name" className={inputClass} required />

      <input name="imageURL" value={formData.imageURL} onChange={handleChange}
        placeholder="Image URL (/images/...)" className={inputClass} />

      <input name="price" value={formData.price} onChange={handleChange}
        placeholder="Price" className={inputClass} required />

      <input name="original_price" value={formData.original_price} onChange={handleChange}
        placeholder="Original Price" className={inputClass} />

      <textarea name="description" value={formData.description} onChange={handleChange}
        placeholder="Description" className={inputClass} rows={3} required />

      <textarea name="shipping" value={formData.shipping} onChange={handleChange}
        placeholder="Shipping info" className={inputClass} rows={2} />

      {/* Reviews */}
      <div className="flex gap-4">
        <input type="number" step="0.1" name="reviews.rating"
          value={formData.reviews.rating}
          onChange={e => setFormData(prev => ({ ...prev, reviews: { ...prev.reviews, rating: e.target.value } }))}
          placeholder="Rating (0-5)" className={inputClass + " flex-1"} />
        <input type="number" name="reviews.total"
          value={formData.reviews.total}
          onChange={e => setFormData(prev => ({ ...prev, reviews: { ...prev.reviews, total: e.target.value } }))}
          placeholder="Total reviews" className={inputClass + " flex-1"} />
      </div>

      {/* Variants and Compare */}
      <input name="variants" value={formData.variants} onChange={handleChange}
        placeholder="Variants (comma-separated)" className={inputClass} />

      <input name="compare" value={formData.compare} onChange={handleChange}
        placeholder="Compare (comma-separated)" className={inputClass} />

      {/* Dynamic Specs */}
      <div className="border border-gray-100 rounded p-4 space-y-2">
        <h3 className="font-semibold">Specifications</h3>
        {Object.entries(formData.specs).map(([key, val]) => (
          <div key={key} className="flex justify-between p-2 rounded">
            <span>{key}: {val}</span>
          </div>
        ))}
        <div className="flex gap-2">
          <input value={specKey} onChange={e => setSpecKey(e.target.value)}
            placeholder="Spec key" className={inputClass + " flex-1"} />
          <input value={specValue} onChange={e => setSpecValue(e.target.value)}
            placeholder="Spec value" className={inputClass + " flex-1"} />
          <button type="button" onClick={handleAddSpec}
            className="bg-[#415E72] text-white px-4 rounded">Add</button>
        </div>
      </div>

      {/* Submit */}
      <button type="submit" disabled={loading}
        className="w-full btn_primary py-2 rounded hover:bg-green-700">
        {loading ? "Adding..." : "Add Product"}
      </button>

      {message && <p className="text-center font-medium">{message}</p>}
    </form>
  );
}
