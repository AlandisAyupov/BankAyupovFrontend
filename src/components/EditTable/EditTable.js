import useGetItems from "../../service/useGetItems.js";
import axios from "axios";
import { useState } from "react";
import EditableItem from "../EditableItem/EditableItem.js"
import {BsFillPencilFill } from "react-icons/bs";

const EditTable = () => {
    const { items } = useGetItems();
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);

    const editRow = async (itemId) => {
        const id = itemId

        const item = {id, name, description, price};
    
        const response = await fetch("/item/update", {
          method: "PATCH",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
    
        if (response.ok) {
          setName()
          setDescription();
          setPrice();
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="expand">Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items !== null && items.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="expand">{item.description}</td>
                            <td>{item.price}</td>
                            <td className="fit">
                                <span className="actions">
                                    <BsFillPencilFill
                                    className="edit-btn"
                                    onClick={() => editRow(item.id)}
                                    />
                                </span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default EditTable;