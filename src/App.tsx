import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import "./App.scss";

export interface CardDetails {
  cardholderName?: string;
  cardNumber?: string;
  expMonth?: string;
  expYear?: string;
  cvc?: string;
}

function App() {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardholderName: "JANE APPLESEED",
    cardNumber: "0000000000000000",
    expMonth: "00",
    expYear: "00",
    cvc: "00",
  });

  return (
    <div className="App">
      <header className="small">
        <Card cardDetails={cardDetails} />
      </header>
      <main className="small">
        <Form setCardDetails={setCardDetails} />
      </main>
      <header className="large">
        <Card cardDetails={cardDetails} />
      </header>
      <main className="large">
        <Form setCardDetails={setCardDetails} />
      </main>
    </div>
  );
}

export default App;
