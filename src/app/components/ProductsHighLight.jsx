
import Image from 'next/image'
import React from 'react'

export default async function ProductsHighLight() {
    // const res = await fetch("services.json")
    const data =[
  {
    "id": 1,
    "name": "MacBook Pro 14”",
    "description": "Apple M2 Pro chip, 16GB RAM, 512GB SSD - perfect for professionals.",
    "price_usd": 2200,
    "price_bdt": 264000,
    "image": "https://i.ibb.co/ZzTb2GSB/photo-1658400274389-e7dbedd89b67.jpg"
  },
  {
    "id": 2,
    "name": "iPhone 15",
    "description": "Latest iPhone with A17 Bionic chip and stunning camera system.",
    "price_usd": 1200,
    "price_bdt": 144000,
    "image": "https://i.ibb.co/yFVQjjFD/photo-1695048132832-b41495f12eb4.jpg"
  },
  {
    "id": 3,
    "name": "Sony WH-1000XM5",
    "description": "Noise-cancelling over-ear wireless headphones with premium sound.",
    "price_usd": 350,
    "price_bdt": 42000,
    "image": "https://i.ibb.co/1YLkZ2x9/photo-1755719401938-35c1b24f6d15.jpg"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy Watch 6",
    "description": "Smartwatch with AMOLED display and advanced health tracking.",
    "price_usd": 300,
    "price_bdt": 36000,
    "image": "https://i.ibb.co/hR4JvpQq/premium-photo-1710714000385-18ecebfd5d4c.jpg"
  },
  {
    "id": 5,
    "name": "iPad Air",
    "description": "10.9-inch Liquid Retina display, A15 Bionic chip, ultra-lightweight.",
    "price_usd": 600,
    "price_bdt": 72000,
    "image": "https://i.ibb.co/7NzV8GXV/photo-1648806030599-c963fd14a22f.jpg"
  },
  {
    "id": 6,
    "name": "Dell XPS 13",
    "description": "Compact ultrabook with Intel i7, 16GB RAM, and 1TB SSD.",
    "price_usd": 1800,
    "price_bdt": 216000,
    "image": "https://i.ibb.co/yBf8XzF1/photo-1493661969828-411ef6a6624d.jpg"
  },
  
]


    // const data = await res.json();
  return (
    <div className="grid grid-cols-12 gap-6 px-4 py-8">
      {data.map((item) => (
        <div
          key={item._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full h-52">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              
              
              <span className="text-blue-600 font-bold">
                {item.price_bdt.toLocaleString()} ৳
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
