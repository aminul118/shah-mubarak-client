import {
  Briefcase,
  Monitor,
  DollarSign,
  Megaphone,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "01",
    title: "Management Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <Briefcase className="h-8 w-8 text-pink-400" />,
  },
  {
    id: "02",
    title: "IT/Technology Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <Monitor className="h-8 w-8 text-pink-400" />,
  },
  {
    id: "03",
    title: "Financial Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <DollarSign className="h-8 w-8 text-pink-400" />,
  },
  {
    id: "04",
    title: "Marketing Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <Megaphone className="h-8 w-8 text-pink-400" />,
  },
  {
    id: "05",
    title: "Compliance Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <ShieldCheck className="h-8 w-8 text-pink-400" />,
  },
  {
    id: "06",
    title: "Operations Consulting",
    desc: "raesent feugiat, nunc et congue ultricies, leo lacus vehicula eros, at ullamcorper erat orci nec turpis. Nulla facilisi. Aliquam erat volutpat",
    icon: <Settings className="h-8 w-8 text-pink-400" />,
  },
];

const ConsultingOfferings = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-sm bg-white text-black px-4 py-1 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Explore Our Consulting Offerings
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ut varius tincidunt libero. Curabitur at lacus ac velit ornare
          lobortis. Phasellus dolor. Vestibulum ante ipsum primis in faucibus
          orci luctus et Vestibulum ante ipsum primis in faucibus orci luctus et
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="p-6 space-y-4">
              <div>{service.icon}</div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="w-8 h-1 bg-red-500 rounded" />
                <span className="text-sm">{service.id}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConsultingOfferings;
