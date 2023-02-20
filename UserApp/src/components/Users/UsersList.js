import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  if (props.users.length === 0) return;
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={`user_${i}`}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
