import Form from "../../components/Form";
import useValidInput from "../../hooks/use-valid";
import style from "../../styles/componentStyles/Form.module.css";
import Link from "next/link";
import { GetServerSideProps } from "next";

const Login = () => {
  const {
    value: email,
    isValid: emailValid,
    isNotValid: emailInvalid,
    changeValueHandler: emailValueHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidInput((email: string) => {
    return !!email
      .toLowerCase()
      //this regex checks if email is formatted correctly
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  });

  const {
    value: password,
    isValid: passwordValid,
    isNotValid: passwordInvalid,
    changeValueHandler: passwordValueHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useValidInput((password: string) => password.trim().length >= 8);

  const loginValid = emailValid;

  const loginHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!loginValid) return;

    const res = await fetch("/api/users/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
  };

  const emailStyles = emailInvalid
    ? `${style.input} ${style.error}`
    : style.input;

  return (
    <Form submitHandler={loginHandler}>
      <label>Enter E-mail</label>
      <input
        className={emailStyles}
        type="text"
        value={email}
        onChange={emailValueHandler}
        onBlur={emailBlurHandler}
      />
      {emailInvalid && (
        <p className={style.errorMessage}>Please enter valid email address.</p>
      )}
      <label>Enter Password</label>
      <input
        className={style.input}
        type="password"
        value={password}
        onChange={passwordValueHandler}
        onBlur={passwordBlurHandler}
      />
      {passwordInvalid && (
        <p className={style.errorMessage}>
          Password must have at least 8 characters.
        </p>
      )}
      <div>
        <button type="submit" disabled={!loginValid}>
          Submit
        </button>
        <Link href="/user/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </Form>
  );
};

export default Login;
