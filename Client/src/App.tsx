import React from 'react';
import './App.css';
import CheckboxComponent from "./common/Checkbox";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CheckboxComponent
          color="secondary"
          label="yinke"
          value="Yinke"
        />

        <h1>Showcase Me</h1>
        <h2>Showcase Me</h2>
        <h3>Showcase Me</h3>
        <h4>Showcase Me</h4>
        <h5>Showcase Me</h5>
        <h6>Showcase Me</h6>
      </header>
    </div>
  );
}

export default App;
