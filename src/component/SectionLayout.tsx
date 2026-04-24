import React from "react";
interface IProps {
  children?: React.ReactNode;
  title: string;
  coloredTitle: string;
  description: string;
  subTitle: string;
  customClass?: string;
  id: string;
}
function SectionLayout({
  children,
  subTitle,
  title,
  description,
  coloredTitle,
  customClass,
  id,
}: IProps) {
  return (
    <section id={id} className={`app-container pb-24 ${customClass || ""}`}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className="text-sm text-secondary font-medium">{subTitle}</span>
        <h2 className="section-header  leading-12 capitalize space-x-3">
          {title} <span className="gradient-text">{coloredTitle}</span>
        </h2>
        <p className="w-full text-center text-md leading-6">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default SectionLayout;
