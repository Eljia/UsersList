import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User";
import "./User.scss";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserList(res.data))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className="body">
      {userList.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default UserList;
