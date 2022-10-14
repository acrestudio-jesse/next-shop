import type { NextPage } from "next";
import style from "../../styles/componentStyles/Form.module.css";
import useValidInput from "../../hooks/use-valid";
import Form from "../../components/Form";

const SignUp: NextPage = () => {
  //useValidInput is used to show user if inputs are valid: takes one argument that returns are boolean value of whether the argument is valid or not, based on your callback logic. Returns: Value(string), isValid(bool), isNotValid(bool), changeValueHandler(fn), blurHandler(fn), reset(fn)
  const {
    value: username,
    isValid: usernameValid,
    isNotValid: usernameInvalid,
    changeValueHandler: usernameValueHandler,
    blurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useValidInput((username: string) => username.trim().length >= 8);
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
  const {
    value: confirmPassword,
    isValid: confirmPasswordValid,
    isNotValid: confirmPasswordInvalid,
    changeValueHandler: confirmPasswordValueHandler,
    blurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordReset,
  } = useValidInput(
    (confirmPassword: string) =>
      confirmPassword.trim().length >= 8 && confirmPassword === password
  );

  //Checks validity of all fields to determine if document is submittable.
  const formValid =
    usernameValid && emailValid && passwordValid && confirmPasswordValid;

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
      }),
    });

    const data = await res.json();

    console.log(data);

    usernameReset();
    emailReset();
    passwordReset();
    confirmPasswordReset();
  };

  //Changes style based on validity of  different fields.
  const usernameStyles = usernameInvalid
    ? `${style.input} ${style.error}`
    : style.input;
  const emailStyles = emailInvalid
    ? `${style.input} ${style.error}`
    : style.input;
  const passwordStyles = passwordInvalid
    ? `${style.input} ${style.error}`
    : style.input;
  const confirmPasswordStyles = confirmPasswordInvalid
    ? `${style.input} ${style.error}`
    : style.input;

  return (
    <Form submitHandler={submitHandler}>
      <label>Create Username</label>
      <input
        className={usernameStyles}
        type="text"
        value={username}
        onChange={usernameValueHandler}
        onBlur={usernameBlurHandler}
      />
      {usernameInvalid && (
        <p className={style.errorMessage}>
          Username must have at least 8 characters.
        </p>
      )}
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
      <label>Create Password</label>
      <input
        className={passwordStyles}
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
      <label>Confirm Password</label>
      <input
        className={confirmPasswordStyles}
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordValueHandler}
        onBlur={confirmPasswordBlurHandler}
      />
      <div>
        {confirmPasswordInvalid && (
          <p className={style.errorMessage}>
            Password confirmation must match password.
          </p>
        )}
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </div>
    </Form>
  );
};

export default SignUp;
