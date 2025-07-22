import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import Image from "next/image";
import { faqData } from "@/constants/faqData";

const FAQ = () => {
  return (
    <SectionContainer className="container mx-auto">
      <SectionHeading title="FAQ" />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* FAQ Image */}
        <div className="mx-auto">
          <Image
            src={"/logos/FAQ.png"}
            width={500}
            height={500}
            alt="FAQ image of TabEdge"
            className="max-w-[80%] md:max-w-full"
          />
        </div>

        {/* Accordion Content */}
        <div className="max-w-xl w-full text-primary">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answers}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQ;
