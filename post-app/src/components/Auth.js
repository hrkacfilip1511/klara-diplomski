import React, { useRef, useState } from "react";
import "./Auth.css";
export default function Auth() {
  const [isLogin, setisLogin] = useState(true);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [errorCheckBoxClass, setErrorCheckBoxClass] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const submitFormHandler = async (e) => {};
  return (
    <div className={"authForm"}>
      <form onSubmit={submitFormHandler}>
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
        <div className={"email"}>
          <label htmlFor="email">Insert email</label>
          <input id="email" type="text" ref={emailRef} />
        </div>
        <div className={"password"}>
          <label htmlFor="password">Insert password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>

        <div className={"actions"}>
          <button className={"submitBtn"}>
            {isLogin ? "Login" : "Sign up"}
          </button>
          <button
            className={"switchBtn"}
            type="button"
            onClick={() => setisLogin((prev) => !prev)}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}
