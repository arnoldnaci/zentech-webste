import { Metadata } from "next";
import MainSection from "../../../components/contact-page/main-section/main-section";
import Accordian from "../../../components/contact-page/Faq/Questions";

export const metadata: Metadata = {
  title: "Zentech | Contact",
  description: "",
};

const ContactUs = () => {
  return (
    <>
      <MainSection />
      <Accordian />
    </>
  );
};

export default ContactUs;
