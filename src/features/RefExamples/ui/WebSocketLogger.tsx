import { useEffect, useRef } from "react";

export const WebSocketLogger = () => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://ws.postman-echo.com/raw");

    socketRef.current.onopen = () => {
      console.log("WebSocket подключен");

      socketRef.current?.send("Привет, WebSocket!");
    };

    socketRef.current.onmessage = (event) => {
      console.log("Получено сообщение:", event.data);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return <div>WebSocketLogger</div>;
};
