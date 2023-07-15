import React from "react";
import "./App.css";

type PropsType = {
  on: boolean;
};
export default function OnOff({ on }: PropsType) {
  return (
    <div>
      <span className={on?'square on':'square'}>On</span>
      <span className={on?'square':'square off'}>Of</span>
      <span className={on ? "round" : "round off"}></span>
    </div>
  );
}
