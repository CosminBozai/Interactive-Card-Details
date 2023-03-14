import "./Form.scss";

function Form() {
  return (
    <form>
      <fieldset>
        <label htmlFor="cardholderName">CARDHOLDER NAME</label>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </fieldset>
      <fieldset>
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
      </fieldset>
      <div className="form-bottom">
        <div className="exp-date-container">
          <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
          <div className="exp-date-input-wrapper">
            <input type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
          </div>
        </div>
        <div className="cvc-container">
          <label htmlFor="cvc">CVC</label>
          <input type="number" placeholder="e.g 123" />
        </div>
      </div>
      <input type="submit" value="Confirm" className="confirm-btn" />
    </form>
  );
}

export default Form;
