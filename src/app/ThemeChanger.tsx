"use client";

import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client!!, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
<div className="relative">
<button
   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
   className="fixed top-2 right-2 border-solid border-2 border-sky-500 rounded-full p-2">

 {theme === "light" ? (
    <span className="text-3xl"> <FaRegMoon /> </span> ) : (
    <span className="text-3xl"> <GoSun /> </span> )
 }
 </button>
</div>
  )
}

export default ThemeSwitch;
