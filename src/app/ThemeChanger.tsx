"use client";

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
<>
Current theme: {theme}
<button onClick={() => setTheme("light")}>Light Theme</button>
<button onClick={() => setTheme("dark")}>Dark Theme</button>
</>
  )
}

export default ThemeSwitch;
