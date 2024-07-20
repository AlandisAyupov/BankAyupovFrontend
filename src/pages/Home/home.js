import { UserContext } from "../../../App";


const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="home">
      {user.loggedIn && <h1>Home</h1>}
    </div>
  );
};

export default Home;
