import React from "react";

interface ICountProps {
  count: number;
}

const Count: React.FC<ICountProps> = ({count}) => {
  return (
    <p><code>Count: {count}</code></p>
  )
};

export default Count;
