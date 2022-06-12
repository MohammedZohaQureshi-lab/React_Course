import React from "react";
import userStyles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.prevnetDefault();
  };
  return (
    <Card className={userStyles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input type="text" id="userName" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <Button type="submit" > Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
