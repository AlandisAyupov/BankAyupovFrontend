import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import styles from "./login.modules.css";

export default function CreateProfile() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const {user, setUser} = useContext(UserContext);
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in.");
    axios.get(`/login/get?email=${email}&password=${password}`)
    .then(res => {
      console.log(res)
      if(res.data === 200)
        setUser({ loggedIn: true });
      else
        setAlert(true);
    } 
    )
    .catch(err => console.log(err));
  };

  if(user.loggedIn)
    return <Navigate  to="/home"/>

  return (
    <div className="div1" style={styles}>
      <form className="login" onSubmit={handleSubmit}>
        <div className="div2">
          <h1>Log In</h1>
          <div className="div3">
            <p>Email address:</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="div3">
            <p>Password:</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="div3">
            <button>Log in</button>
            {alert && <h1>Red</h1>}
          </div>
        </div>
      </form>
    </div>
  );
}
