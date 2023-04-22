import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const GarmentForm = () => {

    const [garment, setGarment] = useState({
        owner: "",
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

    const [errors, setErrors] = useState([]);

    const changeHandler = (e) => {
        setGarment({...garment, [e.target.name]: e.target.value})
    }

    const formValidator = () => {
        let isValid = true;
        if (garment.owner.length < 2) {
            return false
        }
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
        else {
            setErrors({
                owner: "Owner must be at least 2 characters.",
                brand: "Brand must be at least 2 characters.",
                style: "Style must be at least 4 characters.",
                size: "Size must be at least 1 character.",
                color: "Color must be at least 3 characters.",
                fit: "Fit must be at least 5 characters.",
                description: "Description must be at least 10 characters.",
                image: "A URL must be given for an image."
            })
        }
    }

    const logout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='col-md-2 offset-9 navbar navbar-text mb-2'>
                <Link to="/dashboard">Back to Dashboard</Link>
                <button className='btn btn-link' onClick={logout}>Logout</button>
            </div>
            <h1 className="col-md-6 mb-5">Add an Item</h1>
            <form action="" className="col-md-6 offset-2" onSubmit={submitHandler}>
                {errors.owner ? <p className="text-danger">{errors.owner}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="owner">Your Name:</label>
                    <input type="text" className="col-auto" name="owner" id="owner" onChange={changeHandler}/>
                </div>
                {errors.brand ? <p className="text-danger">{errors.brand}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="brand">Brand:</label>
                    <input type="text" className="col-auto" name="brand" id="brand" onChange={changeHandler}/>
                </div>
                {errors.style ? <p className="text-danger">{errors.style}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="style">Style:</label>
                    <input type="text" className="col-auto" name="style" id="style" onChange={changeHandler}/>
                </div>
                {errors.size ? <p className="text-danger">{errors.size}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="size">Size:</label>
                    <input type="text" className="col-auto" name="size" id="size" onChange={changeHandler}/>
                </div>
                {errors.color ? <p className="text-danger">{errors.color}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="color">Color:</label>
                    <input type="text" className="col-auto" name="color" id="color" onChange={changeHandler}/>
                </div>
                {errors.fit ? <p className="text-danger">{errors.fit}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="fit">Fit:</label>
                    <input type="text" className="col-auto" name="fit" id="fit" onChange={changeHandler}/>
                </div>
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="category">Category:</label>
                    <select className='col-auto' name="category" id="category" onChange={changeHandler}>
                        <option value="select a category">Select a category</option>
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
                {errors.image ? <p className="text-danger">{errors.image}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="image">Image URL:</label>
                    <input type="url" className="form-auto" name="image" id="image" onChange={changeHandler}/>
                </div>
                {errors.description ? <p className="text-danger">{errors.description}</p> : ""}
                <div className="row g-3 align-items-center ms-5 mb-3">
                    <label className='col-auto' htmlFor="description">Description:</label>
                    <input type="text" className="form-auto" name="description" id="description" onChange={changeHandler}/>
                </div>
                <button className="btn btn-light mt-3">Add Item</button>
            </form>
        </div>
    )
}

export default GarmentForm;