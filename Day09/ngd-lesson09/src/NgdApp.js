import React from "react";
import NgdUseState from "./components/NgdUseState";
import NgdUseStateListObject from "./components/NgdUseStateListObject";
import NgdEffect1 from "./components/NgdEffect1";

const NgdApp = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hook</h1>
      <NgdUseState />
      <NgdUseStateListObject />
      <NgdEffect1 />
    </div>
  );
};

export default NgdApp;