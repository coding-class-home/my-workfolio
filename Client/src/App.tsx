import React from 'react';
import './App.css';
import { ButtonComponent } from './common/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent
          variant="contained"
          disabled
          size="medium"
          color="warning"
          text="Hello"
        />
        <ButtonComponent
          variant="contained"
          size="small"
          color="warning"
          text="Hi"
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
