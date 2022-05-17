import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../modules/productlist.module.css";


const ProductList = props => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if(props.submitted === true){
            axios.get("http://localhost:8000/api/products")
                .then(res => {
                    console.log(res);
                    setProductList(res.data.products);
                    props.setSubmitted(false);
                })
                .catch(err => console.log(err));
        }
    }, [props.submitted])

    useEffect(() => {
        props.setSubmitted(true);
    }, []);

    return(
        <div className={styles.container}>
            <h1>All Products</h1>
            <ul className={styles.productlist}>
                {
                    productList.map((product, index) => {
                        return(
                            <li key={index} className={styles.productbullet}>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;