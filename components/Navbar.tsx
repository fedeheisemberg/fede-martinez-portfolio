"use client"

import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", page: "home" },
  { label: "Sobre mí", page: "about" },
  { label: "Proyectos", page: "projects" },
  { label: "Mi CV", page: "https://fedemartinez5425.github.io/federico-cv/" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-stone-900 shadow-md dark:border-b dark:border-stone-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo / Nombre */}
          <Link to="home" smooth duration={500}>
            <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer text-teal-600 dark:text-teal-400">
              Federico Martinez
            </h1>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item, idx) =>
              item.page.startsWith("http") ? (
                <a
                  key={idx}
                  href={item.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 dark:text-neutral-100 hover:text-teal-600"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.page}
                  smooth
                  offset={-100}
                  duration={500}
                  className="cursor-pointer text-neutral-800 dark:text-neutral-100 hover:text-teal-600"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Theme toggle desktop */}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={20} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={20} />
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-800 dark:text-neutral-100"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {navbarOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-6 rounded-xl bg-white dark:bg-stone-900 p-6 shadow-lg">
              {NAV_ITEMS.map((item, idx) =>
                item.page.startsWith("http") ? (
                  <a
                    key={idx}
                    href={item.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 dark:text-neutral-100 hover:text-teal-600"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    to={item.page}
                    smooth
                    offset={-100}
                    duration={500}
                    className="cursor-pointer text-neutral-800 dark:text-neutral-100 hover:text-teal-600"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Theme toggle mobile */}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl w-fit"
                >
                  <RiSunLine size={20} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl w-fit"
                >
                  <RiMoonFill size={20} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
