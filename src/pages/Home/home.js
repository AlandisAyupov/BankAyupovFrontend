import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    console.log("Check.");
    axios.get('/login/check')
    .then(res => {
      console.log(res)
      if(res.data === true)
      {
        console.log("user logged in")
        setUser({ loggedIn: true });
      }
      else 
      {
        console.log("user not logged in")
        setUser({ loggedIn: false });
      }
      }
    )
    .catch(err => console.log(err));
  }, []);
  return (
    <div className="home">
      <Header />
    </div>
  );
};

export default Home;
