import { useState } from "react";

const AddForm = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);

    const addItem = async (e) => {
        e.preventDefault();
    
        const item = { name, description, price};
    
        const response = await fetch("/item/add", {
          method: "POST",
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
        onSubmit={addItem}
        style={{ width: 650 }}
        className="flex flex-col space-y-5 px-5 py-14"
      >
        <div><h3>Add Item</h3></div>
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
        <button>Add Item</button>
      </form>
    </div>
    )
}

export default AddForm;