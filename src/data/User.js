import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log("User");
        const fetchUserInfo = async () => {
            const email = await axios.get("login/email");
            const result = await axios.get(`/user/get?email=${email.data}`);
            setUserData(result.data);
        }
        fetchUserInfo();
    }, []);

    return { userData };
}

export default User;