import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("shows default values when fields have no value", () => {
    const cardDetails = {
      cvc: "",
      cardNumber: "",
      cardholderName: "",
      expMonth: "",
      expYear: "",
    };

    render(<Card cardDetails={cardDetails} />);

    expect(screen.getByTestId("card-number").textContent).toBe(
      "0000 0000 0000 0000"
    );

    expect(screen.getByText("123")).toBeInTheDocument();

    expect(screen.getByText("Jane Appleseed")).toBeInTheDocument();

    expect(screen.getByTestId("exp-date").textContent).toEqual("00 / 00");
  });

  it("renders the card with the correct details", () => {
    const cardDetails = {
      cvc: "123",
      cardNumber: "1234567890123456",
      cardholderName: "John Doe",
      expMonth: "12",
      expYear: "24",
    };

    render(<Card cardDetails={cardDetails} />);

    expect(screen.getByTestId("card-number").textContent).toBe(
      "1234 5678 9012 3456"
    );

    expect(screen.getByText("123")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByTestId("exp-date").textContent).toEqual("12 / 24");
  });
});
