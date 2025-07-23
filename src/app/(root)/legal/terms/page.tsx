/* eslint-disable react/no-unescaped-entities */
import React from "react";

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Shah Mubaruk Business Consulting website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of the terms, you may not use our services.",
  },
  {
    title: "2. Services Offered",
    content:
      "We provide business consulting services including startup guidance, financial strategy, operational development, and market expansion. All services are provided based on availability and scope discussed during engagement.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You agree to use our website and services lawfully and refrain from any activity that may harm our systems or other users. Providing false or misleading information is strictly prohibited.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content on this site including text, graphics, logos, and images are the property of Shah Mubaruk Business Consulting and protected under applicable copyright and trademark laws.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or website, including but not limited to loss of data or profit.",
  },
  {
    title: "6. Termination",
    content:
      "We reserve the right to suspend or terminate your access to our services at any time for violations of our terms or for any other reason deemed necessary.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "We may update or modify these Terms of Service at any time without prior notice. Continued use of the site after such changes constitutes your agreement to the new terms.",
  },
  {
    title: "8. Governing Law",
    content:
      "These terms are governed by the laws of the jurisdiction in which Shah Mubaruk Business Consulting operates. Any disputes shall be resolved in the relevant courts of that jurisdiction.",
  },
  {
    title: "9. Contact Information",
    content: (
      <>
        If you have any questions regarding these Terms of Service, please
        contact us at{" "}
        <a
          href="mailto:info@shahmubaruk.com"
          className="text-primary underline"
        >
          info@shahmubaruk.com
        </a>
        .
      </>
    ),
  },
];

const TermsServicesPage = () => {
  return (
    <div className="min-h-screen px-6 py-16  text-primary">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-6">
          These Terms of Service govern your use of Shah Mubaruk Business
          Consulting's website and services. Please read them carefully.
        </p>

        {termsData.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsServicesPage;
