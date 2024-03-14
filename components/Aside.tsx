import Image from "next/image";

const Aside = () => {
  return (
    <aside className="whatsapp">
      <a href={"https://wa.me/573153830711?"} target="_blank">
        <Image
          src="/img/whatsapp.png"
          alt="Whatsapp logo"
          width={500}
          height={500}
        />
      </a>
    </aside>
  );
};

export default Aside;
