import Link from 'next/link';
import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function Page() {
  const serviceCollection = await dbConnect("products");
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-6 container mx-auto p-6">
      {data.map((item) => (
        <div
          className="col-span-12 md:col-span-6 lg:col-span-4 p-5 border border-amber-200 shadow-md rounded-xl bg-white"
          key={item._id.toString()}
        >
          {/* Product Image */}
          <figure className="w-full h-60 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.name}
            />
          </figure>

          {/* Product Info */}
          <div className="mt-4 space-y-2">
            <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>

            <div className="flex justify-between items-center mt-3">
              <p className="font-bold text-[#154D71]">
                ${item.price_usd} / ৳{item.price_bdt}
              </p>

              {/* ✅ Link to details */}
              <Link
                href={`/products/${item._id.toString()}`}
                className="px-4 py-2 bg-[#154D71] text-white text-sm rounded-lg hover:bg-[#1C6EA4] transition"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
