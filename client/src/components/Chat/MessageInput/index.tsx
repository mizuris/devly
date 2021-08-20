import React, { useState } from "react";

type Props = {
  sendHandler: (message: string) => void;
};

function MessageInput({ sendHandler }: Props) {
  const [msg, setMsg] = useState<string>("");

  const handleSend = () => {
    sendHandler(msg);
    setMsg("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter message..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />
      <button onClick={handleSend} type="submit">
        Send
      </button>
    </div>
  );
}

export default MessageInput;
