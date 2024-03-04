import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <span className="main-line"></span>
      <div className="home-content-wrapper">
        <Image
          className="logo"
          src="/img/logo_final.png"
          alt="Logo Deposito San Antonio E Hijos"
          width={500}
          height={500}
        />
        <h1>Depósito San Antonio E Hijos S.A.S</h1>
        <p>
          Compra y venta de materiales industriales. Comercializamos tuberías,
          barras y ejes de acero, nuevos y de segunda mano.
        </p>
      </div>
      <div className="wave">
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

export default HomeSection;
