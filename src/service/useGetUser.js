import { useState, useEffect } from "react";
import axios from "axios";

const useGetUser = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const setData = async() => {
            const res = [(await axios.get(`/user/get`)).data]
            .map(obj => ({
                email: obj.email, 
                firstName: obj.firstName, 
                lastName:obj.lastName, 
                address: obj.address, 
                dateOfBirth: obj.dateOfBirth
            }))[0];
            setUserData(res);
        }
        setData();
    }, [])
    console.log(userData);
    return { userData };
}

export default useGetUser;