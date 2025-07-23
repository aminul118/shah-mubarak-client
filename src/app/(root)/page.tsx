import ContactUs from "@/components/ContactUs/ContactUs";
import About from "@/components/Home/About";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import ServiceCards from "@/components/Home/ServicesCards";
import StatsSection from "@/components/Home/StatsSection";
import Team from "@/components/Home/Team";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyShahMubarak from "@/components/Home/WhyShahMubarak";
import { generateMetaTags } from "@/Seo/genarateMetaTags";
import { Metadata } from "next";

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: "Shah Mubaruk Business Consulting: Guiding Growth, Inspiring Success!",
  description:
    "Shah Mubaruk Business Consulting provides expert guidance across business strategy, financial analysis, startup support, international expansion, and more. Your partner in sustainable growth.",
  keywords:
    "Shah Mubaruk, business consulting, startup support, financial analysis, Bangladesh consulting, business strategy, US company formation, fundraising, digital marketing, operational improvement, technology consulting",
  image: "/ss/hero-bg.png",
  path: "https://www.shahmubaruk.com/ss/hero-bg.png",
});
// >> SEO End

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <WhatWeDo />
      <About />
      <WhyShahMubarak />
      <ServiceCards />
      <StatsSection />
      <Team />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
