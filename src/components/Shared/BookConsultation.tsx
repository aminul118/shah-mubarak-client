import Link from "next/link";
import { Button } from "../ui/button";
import GoogleCalendarButton from "./GoogleCalender";

const BookConsultation = ({
  className,
  targetId,
}: {
  className?: string;
  targetId: string;
}) => {
  return (
    <div>
      <div className={`flex  gap-4 text-primary justify-center ${className}`}>
        {/* <Link href="/consultation">
          <Button>Schedule A Consultation</Button>
        </Link> */}
        <GoogleCalendarButton targetId={targetId} />

        <div>
          <Link href="/#contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
