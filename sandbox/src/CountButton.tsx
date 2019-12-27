import React, {Dispatch} from "react";

interface ICounter {
  count: number;
  setCount: Dispatch<number>;
}

const CountButton: React.FC<ICounter> = (props) => {
  const { count, setCount } = props;
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CountButton;