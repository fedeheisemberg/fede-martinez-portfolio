import React from "react";

const skills = [
  // Core & Development
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "Git & GitHub" },

  // Data Engineering & Big Data
  { skill: "Databricks" },
  { skill: "Apache Spark" },
  { skill: "Apache Airflow" },
  { skill: "ETL & Data Pipelines" },

  // Cloud Infrastructure
  { skill: "AWS" },
  { skill: "Google Cloud Platform" },

  // Analytics & Automation
  { skill: "Tableau" },
  { skill: "Excel Avanzado" },
  { skill: "Automatización (RPA)" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mí
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Un poco sobre mi camino 🚀
            </h2>
            <p>
              Soy estudiante avanzado de <strong>Administración de Empresas</strong>, con una fuerte
              orientación a <strong>datos, automatización y análisis financiero</strong>.  
              Mi recorrido combina el entendimiento del negocio con la capacidad técnica para
              transformar datos en decisiones accionables.
            </p>

            <br />

            <p>
              En 2023 cofundé <strong>Optima Consulting & Management LLC</strong>, donde trabajé en el diseño de
              <strong> dashboards ejecutivos, automatizaciones de procesos (RPA)</strong> y modelos de datos
              orientados a mejorar la eficiencia operativa y la calidad de la información para la toma
              de decisiones.
            </p>

            <br />

            <p>
              Actualmente trabajo como <strong>analista independiente</strong> desarrollando soluciones para la carga, validación y gestión de datos, así como su análisis e interpretación,
              reduciendo errores manuales y mejorando la trazabilidad de la información.
            </p>

            <br />

            <p>
              Además, desarrollo proyectos propios enfocados en <strong>finanzas cuantitativas</strong>,
              optimización de portafolios, modelos de scoring, machine learning aplicado a negocios y
              visualización avanzada de datos con Python, SQL y Tableau.
            </p>

            <br />

            <p>
              Hoy busco consolidarme como{" "}
              <span className="font-semibold text-teal-600">
                analista orientado a sistemas de decisión, con foco financiero y de negocio
              </span>, ayudando a organizaciones y personas a transformar datos complejos en{" "}
              <strong>criterios claros para decidir, asignar recursos y gestionar riesgo</strong>.
            </p>

          </div>

          {/* Skills */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Habilidades técnicas
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-700 dark:text-gray-200 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Ayudo a empresas y profesionales a analizar datos de negocio, evaluar escenarios
            y automatizar procesos para tomar mejores decisiones.  
            Trabajo tanto en análisis exploratorio y estadístico como en el diseño de
            sistemas simples y reproducibles en Python que permitan entender qué está
            pasando y qué conviene hacer.
          </p>

          <a
            href="mailto:fedemarti0107@gmail.com"
            className="inline-block mt-6 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-transform hover:scale-105"
          >
            💬 Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



