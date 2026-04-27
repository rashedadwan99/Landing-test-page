export type BtnVariant = "primary" | "secondary";
export type BtnProps = {
  label: string;
  variant: BtnVariant;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & Omit<React.ComponentProps<"button">, "children">;
export type BtnVariantColors = {
  [k in BtnVariant]: string;
};
