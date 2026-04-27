import { BtnProps, BtnVariantColors } from "./types/button.types";

function Button({ label, variant, handleClick, ...rest }: BtnProps) {
  const variants: BtnVariantColors = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };
  return (
    <button
      className={`text-sm py-1 px-4 font-bold rounded-md ${variants[variant]} text-dark capitalize border border-accent/10`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
