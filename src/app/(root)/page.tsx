
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
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
      <StatsSection />
      <FAQ />
    </>
  );
};

export default HomePage;
