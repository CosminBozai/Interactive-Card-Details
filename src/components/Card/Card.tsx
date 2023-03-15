import { ReactComponent as CardLogo } from "../../assets/images/card-logo.svg";
import { CardDetails } from "../../App";
import "./Card.scss";

interface Props {
  cardDetails: CardDetails;
}

function Card({ cardDetails }: Props) {
  const { cvc, cardNumber, cardholderName, expMonth, expYear } = cardDetails;

  const diplayNumbers = cardNumber === "" ? "0000000000000000" : cardNumber!;
  return (
    <>
      {/* Back of the card  */}
      <div className="card-back">
        <div className="card-cvc">{cvc}</div>
      </div>

      {/* Front of the card  */}
      <div className="card-front">
        <CardLogo className="card-logo" />
        <div className="card-number">
          <span>{diplayNumbers[0]}</span>
          <span>{diplayNumbers[1]}</span>
          <span>{diplayNumbers[2]}</span>
          <span>{diplayNumbers[3]}</span>
          <span> </span>
          <span>{diplayNumbers[4]}</span>
          <span>{diplayNumbers[5]}</span>
          <span>{diplayNumbers[6]}</span>
          <span>{diplayNumbers[7]}</span>
          <span> </span>
          <span>{diplayNumbers[8]}</span>
          <span>{diplayNumbers[9]}</span>
          <span>{diplayNumbers[10]}</span>
          <span>{diplayNumbers[11]}</span>
          <span> </span>
          <span>{diplayNumbers[12]}</span>
          <span>{diplayNumbers[13]}</span>
          <span>{diplayNumbers[14]}</span>
          <span>{diplayNumbers[15]}</span>
        </div>
        <div className="card-front-bottom">
          <div className="card-name">{cardholderName}</div>
          <div className="card-exp-date">{expMonth + "/" + expYear}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
