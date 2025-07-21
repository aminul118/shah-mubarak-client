import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { IChildren } from "@/types";

const RootLayout = ({ children }: IChildren) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-464px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
