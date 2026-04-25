import SectionLayout from "../../components/layout/section/SectionLayout";
import { colorClasses } from "./types/benefits.types";
import { benefits } from "./data/benefits.data";

function AiBenefits() {
  return (
    <SectionLayout
      coloredTitle="Transforming Our World"
      title="How AI is"
      description="Discover the positive impact of AI across various sectors and industries"
      id="benefits"
      subTitle="AI Benefits"
      customClass="bg-dark rounded-2xl py-8 text-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 mt-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              className="p-4  benefit-card  text-white flex flex-col justify-center gap-4"
              key={b.title}
            >
              <div className={`benefit-card-icon ${colorClasses[b.color]}`}>
                <Icon />
              </div>
              <h3 className="font-bold text-md">{b.title}</h3>
              <p className="max-w-full text-sm text-white/90">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}

export default AiBenefits;
