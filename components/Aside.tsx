import Image from "next/image";

const Aside = () => {
  return (
    <aside className="whatsapp">
      <a href="https://web.whatsapp.com/" target="_blank">
        <Image src="/img/whatsapp.png" alt="Whatsapp logo" />
      </a>
    </aside>
  );
};

export default Aside;
