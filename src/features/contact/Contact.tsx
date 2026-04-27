import SectionLayout from "../../components/layout/section/SectionLayout";
import { contactDetails } from "@/features/contact/data/contact.data";

function Contact() {
  return (
    <div className="app-container py-10">
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
          const Icon = c.icon;
          return (
            <div className="flex gap-3 items-center pt-4" key={c.text}>
              <div className="rounded-lg flex justify-center align-center p-4 bg-secondary/10 text-primary">
                <Icon />
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
  );
}

export default Contact;
