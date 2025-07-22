import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "../ui/SectionHeading";

const ContactUs = () => {
  return (
    <div id="contact" className="relative px-4 sm:px-6 lg:px-12 py-6 lg:py-12 2xl:py-24 bg-[url('/assets/background/white-polyshape.jpg')] bg-cover bg-center bg-opacity-50">
      {/* Optional Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f2f4f8] to-blue-900 opacity-40"></div> */}

      {/* Content Section */}
      <div className="relative z-10">
        <SectionHeading title="Contact Us" />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 container mx-auto">
          <div className="flex-1 w-full max-w-lg">
            <ContactInfo />
          </div>
          <div className="flex-1 w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
