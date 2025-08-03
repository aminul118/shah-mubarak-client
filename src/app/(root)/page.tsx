import ContactUs from "@/components/modules/ContactUs/ContactUs";
import About from "@/components/modules/Home/About";
import FAQ from "@/components/modules/Home/FAQ";
import HeroBanner from "@/components/modules/Home/HeroBanner";
import NewsLetterSubscription from "@/components/modules/Home/NewsLetterSubscription";
import ServiceCards from "@/components/modules/Home/ServicesCards";
import StatsSection from "@/components/modules/Home/StatsSection";
import Team from "@/components/modules/Home/Team";
import WhatWeDo from "@/components/modules/Home/WhatWeDo";
import WhyShahMubarak from "@/components/modules/Home/WhyShahMubarak";
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
      <NewsLetterSubscription />
    </>
  );
};

export default HomePage;
