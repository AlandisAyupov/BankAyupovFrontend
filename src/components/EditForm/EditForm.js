import { useState } from "react";
import PropTypes from 'prop-types';

const EditForm = (props) => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);

    const editItem = async (e) => {
        e.preventDefault();
    
        const id = props.id;

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
    <div>
        <form
        onSubmit={editItem}
        style={{ width: 650 }}
        className="flex flex-col space-y-5 px-5 py-14"
      >
        <div><h3>Edit Item</h3></div>
        <div className="seperate">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="seperate">
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="seperate">
          <label>Price:</label>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button>Edit Item</button>
      </form>
    </div>
    )
}
EditForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditForm;