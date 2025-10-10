import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineMail,
  AiOutlineFilePdf,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6 py-10 mt-16 border-t border-neutral-300 dark:border-stone-700">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
        
        {/* --- Branding --- */}
        <div>
          <h2 className="text-2xl font-bold text-teal-600">Fede Martinez</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
            Analista de Datos | BI & Automatización | Finanzas Cuantitativas
          </p>
        </div>

        {/* --- CTA principal --- */}
        <div className="flex flex-col items-center space-y-3">
          <a
            href="mailto:fedemarti0107@gmail.com"
            className="bg-teal-600 text-white font-semibold py-2 px-5 rounded-xl hover:bg-teal-700 transition-all"
          >
            📩 Contactame
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Disponible para proyectos y oportunidades full-time
          </p>
        </div>

        {/* --- Redes --- */}
        <div className="flex flex-row space-x-4">
          <a
            href="https://github.com/fedeheisemberg"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <AiOutlineGithub
              size={28}
              className="hover:-translate-y-1 transition-transform text-neutral-600 dark:text-neutral-100"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/federicoluismartinez/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <AiOutlineLinkedin
              size={28}
              className="hover:-translate-y-1 transition-transform text-neutral-600 dark:text-neutral-100"
            />
          </a>
          <a
            href="https://www.youtube.com/@FedeMartinezQuantFinance"
            target="_blank"
            rel="noreferrer"
            title="YouTube"
          >
            <AiOutlineYoutube
              size={28}
              className="hover:-translate-y-1 transition-transform text-neutral-600 dark:text-neutral-100"
            />
          </a>
          <a
            href="https://fedeheisemberg.github.io/federico-cv/"
            target="_blank"
            rel="noreferrer"
            title="Ver CV"
          >
            <AiOutlineFilePdf
              size={28}
              className="hover:-translate-y-1 transition-transform text-neutral-600 dark:text-neutral-100"
            />
          </a>
        </div>
      </div>

      {/* --- Legal / bottom line --- */}
      <div className="text-center mt-10 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Federico Martinez — Hecho con ❤️ y React
      </div>
    </footer>
  );
};

export default Footer;

