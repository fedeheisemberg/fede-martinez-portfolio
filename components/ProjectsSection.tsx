import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Mi repositorio en Tableu",
    description:
      "Aquí podrás ver las visualizaciones de datos que he creado.",
    image: "/tableu.png",
    github: "#",
    link: "https://public.tableau.com/app/profile/federico.martinez3300/vizzes",
  },
  {
    name: "Mi canal de Youtube",
    description:
      "Aquí encontrarás herramientas relacionadas al mundo de los datos y las finanzas.",
    image: "/github.png",
    github: "https://github.com/fedeheisemberg",
    link: "https://www.youtube.com/@FedeMartinezQuantFinance",
  },
  {
    name: "Optima Consulting & Management LLC",
    description:
      "Soy cofundador de una empresa dedicada a integrar tecnología avanzada en el sector financiero.",
    image: "/optima.png",
    github: "https://github.com/fedeheisemberg/Optima-Landing-Page",
    link: "https://www.optimafinancials.com/",
  },
  {
    name: "OptionsPro Dashboard",
    description: "Accede gratis a este dashboard para operadores de opciones financieras.",
    image: "/creditscore.PNG",  // Asegúrate de que la imagen esté en el directorio adecuado
    github: "#",  // Puedes agregar el enlace de GitHub si lo tienes
    link: "https://optimaoptionspro.streamlit.app/",
  },
  {
    name: "Modelo de Machine Learning para Puntaje Crediticio",
    description: "Accede a este modelo interactivo para la predicción del score crediticio basado en un dataset de aproximadamente 1000 clientes.",
    image: "/dashboard.PNG",  // Asegúrate de que la imagen esté en el directorio adecuado
    github: "#",  // Puedes agregar el enlace de GitHub si lo tienes
    link: "https://creditscoremodel.streamlit.app/",
  },
  {
    name: "Mi perfil de Streamlit",
    description: "Accede a mis aplicaciones y proyectos desplegados en Streamlit.",
    image: "streamlit.PNG",  // Asegúrate de que la imagen esté en el directorio adecuado
    github: "#",
    link: "https://share.streamlit.io/user/fedeheisemberg",
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

