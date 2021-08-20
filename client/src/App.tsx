import React, { useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

const App: React.FC = () => {
  useEffect(() => {
    socket.on('message', (message: string) => {

    })
  }, [])
  return (
    <div className="App">
      <h1>Devly - Chat for developers</h1>
    </div>
  );
};

export default App;
