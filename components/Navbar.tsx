"use client"
import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Inicio", page: "home" },
  { label: "Sobre mí", page: "about" },
  { label: "Proyectos", page: "projects" },
  { label: "Mi CV", page: "https://fedeheisemberg.github.io/federico-cv/" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        {/* Nombre */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="home" smooth={true} duration={500}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight cursor-pointer text-teal-600 dark:text-teal-400">
              Federico Martinez
            </h2>
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-100 rounded-md focus:outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        {/* Nav links */}
          <div
            className={`flex-1 justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-end space-y-8 md:flex md:space-x-8 md:space-y-0">

            {NAV_ITEMS.map((item, idx) =>
              item.page.startsWith("http") ? (
                <a
                  key={idx}
                  href={item.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:text-teal-600 dark:text-neutral-100"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.page}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="cursor-pointer text-neutral-900 hover:text-teal-600 dark:text-neutral-100"
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            {/* Tema */}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={22} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={22} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
