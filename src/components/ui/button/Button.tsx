import { BtnProps, BtnVariantColors } from "./types/button.types";

function Button(props: BtnProps) {
  const variants: BtnVariantColors = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };
  return (
    <button
      className={`text-sm py-1 px-4 font-bold rounded-md ${variants[props.variant]} text-dark capitalize border border-accent/10`}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
