import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Gestión de Datos — Fundación Sembrando Amor",
    description:
      "Proyecto freelance para ONG colombiana. Desarrollé una app en Streamlit y GCP para digitalizar registros de beneficiarios, mejorando trazabilidad y reduciendo errores en un 80%. 🔒 Proyecto confidencial.",
    image: "/sembrando amor.png",
    github: null,
    link: null,
  },
  {
    name: "OptionsPro Dashboard",
    description:
      "Dashboard en Streamlit para traders de opciones. Visualiza cadenas, volatilidad y estrategias basadas en datos de Yahoo Finance.",
    image: "/dashboard.PNG",
    github: "#",
    link: "https://optimaoptionspro.streamlit.app/",
  },
  {
    name: "Optima Consulting & Management LLC (2023–2025)",
    description:
      "Cofundador y analista principal. Creación de dashboards financieros, automatizaciones RPA y modelos de datos para instituciones y operadores.",
    image: "/optima.png",
    github: "https://github.com/fedeheisemberg/Optima-Landing-Page",
    link: "https://www.optimafinancials.com/",
  },
  {
    name: "Modelo de Machine Learning — Score Crediticio",
    description:
      "App en Streamlit que predice el score crediticio mediante Decision Trees y Random Forest. Dataset de 1.000 clientes.",
    image: "/creditscore.PNG",
    github: "#",
    link: "https://creditscoremodel.streamlit.app/",
  },
  {
    name: "Dashboards en Tableau",
    description:
      "Visualizaciones de ventas y RRHH con enfoque en storytelling y análisis de KPIs.",
    image: "/tableu.png",
    github: "#",
    link: "https://public.tableau.com/app/profile/federico.martinez3300/vizzes",
  },
  {
    name: "Perfil de Streamlit",
    description:
      "Colección de aplicaciones interactivas en Streamlit sobre finanzas y análisis de datos.",
    image: "/streamlit.PNG",
    github: "#",
    link: "https://share.streamlit.io/user/fedeheisemberg",
  },
  {
    name: "Canal de YouTube — Data Finance",
    description:
      "Canal educativo sobre Python y finanzas cuantitativas, con foco en automatización y visualización de datos.",
    image: "/github.png",
    github: "https://github.com/fedeheisemberg",
    link: "https://www.youtube.com/@FedeMartinezQuantFinance",
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos destacados
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                
                {/* Imagen */}
                <div className="md:w-1/2">
                  {project.link ? (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-80 transition-all duration-300"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl opacity-90"
                    />
                  )}
                </div>

                {/* Descripción */}
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-3xl font-bold mb-4 text-teal-600">
                    {project.name}
                  </h1>
                  <p className="text-lg leading-7 mb-6 text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                  {project.github || project.link ? (
                    <div className="flex flex-row space-x-5">
                      {project.github && project.github !== "#" && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            title="Ver código"
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            title="Ver proyecto"
                          />
                        </Link>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm italic text-neutral-500 dark:text-neutral-400">
                      🔒 Proyecto confidencial
                    </span>
                  )}
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;



