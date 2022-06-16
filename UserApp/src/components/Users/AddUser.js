import React, { useState, useRef } from "react";
import userStyles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUser = nameRef.current.value;
    const enteredUserAge = ageRef.current.value;
    if (enteredUser.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Inputs Entred",
        message: "Please enter a valid name & age (non emmpty value)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age Entred",
        message: "Please enter a valid age (non emmpty value)",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredUserAge);
    nameRef.current.value = "";
    ageRef.current.value = "";
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={userStyles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">UserName</label>
          <input type="text" id="userName" ref={nameRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageRef} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
