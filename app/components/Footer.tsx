import ContactForm from "./ContactForm";
import AboutSection from "./AboutSection";

const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-15 py-10 justify-between items-center">
      {/* LEFT SECTION */}
      <AboutSection />

      {/* RIGHT SECTION */}
      <ContactForm />
    </div>
  );
};

export default Footer;
