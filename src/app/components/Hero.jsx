import React from 'react'

export default function Hero() {
  return (
  <section className="bg-blue-600 text-white py-32 px-6 text-center relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-[url('https://i.ibb.co.com/bg8yt6SV/premium-photo-1714618993404-1c25dd17afb7.jpg')] bg-cover bg-center z-0"></div>

      {/* Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Welcome to ProManage</h1>
        <p className="text-lg text-gray-200 mb-8">
          Efficiently manage your products and explore the latest items with ease.
        </p>
        <a
          href="/products"
          className="bg-[#154D71] text-white font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 hover:text-black transition"
        >
          View Products
        </a>
      </div>
    </section>

  )
}
