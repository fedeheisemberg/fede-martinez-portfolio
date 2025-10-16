import React from "react";

const skills = [
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "Tableau" },
  { skill: "Power BI" },
  { skill: "Apache Airflow" },
  { skill: "Apache Spark" },
  { skill: "Google Cloud Platform" },
  { skill: "Excel Avanzado" },
  { skill: "ETL & Data Pipelines" },
  { skill: "Automatización (RPA)" },
  { skill: "Git & GitHub" },
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
              Estudié <strong>Administración de Empresas</strong>.  
              Mi pasión por los datos surgió al ver cómo podían transformar la{" "}
              <strong>toma de decisiones financieras</strong> y optimizar la{" "}
              <strong>gestión empresarial</strong>.
            </p>
            <br />
            <p>
              En 2023 cofundé <strong>Optima Consulting & Management LLC</strong>, 
              donde diseñé dashboards y automatizaciones que mejoraron la eficiencia de procesos
              y redujeron tiempos de análisis. En 2025 trabajé como <strong>freelancer </strong> 
              para la <strong>Fundación Sembrando Amor (Colombia)</strong>, creando una 
              aplicación de carga y gestión de datos en Streamlit sobre Google Cloud Platform.
            </p>
            <br />
            <p>
              Hoy busco seguir desarrollándome como{" "}
              <span className="font-semibold text-teal-600">
                Data Analyst con visión estratégica
              </span>{" "}
              en entornos donde los datos impulsen decisiones reales de negocio.
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
            Ayudo a empresas a mejorar la eficiencia operativa, integrar análisis de datos y automatizar reportes para reducir tiempo y errores.  
            Mi objetivo es que los datos se conviertan en una verdadera ventaja competitiva.
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



