import React from "react";
type Size = "sm" | "md" | "lg";
type Props<E extends React.ElementType> = {
  children: React.ReactNode;
  size: Size;
  as?: E;
};
type Sizes = { [K in Size]: string };
const sizes: Sizes = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-xl",
};
function PolypormicComponent<E extends React.ElementType = "div">({
  children,
  size,
  as,
}: Props<E> & Omit<React.ComponentProps<E>, keyof Props<E>>) {
  const Component = as || "div";
  if (as) return <Component className={`${sizes[size]}`}>{children}</Component>;
}

export default PolypormicComponent;
