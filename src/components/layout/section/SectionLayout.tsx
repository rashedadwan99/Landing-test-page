import { SectionProps } from "./types/section.types";

function SectionLayout({
  children,
  subTitle,
  title,
  description,
  coloredTitle,
  customClass,
  descAlignment = "",
  headerAlignment = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`app-container pb-24 ${customClass || ""}`}>
      <div className={`section-header-texts ${headerAlignment}`}>
        <span className="text-sm text-secondary font-medium">{subTitle}</span>
        <h2 className="section-header  leading-12 capitalize space-x-3">
          {title} <span className="gradient-text">{coloredTitle}</span>
        </h2>
        <p className={`w-full text-center text-sm leading-6 ${descAlignment}`}>
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

export default SectionLayout;
