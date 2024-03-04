"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={containerRef} className="about" id="about">
      <div className="about-content-wrapper">
        <h2
          className={containerInView ? "header-moves active" : "header-moves"}
        >
          Nosotros
        </h2>
        <p>
          Nos caracterizamos por brindar un servicio de calidad con precios más
          asequibles para nuestros clientes, contribuyendo al desarrollo de
          Colombia.
        </p>
        <br />
        <p>
          La empresa se desempeña en varios campos de actividad petrolera y de
          construcción. Con ventas al retal y de línea con productos nuevos y de
          segunda mano.
        </p>
        <Image
          className="about_img"
          src="/img/tubos.png"
          alt="tubería"
          width={700}
          height={700}
        />
      </div>
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fillOpacity="1"
            className="wave-svg2"
            d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
