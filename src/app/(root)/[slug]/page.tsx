import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import servicesData from "@/constants/servicesData";
import { Params } from "@/types"; // Make sure the Params type is fixed as above
import { notFound } from "next/navigation";

const ServiceDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <SectionContainer className="max-w-5xl">
      <Card className="flex flex-col justify-center items-center p-6 space-y-4">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        {service.description.map((s, i) => (
          <p className="text-justify" key={i}>
            {s}
          </p>
        ))}
      </Card>
    </SectionContainer>
  );
};

export default ServiceDetailsPage;
