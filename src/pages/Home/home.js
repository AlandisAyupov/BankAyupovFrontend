import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import useGetItems from "../../service/useGetItems.js";
import styles from "./home.modules.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const { items } = useGetItems();
  const [image, setImage] = useState([]);

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
    <div className="parent">
      <div className="home" style={styles}>
        <Header />
      </div>
      <div className="items">
        {items !== null && items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <Item name={item.name} description={item.description} price={item.price} pictureId={item.pictureId}/>
            </div>
          )
        })}
      </div> 
    </div>
  );
};

export default Home;
