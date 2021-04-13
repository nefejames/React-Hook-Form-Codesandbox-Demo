import * as Yup from "yup";
import "./styles.scss";
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  select: Yup.string().required("Color is required!"),
  email: Yup.string().email().required("Email is required"),
  checkbox: Yup.bool().oneOf([true], "Checkbox is required"),
  radio: Yup.string().required("Radio is required!"),
});

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const App = () => {
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={register} />
          {errors.email && <p className="error"> {errors.email.message} </p>}
        </div>
        <div className="form-row">
          <label htmlFor="email">Select a color to continue</label>
          <select name="select" ref={register}>
            <option value="" label="Select a color" />
            <option value="red" label="red" />
            <option value="blue" label="blue" />
            <option value="green" label="green" />
          </select>
          {errors.select && <p className="error"> {errors.select.message} </p>}
        </div>

        <div className="form-row">
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" ref={register} />
            Accept Terms & Conditions
          </label>
          {errors.checkbox && (
            <p className="error"> {errors.checkbox.message} </p>
          )}
        </div>

        <div>
          <label>
            <input type="radio" name="radio" value="Option 1" ref={register} />
            One
          </label>
          <label>
            <input type="radio" name="radio" value="Option 2" ref={register} />
            Two
          </label>
          {errors.radio && <p className="error"> {errors.radio.message} </p>}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default App;
