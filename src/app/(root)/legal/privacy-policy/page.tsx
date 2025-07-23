import React from "react";

const privacySections = [
  {
    title: "1. Information We Collect",
    type: "list",
    content: [
      "Personal identification information (Name, email address, phone number, etc.)",
      "Usage data (e.g., pages visited, time spent on site)",
      "Contact form submissions or newsletter signups",
    ],
  },
  {
    title: "2. How We Use Your Information",
    type: "list",
    content: [
      "To improve our services and user experience",
      "To respond to your inquiries or support requests",
      "To send you updates, offers, or newsletters (if subscribed)",
    ],
  },
  {
    title: "3. Data Protection",
    type: "text",
    content:
      "We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "4. Cookies",
    type: "text",
    content:
      "Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.",
  },
  {
    title: "5. Your Rights",
    type: "text",
    content:
      "You have the right to access, update, or delete your personal data. If you wish to exercise these rights, please contact us.",
  },
  {
    title: "6. Contact Us",
    type: "text",
    content: (
      <>
        If you have any questions about this privacy policy, please reach out to
        us at{" "}
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

const PrivacyPage = () => {
  return (
    <div className="min-h-screen px-6 py-16  text-primary">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 ">Privacy Policy</h1>

        <p className="mb-4">
          At Shah Mubaruk Business Consulting, we value your privacy and are
          committed to protecting your personal information. This policy
          explains how we handle your data.
        </p>

        {privacySections.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            {section.type === "list" ? (
              <ul className="list-disc list-inside space-y-2">
                {(section.content as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPage;
