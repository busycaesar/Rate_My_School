import "./App.css";
import { getRoot } from "./lib";
import { useState, useEffect } from "react";

const App = () => {
  const [backendMessage, setBackendMessage] = useState("");
  useEffect(() => {
    getRoot()
      .then((receivedBackendMessage) =>
        setBackendMessage(receivedBackendMessage)
      )
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Hello from frontend!</h1>
      <h1>{backendMessage}</h1>
    </>
  );
};

export default App;
