import { MetaProps } from "@/types";
import { Metadata } from "next";

const baseUrl = "https://www.a1-lifts.com";

export const generateMetaTags = ({
  title,
  description,
  keywords,
  image = "/assets/screenshots/hero.png",
  path = "",
}: MetaProps): Metadata => {
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    category: "Commercial & Industrial Equipment Supplier",
    openGraph: {
      type: "website",
      url: `${baseUrl}/${path}`,
      title: title,
      description: description,
      siteName: "A1 Lifts and Engineering",
      images: [{ url: image, alt: title }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: "summary_large_image",
      site: "@a1lifts",
      creator: "@a1liftsandengineering",
      title,
      description,
      images: image,
    },
    applicationName: "A1 Lifts and Engineering",
    alternates: {
      canonical: `${baseUrl}/${path}`,
      languages: {
        "en-US": `${baseUrl}/en-US`,
      },
    },
    facebook: { appId: "580317868506376" },
    manifest: "/manifest.webmanifest",
    authors: [
      {
        name: "Md. Abdul Motaleb",
        // url: "http://www.shrlbd.com/team/675663806e9379ed3c2a6f99",
      },
    ],
  };
};
