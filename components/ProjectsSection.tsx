import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
    {
    name: "🏆 Predicción Final Mundial 2026 — ML con Elo + Monte Carlo",
    description:
      "Modelo de Machine Learning para estimar probabilidades en partidos de selecciones nacionales, aplicado a la Final Argentina vs España del Mundial 2026. Incluye Elo Rating dinámico, doble ventana de forma reciente, rendimiento contra rivales Top-20, calibración de probabilidades (Isotonic Regression), interpretabilidad con SHAP y simulación Monte Carlo de 200.000 iteraciones para estimar al campeón incluyendo tiempo extra y penales.",
    image: "/worldcup2026.png",
    github: "#",
    link: null,
  },
  {
    name: "Modelo de Scoring para seleccionar acciones en una cartera de inversión (en proceso)",
    description:
      "Modelo cuantitativo para evaluar y clasificar acciones según métricas fundamentales, técnicas y de riesgo. Publicación inicial en LinkedIn.",
    image: "/scoringmodel.png",
    github: null,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7355216612196519936",
  },

  {
    name: "🚗 Uber Driver Analytics — EDA & Rentabilidad",
    description:
      "Análisis exploratorio y modelo de métricas de rentabilidad para conductores de Uber utilizando datos reales de la plataforma. Incluye visualización geoespacial de viajes, ingresos por zona y horario, análisis de eficiencia, cantidad de viajes, revenue por hora y métricas clave para optimizar decisiones operativas del conductor.",
    image: "/uberdriver.png",
    github: "#",
    link: null,
  },

  {
    name: "📈 Análisis Estadístico de ETFs & Pruebas de Hipótesis",
    description:
      "Estudio cuantitativo sobre ETFs utilizando análisis estadístico, optimización de portafolios y pruebas de hipótesis. Incluye comparación Equity vs Bonds, Markowitz vs 60/40, análisis de correlaciones, PCA, HRP, VaR y CVaR, con conclusiones prácticas para distintos perfiles de inversor.",
    image: "/stastiscaletfs.png",
    github: "https://github.com/fedemartinez5425/Codigos-Youtube/blob/main/Data%20Analysis/Statistical%20Analysis%20for%20ETF's/2-script-etfs-simplified.ipynb",
    link: null
  },

  {
    name: "📊 Portfolio Financiero en Databricks",
    description:
      "Dashboard analítico desarrollado en Databricks para el análisis y seguimiento de un portafolio financiero. Incluye retornos, riesgo, métricas agregadas y visualizaciones orientadas a apoyar decisiones de inversión.",
    image: "/portfoliodatabricks.png",
    github: "https://github.com/fedemartinez5425/Databricks",
    link: "https://dbc-e78805c9-ae33.cloud.databricks.com/dashboardsv3/01f0ed9878de1586bd10251efedfdc9d/published?o=1775234182689834"
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
    github: "https://github.com/fedemartinez5425",
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
    name: "Dashboard de Performance Regional & Control Operativo en Power BI",
    description:
      "Análisis integral de performance comercial desarrollado para un desafío de Lovelytics. Incluye un dashboard estratégico de ventas con métricas de cumplimiento recalibradas, análisis de dispersión para detectar outliers de eficiencia y un reporte operativo con lógica DAX avanzada (USERELATIONSHIP) para el seguimiento de pedidos vs. envíos.",
    image: "/lovelytics-dashboard.png",
    github: null, 
    link: "#",
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




