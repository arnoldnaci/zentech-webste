import { Metadata } from "next";
import MainSection from "../../../components/about-us/main-section/main-section";
import Description from "../../../components/about-us/description-section/description";
import Numbers from "../../../components/about-us/numbers-section/numbers";
import MainServices from "../../../components/about-us/service-card-section/service";
import Working from "../../../components/services/working-our-team/working";

export const metadata: Metadata = {
  title: "Zentech | About",
  description: "",
};

const AboutUs = () => {
  return (
    <>
      <MainSection />
      <Description />
      <Numbers />
      <MainServices />
      <Working />
    </>
  );
};

export default AboutUs;
