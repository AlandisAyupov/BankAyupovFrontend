import styles from "./Modal.modules.css"
import { useState } from "react";
import PropTypes from 'prop-types';

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [name, setName] = useState(defaultValue.name);
  const [description, setDescription] = useState(defaultValue.description);
  const [price, setPrice] = useState(defaultValue.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");

    const id = defaultValue.id;

    const item = {id, name, description, price};

    onSubmit(item);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
      style={styles}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  defaultValue: PropTypes.string.isRequired
};

export default Modal;