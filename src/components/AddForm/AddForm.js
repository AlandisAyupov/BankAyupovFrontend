import { ChangeEvent, useState } from "react";
import axios from "axios";

const AddForm = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();

    console.log(file);

    const formdata = new FormData();
    formdata.append("file", file);

    const requestOptions = {
      method: "POST",
      body: formdata
    };

    const pictureName = fetch("localhost:4000/files/?file=1", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    const item = { name, description, price, pictureName };

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
        <div className="seperate">
          <label>File:</label>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleFileChange}
          />
          <div>{file && `${file.name} - ${file.type}`}</div>
        </div>
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default AddForm;