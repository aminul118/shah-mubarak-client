import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import ServiceCards from "@/components/Home/ServicesCards";
import StatsSection from "@/components/Home/StatsSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyShahMubarak from "@/components/Home/WhyShahMubarak";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      {/* <ConsultingOfferings /> */}
      <WhatWeDo />
      <WhyShahMubarak />
      <ServiceCards />
      <StatsSection />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
