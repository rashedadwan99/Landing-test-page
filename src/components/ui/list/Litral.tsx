type Horizontal = "left" | "right" | "center";
type Vertical = "top" | "bottom" | "center";
type PositionProp = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center">;
};
function Litral({ position }: PositionProp) {
  return <div>Restricting</div>;
}

export default Litral;
