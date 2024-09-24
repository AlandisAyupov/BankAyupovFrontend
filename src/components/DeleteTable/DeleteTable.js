import useGetItems from "../../service/useGetItems.js";
import axios from "axios";

const DeleteTable = () => {
    const { items } = useGetItems();
    const deleteItem = (id) => {
        console.log(`Delete ${id}`);
        axios.delete(`/item/delete?id=${id}`);
    }

    return (
        <div>
            {items !== null && items.map((item) => {
                return (
                    <div className="item" key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DeleteTable;