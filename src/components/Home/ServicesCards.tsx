// components/ServiceCards.jsx
import servicesData from "@/constants/servicesData";
import Link from "next/link";
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";

const ServiceCards = () => {
  return (
    <SectionContainer className="container ">
      <SectionHeading title="Our Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <Link
            href={service.slug}
            key={index}
            className=" p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold text-primary">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServiceCards;
