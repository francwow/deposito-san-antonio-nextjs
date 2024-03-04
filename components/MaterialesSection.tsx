import Image from "next/image";

const MaterialesSection = () => {
  return (
    <section className="materiales" id="materiales">
      {/* <!--DESKTOP--> */}
      <div className="materiales-container-desktop">
        <div className="materiales_title-desktop">
          <h2 className="materiales_title header-moves">MATERIALES</h2>
        </div>
        <div className="materiales-info-desktop">
          <div className="slider-desktop">
            <input type="radio" name="slide" id="slide-1" checked />
            <input type="radio" name="slide" id="slide-2" />
            <input type="radio" name="slide" id="slide-3" />
            <input type="radio" name="slide" id="slide-4" />
            <div className="slider-content-desktop slide-1">
              <h3>Drill Pipe</h3>
              <p>
                La tubería de perforación <strong>Drill Pipe</strong> se compone
                de un tubo sin costuras, grande y pesado que gira sobre el eje
                del taladro y permite el flujo del líquido.
              </p>
              <div className="medidas-container-desktop">
                <div className="medidas-desktop">
                  <p>
                    <strong>Con medidas desde:</strong>
                  </p>
                  <ul>
                    <li>3 1/2&quot;</li>
                    <li>5&quot;</li>
                    <li>6 5/8&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-content-desktop slide-2">
              <h3>LINE PIPE</h3>
              <p>
                La <strong>tubería de línea</strong> permite transportar
                diferentes tipos de fluidos como agua, aceite, combustible,
                petróleo, entre otros.
              </p>
              <div className="medidas-container-desktop">
                <div className="medidas-desktop">
                  <p>
                    <strong>Con medidas desde:</strong>
                  </p>
                  <ul>
                    <li>2&quot; hasta 30&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-content-desktop slide-3">
              <h3>BARRAS PERFORADAS</h3>
              <p>
                <strong>Barra perforadora</strong> es un acero de alta
                resistencia que gracias a su capacidad de ser soldada, se
                utiiliza en mecanizados.
              </p>
              <div className="medidas-container-desktop">
                <div className="medidas-desktop">
                  <p>
                    <strong>Con medidas desde:</strong>
                  </p>
                  <ul>
                    <li>3&quot; hasta 24&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-content-desktop slide-4">
              <h3>EJES</h3>
              <p>
                La <strong>barra de acero al carbono</strong> es perfecta para
                usos generales, contiene acero bajo en carbono, esta puede
                aportar una excelente conformabilidad y soldadibilidad.
              </p>
              <div className="medidas-container-desktop">
                <div className="medidas-desktop">
                  <p>
                    <strong>Con medidas desde:</strong>
                  </p>
                  <ul>
                    <li>2&quot; hasta 23&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mat-img-desktop">
            <label className="img-label" htmlFor="slide-1">
              <Image
                tabIndex={0}
                className="mat-img"
                src="/img/drillpipe.png"
                alt="Tubería Drill Pipe"
                width={280}
                height={280}
              />
              <span className="label-description">
                <strong>DRILL PIPE</strong>
              </span>
            </label>
            <label className="img-label" htmlFor="slide-2">
              <Image
                tabIndex={0}
                className="mat-img"
                src="/img/linepipe_1.png"
                alt="Tubería Line Pipe"
                width={270}
                height={270}
              />
              <span className="label-description">
                <strong>LINE PIPE</strong>
              </span>
            </label>
            <label className="img-label" htmlFor="slide-3">
              <Image
                tabIndex={0}
                className="mat-img"
                src="/img/barra_perforadora.png"
                alt="Tubería Barras Perforadoras"
                width={440}
                height={440}
              />
              <span className="label-description">
                <strong>BARRAS</strong>
              </span>
            </label>
            <label className="img-label" htmlFor="slide-4">
              <Image
                tabIndex={0}
                className="mat-img"
                src="/img/ejes_1.png"
                alt="Tubería Ejes"
                width={270}
                height={270}
              />
              <span className="label-description">
                <strong>EJES</strong>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* <!--MOBILE--> */}
      <div className="materiales-divider">
        <div className="materiales-container">
          <h2 className="materiales_title header-moves">MATERIALES</h2>
          <div className="slider">
            <input type="radio" name="slide" id="slide1" checked />
            <input type="radio" name="slide" id="slide2" />
            <input type="radio" name="slide" id="slide3" />
            <input type="radio" name="slide" id="slide4" />
            <div className="slider-content slide1">
              <h3>Drill Pipe</h3>
              <p>
                La tubería de perforación <strong>Drill Pipe</strong> se compone
                de un tubo sin costuras, grande y pesado que gira sobre el eje
                del taladro y permite el flujo del líquido.
              </p>
              <div className="medidas-container">
                <Image
                  className="mat_img"
                  src="/img/drillpipe.png"
                  alt="Tubería Drill Pipe"
                  width={280}
                  height={280}
                />
                <div className="medidas">
                  <p>
                    <strong>Con medidas desde:</strong>
                  </p>
                  <ul>
                    <li>3 1/2&quot;</li>
                    <li>5&quot;</li>
                    <li>6 5/8&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="slider-content slide2">
              <h3>LINE PIPE</h3>
              <p>
                La <strong>tubería de línea</strong> permite transportar
                diferentes tipos de fluidos como agua, aceite, combustible,
                petróleo, entre otros.
              </p>
              <Image
                className="mat_img"
                src="/img/linepipe_1.png"
                alt="Tubería Line Pipe"
                width={270}
                height={270}
              />
            </div>
            <div className="slider-content slide3">
              <h3>BARRAS PERFORADAS</h3>
              <p>
                <strong>Barra perforadora</strong> es un acero de alta
                resistencia que gracias a su capacidad de ser soldada, se
                utiiliza en mecanizados.
              </p>
              <Image
                className="mat_img"
                src="/img/barra_perforadora.png"
                alt="Tubería Barras Perforadoras"
                width={440}
                height={440}
              />
            </div>
            <div className="slider-content slide4">
              <h3>EJES</h3>
              <p>
                La <strong>barra de acero al carbono</strong> es perfecta para
                usos generales, contiene acero bajo en carbono, esta puede
                aportar una excelente conformabilidad y soldadibilidad.
              </p>
              <Image
                className="mat_img"
                src="/img/ejes_1.png"
                alt="Tubería Ejes"
                width={270}
                height={270}
              />
            </div>
          </div>
        </div>
        <div className="dots" tabIndex={0}>
          <label htmlFor="slide1" tabIndex={0}></label>
          <label htmlFor="slide2" tabIndex={0}></label>
          <label htmlFor="slide3" tabIndex={0}></label>
          <label htmlFor="slide4" tabIndex={0}></label>
        </div>
      </div>
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill-opacity="1"
            className="wave-svg"
            d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MaterialesSection;
