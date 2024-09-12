import { useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import styles from "./Item.modules.css";

const Item = (props) => {
    const [image, setImage] = useState(null);
    useEffect(() => {
        let base64 = null
        const getImage = async (pId) => {
            await axios.get(`/item/get-image?pictureId=${pId}`, {
                responseType: "arraybuffer"
            })
            .then((res) => {
                base64 = btoa(
                new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
                ))
                setImage(base64);
            }).catch((err) =>{
                console.log(err);
            });
        }
        getImage(props.pictureId);
    }, []);
  
    return (
        <div className="display" style={styles}>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
          {image != null && <img src={`data:;base64,${image}`} alt="new" width={100} height={100}/>}
        </div>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
};

export default Item;