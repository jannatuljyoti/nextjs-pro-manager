"use client";
import { useState } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    price_usd: "",
    price_bdt: "",
    discount_price_usd: "",
    discount_price_bdt: "",
    image: "",
    rating: "",
    reviews_count: "",
    specs: {}
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("✅ Product added successfully!");
      setFormData({
        name: "",
        brand: "",
        category: "",
        description: "",
        price_usd: "",
        price_bdt: "",
        discount_price_usd: "",
        discount_price_bdt: "",
        image: "",
        rating: "",
        reviews_count: "",
        specs: {}
      });
    } else {
      setMessage("❌ Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && <p className="text-center text-green-600">{message}</p>}

      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full border px-3 py-2 rounded-lg" required />
      <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="w-full border px-3 py-2 rounded-lg" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border px-3 py-2 rounded-lg" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border px-3 py-2 rounded-lg" required />

      <input type="number" name="price_usd" value={formData.price_usd} onChange={handleChange} placeholder="Price (USD)" className="w-full border px-3 py-2 rounded-lg" required />
      <input type="number" name="price_bdt" value={formData.price_bdt} onChange={handleChange} placeholder="Price (BDT)" className="w-full border px-3 py-2 rounded-lg" required />
      <input type="number" name="discount_price_usd" value={formData.discount_price_usd} onChange={handleChange} placeholder="Discount Price (USD)" className="w-full border px-3 py-2 rounded-lg" />
      <input type="number" name="discount_price_bdt" value={formData.discount_price_bdt} onChange={handleChange} placeholder="Discount Price (BDT)" className="w-full border px-3 py-2 rounded-lg" />

      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full border px-3 py-2 rounded-lg" required />
      <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (e.g. 4.5)" className="w-full border px-3 py-2 rounded-lg" />
      <input type="number" name="reviews_count" value={formData.reviews_count} onChange={handleChange} placeholder="Reviews Count" className="w-full border px-3 py-2 rounded-lg" />

      <button type="submit" className="w-full bg-[#154D71] text-white py-2 rounded-lg font-semibold hover:bg-[#0f3b54]">
        Add Product
      </button>
    </form>
  );
}
