import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <SectionContainer id="about" className="container">
      <SectionHeading title="About shah" />
      <p className="text-primary text-justify">
        Shah Mubaruk stands as a beacon of expertise and innovation in the realm
        of business consultancy. With a commitment to excellence, Shah Mubaruk
        Business Consulting offers a diverse range of services tailored to meet
        the dynamic needs of entrepreneurs and businesses. Led by a team of
        seasoned consultants, Shah Mubaruk specializes in providing strategic
        guidance across various domains, including startup support, financial
        analysis, oriented development, and international expansion. Fueled by a
        passion for fostering growth and navigating the complexities of the
        business landscape, Shah Mubaruk is your dedicated partner on the path
        to success. Trust in our experience, innovation, and personalized
        approach as we collaborate to turn your business vision into a reality.
      </p>
    </SectionContainer>
  );
};

export default About;
