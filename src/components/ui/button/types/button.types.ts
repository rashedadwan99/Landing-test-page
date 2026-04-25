export type BtnVariant = "primary" | "secondary";
export type BtnProps = {
  label: string;
  variant: BtnVariant;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type BtnVariantColors = {
  [k in BtnVariant]: string;
};
