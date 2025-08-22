import dbConnect from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'
import Link from 'next/link'

export default async function ProductDetails({ params }) {
  const { id } = params;

  // ✅ DB connect
  const serviceCollection = await dbConnect("products");
  const product = await serviceCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div className="p-10 text-center text-red-500">❌ Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      
      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-[#154D71] hover:underline">
          ← Back to Home
        </Link>
        <Link href="/products" className="text-[#154D71] hover:underline">
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Image */}
        <div className="w-full flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Brand:</span> {product.brand} |{" "}
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-600">{product.description}</p>

          {/* Price Section */}
          <div className="space-y-1">
            <p className="text-xl text-gray-700 line-through">
              ${product.price_usd} / ৳{product.price_bdt}
            </p>
            <p className="text-2xl font-semibold text-[#154D71]">
              ${product.discount_price_usd} / ৳{product.discount_price_bdt}
            </p>
          </div>

          {/* Rating & Reviews */}
          <p className="text-yellow-500 font-medium">
            ⭐ {product.rating} ({product.reviews_count} reviews)
          </p>

          {/* Specs */}
          {product.specs && (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">Specifications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart */}
          <button className="px-6 py-3 bg-[#154D71] text-white rounded-lg hover:bg-[#1C6EA4] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
