'use client'

import { signIn } from "next-auth/react"
import React, { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleCredentialLogin = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/home"
    })
    if (res?.error) setError("Invalid credentials")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-600 text-center mb-2">{error}</p>}

        <form onSubmit={handleCredentialLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154D71]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154D71]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#154D71] text-white py-2 rounded-lg font-semibold hover:bg-[#0f3b54] transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
