"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const SubastasSection = () => {
  const [subastasItem, setSubastasItem] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={containerRef} className="subastas" id="subastas">
      <div className={modalActive ? "subastas-modal active" : "subastas-modal"}>
        <span
          onClick={() => setModalActive(false)}
          className="modal-close"
        ></span>
        <div className="subastas-form-container">
          <form className="subastas-form">
            <div className="subastas-form-img">
              <Image
                src={
                  subastasItem === "Codos y Flanches"
                    ? "/img/codos.png"
                    : subastasItem === "Centralizadores"
                    ? "/img/centralizadores.png"
                    : subastasItem === "Espárragos"
                    ? "/img/esparragos.png"
                    : subastasItem === "Válvulas"
                    ? "/img/valvulas.png"
                    : subastasItem === "Polipasto"
                    ? "/img/polipasto.png"
                    : subastasItem === "Cabezal"
                    ? "/img/cabezal.png"
                    : subastasItem === "Tuercas"
                    ? "/img/tuercas.png"
                    : subastasItem === "Camisas Hidráulicas"
                    ? "/img/camisas.png"
                    : subastasItem === "Bomba Centrífuga"
                    ? "/img/bomba_centrifuga.png"
                    : "/img/codos.png"
                }
                alt="Item de ofertas"
                width={740}
                height={740}
              />
              <span>{subastasItem}</span>
            </div>
            <label htmlFor="nombre">Nombre o Empresa</label>
            <input type="text" id="nombre" name="user_nombre" />
            <label htmlFor="precio">Oferte</label>
            <input id="precio" name="user_precio" />
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="user_email" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="subastas-content">
        <div
          className={
            containerInView
              ? "subastas_title header-moves active"
              : "subastas_title header-moves"
          }
        >
          <div>
            <h2>OTROS PRODUCTOS</h2>
            <p>
              También contamos con una amplia selección de productos de
              construcción para la industria petrolera en Colombia.
            </p>
            <p>
              Escríbenos especificando la cantidad que necesites y pronto nos
              pondremos en contacto contigo.
            </p>
          </div>
        </div>
        <div className="subastas-content-box">
          <div className="subastas-content-container">
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>26 unidades disLinkes</h4> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/codos.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Codos y Flanches</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>14 unidades disLinkes</h4> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/centralizadores.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Centralizadores</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>Aprox 1300 unidLinkisponibles</h4> */}
                {/* <span>Tamaños: 1&quot; 7/8, 2&quot;, 3&quot;</span> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/esparragos.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Espárragos</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>3 unidades dispLinks</h4> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/valvulas.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Válvulas</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/polipasto.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Polipasto</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>11 unidades disLinkes</h4> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/cabezal.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Cabezal</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                {/* <h4>Aprox 3000 unidLinkisponibles</h4> */}
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/tuercas.png"
                alt="tubería"
                width={500}
                height={500}
              />
              <h4 className="subastas_info">Tuercas</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/camisas.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Camisas Hidráulicas</h4>
            </div>
            <div className="subastas-content-wrapper">
              <div className="subastas-hover">
                <Link
                  href={"https://api.whatsapp.com/send?phone=573153830711"}
                  target="_blank"
                  className="subastas-button"
                >
                  <span>Escríbenos</span>
                </Link>
              </div>
              <Image
                className="subastas_img"
                src="/img/bomba_centrifuga.png"
                alt="tubería"
                width={740}
                height={740}
              />
              <h4 className="subastas_info">Bomba Centrífuga</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="wave">
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

export default SubastasSection;
