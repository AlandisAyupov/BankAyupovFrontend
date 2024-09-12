import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Login from "./pages/Login/login.js";
import Home from "./pages/Home/home.js";
import Admin from "./pages/Admin/admin.js";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route
                path="/" element= {<Login />}
              />
              <Route
                path="/home" element= {<Home />}
              />
              <Route
                path="/admin" element= {<Admin />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
