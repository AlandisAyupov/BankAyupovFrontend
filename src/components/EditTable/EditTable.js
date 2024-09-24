import useGetItems from "../../service/useGetItems.js";
import {BsFillPencilFill } from "react-icons/bs";
import styles from "./EditTable.modules.css"

const EditTable = ({ editRow }) => 
{
    const { items } = useGetItems();

    return (
        <div className="table-wrapper" style={styles}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="expand">Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items !== null && items.map((item, idx) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td className="fit">
                                    <span className="actions">
                                        <BsFillPencilFill
                                        className="edit-btn"
                                        onClick={() => editRow(idx)}
                                        />
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EditTable;