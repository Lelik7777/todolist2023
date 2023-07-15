import React from "react";
type PropsType = {
  name: string;
  callback: () => void;
};
export default function Button({ callback, name }: PropsType) {
  const addOnClickHandler = ()=>callback();
  return (
    <button onClick={addOnClickHandler}>
      {name}
    </button>
  );
}
