import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../App";
import axios from "axios";

export default function CreateProfile() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in.");
    axios.get(`/user/get?email=${email}&password=${password}`)
    .then(res => {
      console.log(res)
      if(res.data == 200)
        setUser({ loggedIn: true });
      else
        setAlert(true);
    } 
    )
    .catch(err => console.log(err));
  };

  if(contact)
    return <Navigate  to="/home"/>

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Log in</button>
        {alert && <h1>Red</h1>}
      </form>
    </div>
  );
}
