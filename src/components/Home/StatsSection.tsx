"use client";

import CountUp from "react-countup";
import { UsersRound, HardHat, UserCheck, Monitor } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: UsersRound,
    value: 1000,
    label: "Happy Customer",
  },
  {
    id: 2,
    icon: HardHat,
    value: 550,
    label: "Complete Projects",
  },
  {
    id: 3,
    icon: UserCheck,
    value: 30,
    label: "Years of Experience",
  },
  {
    id: 4,
    icon: Monitor,
    value: 45,
    label: "Professional Team",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#032B46] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map(({ id, icon: Icon, value, label }) => (
          <div key={id} className="flex flex-col items-center space-y-4">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
              <Icon className="w-10 h-10 text-[#032B46]" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              <CountUp end={value} duration={2} suffix="+" />
            </h3>
            <p className="text-white text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
