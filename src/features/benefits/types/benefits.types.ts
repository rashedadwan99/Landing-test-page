type Classes = "primary" | "secondary" | "accent";
export type Benefits = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: Classes;
};
type ColorClasses = {
  [K in Classes]: string;
};

export const colorClasses: ColorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};
