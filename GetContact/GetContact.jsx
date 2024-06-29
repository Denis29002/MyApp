import React, { useState, useEffect } from "react";
import style from "./getcontact.module.css";
import axios from "axios";

function GetContact() {
  const buttons = [
    { discrp: "My name is", icon: "", value: "name.last" },
    { discrp: "My email is", icon: "", value: "email" },
    { discrp: "My age is", icon: "", value: "dob.age" },
    { discrp: "My street is", icon: "", value: "street" },
    { discrp: "My phone  is", icon: "", value: "phone" },
    { discrp: "My password is", icon: "", value: "password" },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(0);

  const getUsers = async () => {
    setLoading(true);
    const arr = await axios("https://randomuser.me/api/");
    setUsers(arr.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUserInfo = (index) => {
    setUserInfo(index);
  };

  console.log(users);

  return (
    <div className={style.user}>
      <div className={style.user_panel}>
        <div className={style.user_icon}>
          {loading ? (
            <p>Загрузка иконки...</p>
          ) : (
            <div>
              {" "}
              {users.map((el) => (
                <div>
                  <img src={el.picture.large} />
                  <p>{el.buttons[userInfo].value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={getUsers}> Random User</button>
        <h3>{buttons[userInfo].discrp}</h3>
        <div className={style.user_buttons}>
          {buttons.map((el, index) => (
            <div>
              {" "}
              <button onClick={() => getUserInfo(index)}>{el.value}</button>
            </div>
          ))}
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default GetContact;
