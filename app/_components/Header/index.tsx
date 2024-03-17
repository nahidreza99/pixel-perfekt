'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { useTheme } from '../../_providers/Theme'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  // console.log(isDarkMode)

  // Function to toggle theme mode
  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.setItem('data-theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('data-theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
    }
  }

  // Set initial theme mode based on local storage preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('data-theme')
    // console.log(savedTheme)
    // toggleTheme()
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
      // setIsDarkMode()
    } else if(savedTheme==='light') {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('data-theme', 'dark')
    }
  }, [])

  return (
    <header className="">
      <div className="relative h-[80px] w-full max-w-[1440px] mx-auto px-[20px] flex items-center justify-between">
        <div>
          <Link href={'/'} className="font-bold tracking-[5px] text-[18px]">
            LOGO
          </Link>
        </div>
        <nav className="flex gap-[20px]">
          <Link href={'/#blogs'}>Blogs</Link>
          <Link href={'/#about'}>About</Link>
        </nav>
        <div className="absolute top-auto bottom-0 left-0 right-0 h-[1px] flex flex-col items-stretch bg-headerDividerLineDark"></div>
        {/* Toggle button */}
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <label
          onMouseDown={toggleTheme}
          htmlFor="theme"
          className="relative z-10 h-[30px] w-[60px] rounded-full bg-white cursor-pointer transition-all duration-150
          after:ease-in-out after:transition-all after:duration-150
          after:content-[''] after:absolute after:z-20 after:top-[3px] after:left-[3px] after:h-[24px] after:w-[24px] after:rounded-full after:bg-[linear-gradient(45deg,_rgba(180,111,58,1)_0%,_rgba(253,209,29,1)_75%)]
          has-[:checked]:after:bg-[linear-gradient(-45deg,_rgba(22,22,22,1)_0%,_rgba(157,157,157,1)_75%)] has-[:checked]:after:translate-x-[33px] has-[:checked]:after:left-auto"
        >
          <input
            aria-labelledby="dark-mode"
            name="dark-mode"
            value="dark-mode"
            id="theme"
            className="hidden"
            type="checkbox"
            checked={isDarkMode}
            readOnly
          />
        </label>
      </div>
    </header>
  )
}
