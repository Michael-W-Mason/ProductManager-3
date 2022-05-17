import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../modules/product.module.css";
import axios from "axios";

const Product = (props) => {
    const id = useParams();
    const [product, setProduct] = useState({
        title: "An Error has occured",
        price: 0.00,
        description: "An Error has occured"
    }

    );
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id.id}`)
            .then(res => {
                console.log(res);
                setProduct({...product, ...res.data.product});
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={styles.product}>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
        </div>
    );
};

export default Product;