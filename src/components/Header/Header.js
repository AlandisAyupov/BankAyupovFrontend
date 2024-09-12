import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";
import useGetUser from "../../service/useGetUser.js";
import styles from "./Header.modules.css";

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const { userData } = useGetUser();

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("Logging out.");
    axios.get('/login/logout')
    .then(res => {
      console.log(res)
      setUser({ loggedIn: false });
    } 
    )
    .catch(err => console.log(err));
  };

  if(!user.loggedIn)
    return <Navigate  to="/"/>

  console.log(userData);
  
  return (
    <header style={styles}>
      <div className="container">
        <Link to="/home">
          <h1>Home</h1>
        </Link>
        {userData != null && userData.type == 0 && <Link to="/admin">
          <h1>Admin</h1>
        </Link>}
        <div>
          {userData != null && <p>{userData.firstName}</p>}
          {userData != null && <p>{userData.lastName}</p>}
          {userData != null && <p>{userData.email}</p>}
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;