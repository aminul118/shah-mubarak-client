"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color?: string;
          label?: string;
          target: HTMLElement | null;
        }) => void;
      };
    };
  }
}

interface GoogleCalendarButtonProps {
  targetId: string;
  color?: string;
  label?: string;
}

const GoogleCalendarButton = ({
  targetId,
  color = "#039BE5",
  label = "Book an appointment",
}: GoogleCalendarButtonProps) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.innerHTML = "";
        if (window.calendar?.schedulingButton) {
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1acS82msebWjueq-hv0ylmTPhx7NNT-gPo6x57SPhKPQGnRS8jZ7L6lME_HNQyglCtL9WTXcgu?gv=true",
            color,
            label,
            target,
          });
        }
      }
    };

    document.body.appendChild(script);
  }, [targetId, color, label]);

  return (
    <div
      id={targetId}
      className="rounded-full shadow-md hover:scale-105 transition-transform duration-300"
    />
  );
};

export default GoogleCalendarButton;
