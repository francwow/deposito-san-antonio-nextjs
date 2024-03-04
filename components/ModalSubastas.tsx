import Image from "next/image";

const ModalSubastas = () => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <input type="checkbox" id="modal" className="modal-toggle-close" />
      <div className="subastas-modal-active">
        <span className="modal-close"></span>
        <div className="subastas-form-container">
          <form className="subastas-form">
            <div className="subastas-form-img">
              <Image src="/img/codos.png" alt="" width={740} height={740} />
              <span>Válvulas</span>
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
    </>
  );
};

export default ModalSubastas;
