import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const { data } = await axios("https://randomuser.me/api");
    const { results } = await data;
    localStorage.setItem("user", JSON.stringify(results));
    setUser(JSON.parse(localStorage.getItem("user")));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="user-items">
          Name: {user[0]?.name.title} {user[0]?.name.first} {user[0]?.name.last}
        </div>
        <div className="user-items">Email: {user[0]?.email}</div>
        <button className="btn-refresh" onClick={getUser}>
          Refresh
        </button>
      </div>
    </div>
  );
}
