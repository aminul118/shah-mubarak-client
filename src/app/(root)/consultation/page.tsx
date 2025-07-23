/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Clock } from "lucide-react"; // Make sure lucide-react is installed

const ConsultationPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <div className="text-center animate-pulse">
        <Clock className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-primary">Coming Soon</h1>
        <p className=" max-w-md text-primary">
          We're working hard to bring you our business consultation services.
          Stay tuned for strategic insights and expert guidance tailored for
          your success.
        </p>
      </div>
    </div>
  );
};

export default ConsultationPage;
