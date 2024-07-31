import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("Logging out.");
    axios.get('/user/logout')
    .then(res => {
      console.log(res)
      setUser({ loggedIn: false });
    } 
    )
    .catch(err => console.log(err));
  };
  useEffect(() => {
    console.log("Check.");
    axios.get('/user/check')
    .then(res => {
      console.log(res)
      if(res.data === false)
        setUser({ loggedIn: true });
      else 
        setUser({ loggedIn: false });
      }
    )
    .catch(err => console.log(err));
  }, []);
  if(!user.loggedIn)
    return <Navigate  to="/"/>
  return (
    <div className="home">
      {user.loggedIn && <h1>Home</h1>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
