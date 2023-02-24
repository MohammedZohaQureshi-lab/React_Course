import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/input';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }

  return { value: '', isValid: false }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const authContext = useContext(AuthContext);
  const emailFocusRef = useRef();
  const pwdFocusRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    }
    else if (emailIsValid) {
      emailFocusRef.current.activateFocus()
    }
    else {
      pwdFocusRef.current.activateFocus()
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input type="email"
          ref={emailFocusRef}
          label="E-Mail"
          id="email"
          isValid={emailState.isValid}
          value={emailState.value}
          changeHandler={emailChangeHandler}
          blurHandler={validateEmailHandler} />
        <Input type="password"
          ref={pwdFocusRef}
          label="Password"
          id="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          changeHandler={passwordChangeHandler}
          blurHandler={validatePasswordHandler} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
