import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const GarmentForm = () => {

    const [garment, setGarment] = useState({
        brand: "",
        style: "",
        size: "",
        color: "",
        fit: "",
        category: "",
        image: "",
        description: ""
    })

    const navigate = useNavigate();

    // const [errors, setErrors] = useState([]);

    const changeHandler = (e) => {
        setGarment({...garment, [e.target.name]: e.target.value})
    }

    const formValidator = () => {
        let isValid = true;
        if (garment.brand.length < 2) {
            return false
        }
        else if (garment.style.length < 4) {
            return false
        }
        else if (garment.size.length < 1) {
            return false
        }
        else if (garment.color.length < 3) {
            return false
        }
        else if (garment.fit.length < 5) {
            return false
        }
        else if (garment.description.length < 10) {
            return false
        }
        else if (garment.image.length < 1) {
            return false
        }
        return isValid
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post("http://localhost:8000/api/garments", garment)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate(`/view/${res.data.garment._id}`)
                })
                .catch(err => {console.log(err)})
        }
        // else {
        //     setErrors({
        //         brand: "Brand must be at least 2 characters.",
        //         style: "Style must be at least 4 characters.",
        //         size: "Size must be at least 1 character.",
        //         color: "Color must be at least 3 characters.",
        //         fit: "Fit must be at least 5 characters.",
        //         description: "Description must be at least 10 characters.",
        //         image: "A URL must be given for an image."
        //     })
        // }
    }

    return (
        <div>
            <h1>Add an Item</h1>
            <Link to="/dashboard">Back to Dashboard</Link>
            <Link to="/">Logout</Link>
            <form action="" className="col-md-6 offset-2" onSubmit={submitHandler}>
                {/* {errors.brand ? <p className="text-danger">{errors.brand}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" className="form-control" name="brand" id="brand" onChange={changeHandler}/>
                </div>
                {/* {errors.style ? <p className="text-danger">{errors.style}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="style">Style:</label>
                    <input type="text" className="form-control" name="style" id="style" onChange={changeHandler}/>
                </div>
                {/* {errors.size ? <p className="text-danger">{errors.size}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="size">Size:</label>
                    <input type="text" className="form-control" name="size" id="size" onChange={changeHandler}/>
                </div>
                {/* {errors.color ? <p className="text-danger">{errors.color}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input type="text" className="form-control" name="color" id="color" onChange={changeHandler}/>
                </div>
                {/* {errors.fit ? <p className="text-danger">{errors.fit}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="fit">Fit:</label>
                    <input type="text" className="form-control" name="fit" id="fit" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" onChange={changeHandler}>
                        <option value="top">Top</option>
                        <option value="jacket">Jacket</option>
                        <option value="dress">Dress</option>
                        <option value="skirt">Skirt</option>
                        <option value="short">Short</option>
                        <option value="pant">Pant</option>
                        <option value="accessory">Accessory</option>
                        <option value="shoes">Shoes</option>
                    </select>
                </div>
                {/* {errors.image ? <p className="text-danger">{errors.image}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" className="form-control" name="image" id="image" onChange={changeHandler}/>
                </div>
                {/* {errors.description ? <p className="text-danger">{errors.description}</p> : ""} */}
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={changeHandler}/>
                </div>
                <button className="btn btn-primary">Add Item</button>
            </form>
        </div>
    )
}

export default GarmentForm;