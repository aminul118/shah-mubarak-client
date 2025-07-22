import ConsultingOfferings from "@/components/Home/ConsultingOfferings";
import FAQ from "@/components/Home/FAQ";

import HeroBanner from "@/components/Home/HeroBanner";
import StatsSection from "@/components/Home/StatsSection";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ConsultingOfferings />
      <StatsSection />
      <FAQ />
    </>
  );
};

export default HomePage;
