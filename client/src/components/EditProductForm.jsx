import styles from "../modules/form.module.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditProductForm = props => {

    const [formData, setFormData] = useState({
        title: "",
        price : 0.00,
        description: ""
    });
    const id = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id.id}`)
        .then(res => {
            console.log(res);
            setFormData({...formData,
                title: res.data.product.title,
                price: res.data.product.price,
                description: res.data.product.description
            });
        })
        .catch(err => console.log(err))
    }, [])

    function submitHandler(e) {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id.id}`, formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        props.setSubmitted(true);
        history.push("/");
    }

    function changeHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={styles.formcontainer}>
            <h1 className={styles.formtitle}>Edit Product</h1>
            <form action="" className={styles.formitem} onSubmit={submitHandler}>
                <div className={styles.formcontent}>
                    <label htmlFor="title">Title:</label>
                    <input name='title' type="text" placeholder="Insert Title" onChange={changeHandler} value={formData.title} />
                </div>
                <div className={styles.formcontent}>
                    <label htmlFor="price">Price:</label>
                    <input name='price' type="number" step="0.01" min="0.00" placeholder="0" onChange={changeHandler} value={formData.price} />
                </div>
                <div className={styles.formcontent}>
                    <label htmlFor="description">Description:</label>
                    <input name='description' type="text" placeholder="Insert Description" onChange={changeHandler} value={formData.description} />
                </div>
                <button type="submit" className={styles.submitbutton}>Edit</button>
            </form>
        </div>
    );
}

export default EditProductForm;