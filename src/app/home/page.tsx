import { Metadata } from "next";
import Hero from "../../../components/home-page/hero-section/hero";
import Agile from "../../../components/home-page/agile-team/agile-team";
import Process from "../../../components/home-page/process/process";
import Manage from "../../../components/home-page/manage/manage";
import MainServices from "../../../components/home-page/service-card-section/service";
import Accordian from "../../../components/contact-page/Faq/Questions";
import Working from "../../../components/services/working-our-team/working";

export const metadata: Metadata = {
  title: "Zentech | Home",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Agile />
      <Process />
      <Manage />
      <MainServices />
      <Accordian />
      <Working /> 
    </>
  );
}
