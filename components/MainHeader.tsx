const MainHeader = () => {
  return (
    <div className="main-header-wrapper">
      <input type="checkbox" id="header-toggle" className="header-toggle" />
      <div className="main-header">
        <ul>
          <li className="main-li">
            <a className="header_nav" href="#home">
              <span></span>Principal
            </a>
          </li>
          <li>
            <a className="header_nav" href="#about">
              Nosotros
            </a>
          </li>
          <li>
            <a className="header_nav" href="#materiales">
              Materiales
            </a>
          </li>
          <li>
            <a className="header_nav" href="#subastas">
              Otros Productos
            </a>
          </li>
          <li>
            <a className="header_nav" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
        <label className="toggle-label" htmlFor="header-toggle">
          <a></a>
        </label>
      </div>
    </div>
  );
};

export default MainHeader;
