import React from "react";
import SectionLayout from "../layout/section/SectionLayout";
type TagColor = "primary" | "secondary" | "accent";
type Tag = {
  text: string;
  color: TagColor;
};
type AiType = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: Tag[];
};
type AiTypes = AiType[];
type Tags = Tags[];
type CTags = {
  [K in TagColor]: string;
};
const aiTypes: AiTypes = [
  {
    title: "Machine Learning",
    description:
      "Systems that learn and improve from experience without being explicitly programmed.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    tags: [
      { text: "Predictive", color: "primary" },
      { text: "Adaptive", color: "secondary" },
    ],
  },
  {
    title: "Neural Networks",
    description:
      "Biologically inspired networks that simulate human brain functions for pattern recognition.",
    image:
      "https://images.unsplash.com/photo-1645839057098-5ea8761a6b09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
    tags: [
      { text: "Deep Learning", color: "primary" },
      { text: "Complex Data", color: "accent" },
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Enabling machines to understand, interpret, and generate human language naturally.",
    image:
      "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    tags: [
      { text: "Chatbots", color: "secondary" },
      { text: "Translation", color: "accent" },
    ],
  },
];

const tagColors: CTags = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

function AiTypes() {
  return (
    <SectionLayout
      id="types"
      subTitle="AI Technologies"
      title="different Types of"
      coloredTitle="Artificial Intelligence"
      description=" Explore the diverce landscape of AI technologies that are shaping our future."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
        {aiTypes.map((type) => {
          return (
            <div className="ai-type-card" key={type.title}>
              <img
                src={type.image}
                alt="card image"
                className="ai-type-card-image"
              />
              <div className="flex items-center p-4">
                <span className="ai-type-card-icon">{type.icon}</span>
                <h3 className="font-bold text-lg capitalize">{type.title}</h3>
              </div>
              <p className="max-w-full text-md tracking-wide font-light m-auto px-5 pb-5">
                {type.description}
              </p>
              <div className="flex p-4 gap-4 items-center">
                {type.tags.map((tag) => {
                  return (
                    <div
                      className={`px-3 py-2  text-center rounded-full text-xs ${tagColors[tag.color]}`}
                    >
                      {tag.text}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}

export default AiTypes;
