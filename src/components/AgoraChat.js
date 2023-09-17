import React, { useState, useEffect } from "react";
import "../prova.css";
import AC from "agora-chat";

function AgoraChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [connection, setConnection] = useState(null);
  const [conn, setConn] = useState(null);
  const [userId, setUserId] = useState("12345678"); // You can set this dynamically based on your app's user system
  const [agoraToken, setAgoraToken] = useState(
    "007eJxTYOAsmfec7f3ZTWujq19f681bJjz1dvCh/tJQDv4U25QjgTYKDObJiQZmFmZGhsnmqSYmaeaWqYaWSQZpBimpaSYWFqnJ73JZUxsCGRkyWJqZGBlYGRiBEMRXYUhLMrFMTjMy0DU1TjHSNTRMTdVNsjBJ0jU3NUizMDGzMEw1NgIAgY4mxg=="
  ); // This should be fetched securely from your backend

  useEffect(() => {
    const initializeChat = async () => {
      const connection = new AC.connection({
        appKey: "411029937#1203000",
      });

      const options = {
        user: userId,
        agoraToken: agoraToken,
      };

      connection.open(options);
      setConn(connection);

      // Listen for incoming messages
      connection.on("message", (message) => {
        setMessages((prev) => [...prev, message.data]);
        console.log(connection);
      });
    };

    initializeChat();
  }, [userId, agoraToken]);

  const sendMessage = () => {
    if (!conn) {
      console.error("Connection is not initialized");
      return;
    }

    let option = {
      chatType: "chatRoom", // Change to chatRoom
      type: "txt",
      to: "225925099749377", // Replace with your chat room ID
      msg: inputValue,
    };
    let msg = AC.message.create(option);
    conn
      .send(msg)
      .then(() => {
        console.log("Message sent successfully");
        setMessages((prev) => [...prev, inputValue]);
        setInputValue("");
      })
      .catch((e) => {
        console.error("Error sending message:", e);
      });
  };
  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default AgoraChat;
