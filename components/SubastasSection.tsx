import Image from "next/image";

const SubastasSection = () => {
  return (
    <section className="subastas" id="subastas">
      <div className="subastas-content">
        <div className="subastas_title header-moves">
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
                <h4>26 unidades disponibles</h4>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <h4>14 unidades disponibles</h4>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <h4>Aprox 1300 unidades disponibles</h4>
                <span>Tamaños: 1&quot; 7/8, 2&quot;, 3&quot;</span>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <h4>3 unidades disponibles</h4>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <h4>11 unidades disponibles</h4>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <h4>Aprox 3000 unidades disponibles</h4>
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
                <button name="subastas-button" className="subastas-button">
                  <a href="mailto:francwow06@gmail.com">Escríbenos</a>
                </button>
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
            fill-opacity="1"
            className="wave-svg2"
            d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SubastasSection;
