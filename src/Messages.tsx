import React, { useState } from "react";
import FullInput from "./FullInput";

export default function Messages() {
  let [messages, setMessages] = useState<string[]>(["message1", "message2"]);
  const addMessage = (title: string) => setMessages([title,...messages]);
  return (
    <div>
      <FullInput addMessage={addMessage} />
      {messages.map((message, i) => (
        <div key={i}>{message}</div>
      ))}
    </div>
  );
}
