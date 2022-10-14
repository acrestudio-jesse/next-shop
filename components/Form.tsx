import {
  FormEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import style from "../styles/componentStyles/Form.module.css";

const Form = (props: {
  submitHandler: FormEventHandler<HTMLFormElement> | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <>
      <div className={style.outerLimit}>
        <div className={style.container}>
          <form onSubmit={props.submitHandler} className={style.form}>
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
