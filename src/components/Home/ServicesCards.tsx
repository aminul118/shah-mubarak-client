// components/ServiceCards.jsx
import servicesData from "@/constants/servicesData";
import Link from "next/link";
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import BookConsultation from "../Shared/BookConsultation";

const ServiceCards = () => {
  return (
    <SectionContainer id="services" className="container ">
      <SectionHeading title="Our Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <Link
            href={service.slug}
            key={index}
            className=" p-6 rounded-2xl shadow-xl border border-primary/5"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-primary h-10">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
      <BookConsultation className="mt-12 2xl:mt-24" />
    </SectionContainer>
  );
};

export default ServiceCards;
