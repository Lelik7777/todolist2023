import { useState } from "react";
import Button from "./Button";
import FullInput from "./FullInput";
import Input from "./Input";

export default function Messages() {
  let [messages, setMessages] = useState<string[]>(["message1", "message2"]);
  //for component Input
  let [title, setTitle] = useState<string>("");
  const addMessage = (title: string) => setMessages([title, ...messages]);
  const addMessage2 = () => {
    setMessages([title, ...messages]);
    setTitle("");
  };
  return (
    <div>
      <FullInput addMessage={addMessage} />
      <Input title={title} setTitle={setTitle} />
      <Button name="add" callback={addMessage2} />
      {messages.map((message, i) => (
        <div key={i}>{message}</div>
      ))}
    </div>
  );
}
