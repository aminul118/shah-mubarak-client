import {
  Briefcase,
  BarChart3,
  LineChart,
  Settings,
  Users,
  ShieldCheck,
  GraduationCap,
  Laptop,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";

const services = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Business Strategy",
    points: ["Strategic Planning", "SWOT Analysis"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Marketing Consulting",
    points: [
      "Market Research",
      "Marketing Strategy Development",
      "Digital Marketing",
    ],
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Financial Consulting",
    points: [
      "Financial Analysis",
      "Budgeting and Forecasting",
      "Cash Flow Management",
    ],
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Operational Improvement",
    points: ["Process Optimization", "Supply Chain Management"],
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Human Resources Consulting",
    points: ["Talent Management", "HR Policy Development"],
  },
  {
    icon: <Laptop className="w-6 h-6 text-primary" />,
    title: "Technology & IT Consulting",
    points: ["IT Strategy", "System Integration"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Risk Management",
    points: ["Identifying and Mitigating Risks", "Compliance"],
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Training & Development",
    points: ["Employee Training Programs", "Leadership Development"],
  },
];

const WhatWeDo = () => {
  return (
    <SectionContainer className="container">
      <SectionHeading
        title="What We Do"
        description=" Shah Mubaruk offers tailored consulting services to help your business grow, adapt, and thrive in a dynamic environment."
      />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, idx) => (
          <Card
            data-aos="fade-up"
            key={idx}
            className=" hover:shadow-xl bg-black/70 transition-shadow duration-300 h-full"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default WhatWeDo;
