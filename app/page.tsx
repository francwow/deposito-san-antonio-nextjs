import AboutSection from "@/components/AboutSection";
import Aside from "@/components/Aside";
import HomeSection from "@/components/HomeSection";
import MainHeader from "@/components/MainHeader";
import MaterialesSection from "@/components/MaterialesSection";
import ModalSubastas from "@/components/ModalSubastas";
import SubastasSection from "@/components/SubastasSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <HomeSection />
      <AboutSection />
      <MaterialesSection />
      <SubastasSection />
      <ModalSubastas />
      <Aside />
    </main>
  );
}
