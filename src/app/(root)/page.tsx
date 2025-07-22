import ConsultingOfferings from "@/components/Home/ConsultingOfferings";
import FAQ from "@/components/Home/FAQ";

import HeroBanner from "@/components/Home/HeroBanner";
import StatsSection from "@/components/Home/StatsSection";
import WhyShahMubarak from "@/components/Home/WhyShahMubarak";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ConsultingOfferings />
      <WhyShahMubarak />
      <StatsSection />
      <FAQ />
    </>
  );
};

export default HomePage;
