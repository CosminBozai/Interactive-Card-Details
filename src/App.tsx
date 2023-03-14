import { useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="small">
        <Card />
      </header>
      <main className="small">
        <Form />
      </main>
      <header className="large">
        <Card />
      </header>
      <main className="large">
        <Form />
      </main>
    </div>
  );
}

export default App;
