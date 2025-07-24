import Link from "next/link";
import { Button } from "../ui/button";

const BookConsultation = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 text-primary justify-center">
        <Link href="/consultation">
          <Button>Schedule A Consultation</Button>
        </Link>
        <Link href="/#contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default BookConsultation;
