import { InputProps } from "./types/input.types";

function Input({ ...rest }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };
  return (
    <input
      {...rest}
      className="p-1 border-primary/10 outline-0 rounded-md border"
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Input;
