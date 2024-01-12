"use client";

import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client!!, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
<div>
<button
   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
   className="border-solid border-2 border-sky-500 dark:border-gray-200 rounded-full p-2">

 {theme === "light" ? (
    <span className="text-1xl"> <FaRegMoon /> </span> ) : (
    <span className="text-1xl"> <GoSun /> </span> )
 }
 </button>
</div>
  )
}

export default ThemeSwitch;
