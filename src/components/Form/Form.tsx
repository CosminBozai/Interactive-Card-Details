import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";

interface FormInput {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="cardholderName">CARDHOLDER NAME</label>
        <input
          {...register("cardholderName", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "This is not a valid name",
            },
          })}
          type="text"
          placeholder="e.g. Jane Appleseed"
          className={errors.cardholderName ? "invalid" : ""}
        />
        <p className="error-msg">{errors.cardholderName?.message}</p>
      </fieldset>
      <fieldset>
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          {...register("cardNumber", {
            required: "This field is required",
            pattern: { value: /^\d{16}$/, message: "Needs to be 16 digits" },
          })}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className={errors.cardNumber ? "invalid" : ""}
        />
        <p className="error-msg">{errors.cardNumber?.message}</p>
      </fieldset>
      <div className="form-bottom">
        <div className="exp-date-container">
          <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
          <div className="exp-date-input-wrapper">
            <input
              {...register("expMonth", {
                required: "Can't be blank",
                pattern: {
                  value: /^(0[1-9]|1[0-2])$/,
                  message: "Invalid month",
                },
              })}
              type="number"
              placeholder="MM"
              className={errors.expMonth ? "invalid" : ""}
            />
            <input
              {...register("expYear", {
                required: "Can't be blank",
                pattern: {
                  value: /^(0[0-9]|[1-9][0-9])$/,
                  message: "Invalid year",
                },
              })}
              type="number"
              placeholder="YY"
              className={errors.expYear ? "invalid" : ""}
            />
          </div>
          <p className="error-msg">
            {errors.expMonth?.message || errors.expYear?.message}
          </p>
        </div>
        <div className="cvc-container">
          <label htmlFor="cvc">CVC</label>
          <input
            {...register("cvc", {
              required: "Can't be blank",
              pattern: { value: /^[0-9]{1,3}$/, message: "Invalid CVC" },
            })}
            type="number"
            placeholder="e.g 123"
            className={errors.cvc ? "invalid" : ""}
          />
          <p className="error-msg">{errors.cvc?.message}</p>
        </div>
      </div>
      <input type="submit" value="Confirm" className="confirm-btn" />
    </form>
  );
}

export default Form;
