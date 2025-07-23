// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Children } from "@/types";
import { poppins } from "@/lib/fonts";
import AosProvider from "@/providers/AosProvider";
import { Toaster } from "sonner";
import { generateMetaTags } from "@/Seo/genarateMetaTags";

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: "Shah Mubaruk Business Consulting: Guiding Growth, Inspiring Success!",
  description:
    "Shah Mubaruk Business Consulting provides expert guidance across business strategy, financial analysis, startup support, international expansion, and more. Your partner in sustainable growth.",
  keywords:
    "Shah Mubaruk, business consulting, startup support, financial analysis, Bangladesh consulting, business strategy, US company formation, fundraising, digital marketing, operational improvement, technology consulting",
  image: "/ss/hero-bg.png",
  path: "https://www.shahmubaruk.com/ss/hero-bg.png",
});
// >> SEO End

const MainLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AosProvider>{children}</AosProvider>
        <Toaster position="top-center" expand={false} />
      </body>
    </html>
  );
};

export default MainLayout;
