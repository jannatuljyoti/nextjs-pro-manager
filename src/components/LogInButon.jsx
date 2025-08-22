"use client"
import React from 'react'
import {  signIn } from "next-auth/react"

export default function LogInButon() {
  return (
    <div>
        <button onClick={()=> signIn}>
            LogIn
        </button>
    </div>
  )
}
