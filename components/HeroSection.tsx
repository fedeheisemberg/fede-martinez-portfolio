"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-6 md:text-left">
        {/* Imagen */}
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          <Image
            src="/headshot.png"
            alt="Federico Martinez"
            width={400}
            height={400}
            className="rounded-full shadow-2xl border-4 border-teal-600"
          />
        </div>

        {/* Texto */}
        <div className="md:w-3/5 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold md:text-7xl">Hola, soy Fede 👋</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-neutral-700 dark:text-neutral-300">
            Soy{" "}
            <span className="font-semibold text-teal-600">
              Analista de Datos
            </span>{" "}
            con base en San Juan, Argentina.  
            Ayudo a empresas a tomar mejores decisiones mediante{" "}
            <span className="font-semibold">automatización de procesos, visualización de datos</span> y{" "}
            <span className="font-semibold">análisis financiero.</span>  
            Mi enfoque combina el mundo de los datos con la aplicabilidad real en los negocios.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="projects"
              className="text-white font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 transition-transform transform hover:scale-105"
              smooth={true}
              offset={-100}
              duration={500}
            >
              🚀 Ver proyectos
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center mt-10">
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={55} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection


