import { memo, useCallback, useReducer } from "react";
import Button from "./components/ui/button/Button";

function ReducerHook() {
  enum Types {
    Increment = "Increment",
    Decrement = "Decrement",
    Reset = "Reset",
  }
  type UpdateActionTypes = Types.Increment | Types.Decrement;
  type CounterState = { count: number };
  const initialState: CounterState = { count: 0 };
  type UpdateAction = { payload: number; type: UpdateActionTypes };
  type ResetAction = {
    type: Types.Reset;
  };
  const reducer = (state: CounterState, action: UpdateAction | ResetAction) => {
    switch (action.type) {
      case Types.Increment:
        return { count: state.count + action.payload };
      case Types.Decrement:
        return { count: state.count - action.payload };
      case Types.Reset:
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const increase = () => dispatch({ type: Types.Increment, payload: 1 });

  const decrease = () => dispatch({ type: Types.Decrement, payload: 1 });
  const reset = () => dispatch({ type: Types.Reset });
  return (
    <>
      <Button variant="primary" label="increase" handleClick={increase} />
      {state.count}
      <Button variant="primary" label="decrease" handleClick={decrease} />
      <Button variant="primary" label="reset" handleClick={reset} />
    </>
  );
}

export default memo(ReducerHook);
