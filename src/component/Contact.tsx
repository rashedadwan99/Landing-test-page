import React from "react";
import SectionLayout from "./SectionLayout";
interface ContactDetails {
  title: string;
  text: string;
  icon: React.ReactNode;
}
const contactDetails: ContactDetails[] = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];
function Contact() {
  return (
    <div className="app-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-4">
        <SectionLayout
          id="contact"
          title="Ready to"
          coloredTitle="Transform"
          customClass="items-start"
          descAlignment="text-start"
          headerAlignment="items-start"
          subTitle="Get In touch"
          description="Our team of AI experts is ready to help you implement cutting-edge solutions tailored to your specific needs. Contact us today to schedule a consultation."
        >
          {contactDetails.map((c) => {
            return (
              <div className="flex gap-3 items-center pt-4" key={c.text}>
                <div className="rounded-lg flex justify-center align-center p-4 bg-secondary/10 text-primary">
                  {c.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="contact-title">{c.title}</span>
                  <span className="text-[10px] font-semibold text-dark/80">
                    {c.text}
                  </span>
                </div>
              </div>
            );
          })}
        </SectionLayout>
      </div>
    </div>
  );
}

export default Contact;
