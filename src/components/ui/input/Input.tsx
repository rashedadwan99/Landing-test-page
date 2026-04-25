function Input() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };
  return (
    <input
      type="text"
      className="p-1 border-primary/10 outline-0 rounded-md border"
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Input;
