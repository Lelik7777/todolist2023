import { type } from "os";
import React, { ChangeEvent, useState } from "react";
type PropsType = {
  title: string;
  setTitle: (title: string) => void;
};
export default function Input({ title,setTitle }: PropsType) {
  const addInputHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  return <input type="text" value={title} onChange={addInputHandler} />;
}
