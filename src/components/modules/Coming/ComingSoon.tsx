/* eslint-disable react/no-unescaped-entities */
import { Clock } from "lucide-react";
import React from "react";

const ComingSoon = ({ description }: { description: string }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <div className="text-center animate-pulse">
        <Clock className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-primary">Coming Soon</h1>
        <p className=" max-w-md text-primary">{description}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
