import { Metadata } from "next";
import MainServices from "../../../components/services/service-card-section/service";
import MainSection from "../../../components/services/main-section/main-section";
import Working from "../../../components/services/working-our-team/working";

export const metadata: Metadata = {
  title: "Zentech | Services",
  description: "",
};

const ServicesPage = () => {
  return (
    <>
      <MainServices />
      <MainSection />
      <Working />
    </>
  );
};

export default ServicesPage;
