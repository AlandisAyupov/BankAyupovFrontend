import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";
import User from "../../data/User.js";

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const { userData } = User();

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
  
  return (
    <header>
      <div className="container">
        <h1>Home</h1>
        {userData != null && <p>{userData.email}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;