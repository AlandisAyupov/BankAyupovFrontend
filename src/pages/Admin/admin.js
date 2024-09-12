import { useState } from "react";
import Header from "../../components/Header/Header";
import AddForm from "../../components/AddForm/AddForm";
import EditTable from "../../components/EditTable/EditTable";
import DeleteTable from "../../components/DeleteTable/DeleteTable";
import styles from "./admin.modules.css";
import useGetUser from "../../service/useGetUser.js";

const Admin = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
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

  return (
    <div style={styles}>
      <div className="home" style={styles}>
        <Header />
      </div>
      <button onClick={displayAdd}>Add Item</button>
      <button onClick={displayEdit}>Edit Item</button>
      <button onClick={displayDel}>Delete Item</button>
      {userData != null && userData.type == 0 && toggleAdd && <AddForm/>}
      {userData != null && userData.type == 0 && toggleEdit && <EditTable/>}
      {userData != null && userData.type == 0 && toggleDel && <DeleteTable/>}
    </div>
  );
};

export default Admin;
