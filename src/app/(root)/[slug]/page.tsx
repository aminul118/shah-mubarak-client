import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import servicesData from "@/constants/servicesData";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const ServiceDetailsPage = ({ params }: Props) => {
  const service = servicesData.find((item) => item.slug === params.slug);

  if (!service) return notFound();

  return (
    <SectionContainer className="max-w-5xl">
      <Card className=" flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
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
