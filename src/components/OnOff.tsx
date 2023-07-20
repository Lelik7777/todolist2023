import React from "react";
import "../App.css";

type PropsType = {
  on: boolean;
  setOn:(on:boolean)=>void;
};
export default function OnOff({ on,setOn }: PropsType) {
  return (
    <div>
      <span className={on?'square on':'square'} onClick={()=>setOn(true)}>On</span>
      <span className={on?'square':'square off'} onClick={()=>setOn(false)}>Of</span>
      <span className={on ? "round" : "round off"}></span>
    </div>
  );
}
