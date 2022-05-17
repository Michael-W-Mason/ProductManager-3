import styles from "../modules/form.module.css";
import { useState } from "react";
import axios from "axios";


const ProductForm = props => {

    const defaultForm = {
        title: "",
        price: 0.00,
        description: ""
    };

    const [formData, setFormData] = useState(defaultForm);

    function submitHandler(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", { ...formData })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setFormData(defaultForm);
        props.setSubmitted(true);
    }

    function changeHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={styles.formcontainer}>
            <h1 className={styles.formtitle}>Product Manager</h1>
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
                <button type="submit" className={styles.submitbutton}>Submit</button>
            </form>
        </div>
    );
}

export default ProductForm;