import Header from "@/components/UI/blue/header/Header";
import NavbarBlue from "@/components/UI/blue/nav/NavbarBlue";
import Certificate from "@/components/UI/blue/section/Certificate/Certificate";
import Do from "@/components/UI/blue/section/Do/Do";
import Info from "@/components/UI/blue/section/Info/Info";
import Prologue from "@/components/UI/blue/section/prologue/Prologue";
import { ScrollSection } from "@/components/UI/blue/section/Scroll/ScrollSection";
import Services from "@/components/UI/blue/section/service/Services";



function Blue() {
  return <div>
    <NavbarBlue />
    <Header />
    <Prologue />
    <Services />
    <Do />
    <Info />
    <Certificate />
    <ScrollSection />
  </div>;
}

export default Blue;
