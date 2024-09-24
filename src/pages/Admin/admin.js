import { useState } from "react";
import Header from "../../components/Header/Header";
import AddForm from "../../components/AddForm/AddForm";
import EditTable from "../../components/EditTable/EditTable";
import DeleteTable from "../../components/DeleteTable/DeleteTable";
import styles from "./admin.modules.css";
import useGetUser from "../../service/useGetUser.js";
import useGetItems from "../../service/useGetItems.js";
import Modal from "../../components/Modal/Modal.js";

const Admin = () => {
  const { items, setItems } = useGetItems();
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const { userData } = useGetUser();

  const displayAdd = () => {
    setToggleAdd(true);
    setToggleDel(false);
    setToggleEdit(false);
  }

  const displayEdit = () => {
    setToggleAdd(false);
    setToggleEdit(true);
    setToggleDel(false);
  }

  const displayDel = () => {
    setToggleAdd(false);
    setToggleEdit(false);
    setToggleDel(true);
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const editItem = async (newItem) => {

    const response = await fetch("/item/update", {
      method: "PATCH",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    console.log(json);

    if (response.ok) {
      setRowToEdit(null);
    }
  }


  return (
    <div style={styles}>
      <div className="home" style={styles}>
        <Header />
      </div>
      <button onClick={displayAdd}>Add Item</button>
      <button onClick={displayEdit}>Edit Item</button>
      <button onClick={displayDel}>Delete Item</button>
      {userData != null && userData.type == 0 && toggleAdd && <AddForm/>}
      {userData != null && userData.type == 0 && toggleEdit && 
      <div>
        <EditTable editRow={handleEditRow}/>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={editItem}
            defaultValue={rowToEdit !== null && items[rowToEdit]}
          />
        )}
      </div>
      }
      {userData != null && userData.type == 0 && toggleDel && <DeleteTable/>}
    </div>
  );
};

export default Admin;
