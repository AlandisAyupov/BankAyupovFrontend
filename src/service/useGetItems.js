import { useState, useEffect } from "react";
import axios from "axios";

const useGetItems = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        const setData = async() => {

            let res = (await axios.get(`/item/get-all`)).data
            console.log(res);
            res = res.map(obj => ({
                id: obj.id, 
                name: obj.name, 
                description: obj.description, 
                price: obj.price, 
                pictureId: obj.pictureId
            }));
            setItems(res);
            console.log(res);
        }
        setData();
    }, [])
    console.log(items);
    return { items };
}

export default useGetItems;