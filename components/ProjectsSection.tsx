import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Modelo de Scoring para seleccionar acciones en una cartera de inversión (en proceso)",
    description:
      "Modelo cuantitativo para evaluar y clasificar acciones según métricas fundamentales, técnicas y de riesgo. Publicación inicial en LinkedIn.",
    image: "/scoringmodel.png",
    github: null,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7355216612196519936",
  },
  {
    name: "📊 Advanced Portfolio Optimizer",
    description:
      "Esta aplicación te permite simular y optimizar portafolios de inversión utilizando la teoría moderna de portafolios. Incluye costos de transacción, slippage y métricas avanzadas de riesgo. Conceptos: Sharpe Ratio, VaR, CVaR, Drawdown.",
    image: "/portfolioopt.png",
    github: null,
    link: "https://portfoliopt.streamlit.app/",
  },
 {
 name: "Databricks Emissions Dashboard",
  description:
    "Proyecto inicial usando por primera vez Databricks..",
   image: "/databricks1.png",
   github: null,
   link: 'https://dbc-e78805c9-ae33.cloud.databricks.com/dashboardsv3/01f0ecc1bc76145598358dd27bb13519/published?o=1775234182689834'
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
    name: "Canal de YouTube — Data Finance",
    description:
      "Canal educativo sobre Python y finanzas cuantitativas, con foco en automatización y visualización de datos.",
    image: "/github.png",
    github: "https://github.com/fedeheisemberg",
    link: "https://www.youtube.com/@DataFinanceByFede",
  },
  {
    name: "Optima Consulting & Management LLC (2023–2025)",
    description:
      "Cofundador y analista. Creación de dashboards financieros, automatizaciones RPA y modelos de datos para instituciones y operadores.",
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
    name: "Machine Learning — Predicción de abandono de empleados",
    description:
      "Modelo predictivo desarrollado en Python y visualizado en Tableau Public. Analiza factores asociados a la rotación del personal.",
    image: "/ml-hr.png",
    github: "#",
    link: "https://public.tableau.com/app/profile/federico.martinez3300/viz/DashboardML-HR/Dashboard1",
  },
  {
    name: "Dashboard — Base de datos Classic Models",
    description:
      "Dashboard ejecutivo en Tableau con métricas de ventas globales, márgenes y desempeño por línea de producto y región.",
    image: "/classicmodels.png",
    github: "#",
    link: "https://public.tableau.com/app/profile/federico.martinez3300/viz/ClassicModelsSalesDashboard/ResumenEjecutivo",
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




