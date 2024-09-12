import { useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import EditForm from "../EditForm/EditForm.js"

const EditableItem = (props) => {
    const [image, setImage] = useState(null);
    const [edit, setEdit] = useState(false);

    const editItem = () => {
        setEdit(!edit);
    }
  
    return (
        <div className="display">
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
          <button onClick={editItem}>Edit</button>
          {edit && <EditForm id={props.id}/>}
        </div>
    );
};

EditableItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
};

export default EditableItem;