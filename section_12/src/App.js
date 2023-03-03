import React, { useState, useCallback } from "react";

import "./App.css";
import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  console.log("App running");
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleButtonHandler = useCallback(() => setShowParagraph((prevPara) => !prevPara), []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={toggleButtonHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
