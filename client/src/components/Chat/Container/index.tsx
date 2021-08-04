import React, { useState, useEffect } from "react";
import socketIoClient, { Socket } from "socket.io-client";
import Message from "../Message";

const socket: Socket = socketIoClient("http://localhost:5000", {
  autoConnect: true,
});

function Chat() {


  useEffect(() => {
  }, []);

  return (
    <div className="chat__container">
    </div>
  );
}

export default Chat;
