"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={containerRef} className="contact" id="contact">
      <div className="contact-content">
        <div
          className={
            containerInView
              ? "contact_title header-moves active"
              : "contact_title header-moves"
          }
        >
          <h2>CONTACTO</h2>
        </div>
        <div className="contact-content-container">
          <div className="contact-content-wrapper">
            <div className="contact-content_info1">
              <Image
                className="contact-logo"
                src="/img/logo_final.png"
                alt="Logo Deposito San Antonio E Hijos"
                width={500}
                height={500}
              />
              <h4>Deposito San Antonio e hijos S.A.S</h4>
              <span>Carrera 28 # 7-76</span>
              <span>Colombia-Bogotá</span>
              <span>Tel. (57) 315 38 30 711</span>
              <span>(57) 2 77 44 03</span>
            </div>
          </div>
          <div className="contact-content-wrapper">
            <div className="contact-content_info2">
              <form className="contact_form">
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" name="user_empresa" />
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" name="user_email" />
                <label htmlFor="asunto">Asunto</label>
                <textarea id="asunto" name="user_asunto"></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          <div className="contact-content-wrapper">
            <div className="contact-content_info3">
              <h4>Escríbenos por whatsapp</h4>
              <Image
                src="/img/whatsapp.png"
                alt="whatsapp logo"
                width={500}
                height={500}
              />
              <span>Tel. (57) 315 38 30 711</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
