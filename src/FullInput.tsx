import React, { ChangeEvent, useState } from "react";

type PropsType = {
  addMessage: (title: string) => void;
};
export default function FullInput({ addMessage }: PropsType) {
  let [title, setTitle] = useState<string>("");
  console.log(title);

  const addOnClickHandler = () => {
    addMessage(title);
    setTitle("");
  };
  const addInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={addInputHandler}value={title} />
      <button onClick={addOnClickHandler}>add</button>
    </div>
  );
}
