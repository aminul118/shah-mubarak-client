// components/Team.tsx
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const teamMembers = [
  {
    name: "Md Shah Mubarak",
    designation: "Founder & CEO",
    image: "/team/team1.jpg",
  },
  {
    name: "Md Shah Mubarak",
    designation: "Founder & CEO",
    image: "/team/team1.jpg",
  },
  {
    name: "Md Shah Mubarak",
    designation: "Founder & CEO",
    image: "/team/team1.jpg",
  },
];

const Team = () => {
  return (
    <SectionContainer id="team" className="py-16 bg-black">
      <SectionHeading
        title="Meet Our Team"
        description="The people behind the success"
      />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-40 h-40 mx-auto mt-6 rounded-full overflow-hidden group">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.designation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Team;
