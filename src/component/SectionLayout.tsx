import React from "react";
interface IProps {
  children?: React.ReactNode;
  title: string;
  coloredTitle: string;
  description: string;
  subTitle: string;
  customClass?: string;
  id: string;
  descAlignment?: string;
  headerAlignment?: string;
}
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
}: IProps) {
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
