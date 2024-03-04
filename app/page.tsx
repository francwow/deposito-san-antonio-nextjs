import AboutSection from "@/components/AboutSection";
import Aside from "@/components/Aside";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import MainHeader from "@/components/MainHeader";
import MaterialesSection from "@/components/MaterialesSection";
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
      <ContactSection />
      <Aside />
    </main>
  );
}
