import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Children } from "@/types";

const RootLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-464px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
