import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const EditGarment = (props) => {

    const {id} = useParams();
    const [oneGarment, setOneGarment] = useState({});
    const navigate = useNavigate();
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/garments/${id}`)
            .then(res => setOneGarment(res.data.garment))
            .catch(err => console.log(err))
    }, [])

    const formValidator = () => {
        let isValid = true;
        if (oneGarment.brand.length < 2) {
            return false
        }
        else if (oneGarment.style.length < 4) {
            return false
        }
        else if (oneGarment.size.length < 1) {
            return false
        }
        else if (oneGarment.color.length < 3) {
            return false
        }
        else if (oneGarment.fit.length < 5) {
            return false
        }
        else if (oneGarment.description.length < 10) {
            return false
        }
        else if (oneGarment.image.length < 1) {
            return false
        }
        return isValid
    }

    const editGarment = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.put(`http://localhost:8000/api/garments/${id}`, oneGarment)
                .then(res => navigate(`/view/${id}`))
                .catch(err => console.log(err))
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

    const changeHandler = (e) => {
        setOneGarment({
            ...oneGarment,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <Link to="/dashboard">Back to Dashboard</Link>
            <Link to="/">Logout</Link>
            <h1>Edit this Item</h1>
            <form action="" className="mx-auto mt-2" onSubmit={editGarment}>
                {/* {errors.brand ? <p className="text-danger">{errors.brand}</p> : ""} */}
                <div className="form-group ms-5 me-5">
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" className='form-control' name='brand' id='brand' value={oneGarment.brand} onChange={changeHandler}/>
                </div>                
                {/* {errors.style ? <p className="text-danger">{errors.style}</p> : ""} */}
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="style">Style:</label>
                    <input type="text" className='form-control' name='style' id='style' value={oneGarment.style} onChange={changeHandler}/>
                </div>
                {/* {errors.size ? <p className="text-danger">{errors.size}</p> : ""} */}
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="size">Size:</label>
                    <input type="text" className='form-control' name='size' id='size' value={oneGarment.size} onChange={changeHandler}/>
                </div>
                {/* {errors.color ? <p className="text-danger">{errors.color}</p> : ""} */}
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="color">Color:</label>
                    <input type="text" className='form-control' name='color' id='color' value={oneGarment.color} onChange={changeHandler}/>
                </div>
                {/* {errors.fit ? <p className="text-danger">{errors.fit}</p> : ""} */}
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="fit">Fit:</label>
                    <input type="text" className='form-control' name='fit' id='fit' value={oneGarment.fit} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={oneGarment.category} onChange={changeHandler}>
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
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" className='form-control' name='image' id='image' value={oneGarment.image} onChange={changeHandler}/>
                </div>
                {/* {errors.description ? <p className="text-danger">{errors.description}</p> : ""} */}
                <div className="form-group ms-5 me-5 mt-3">
                    <label htmlFor="description">Style Description:</label>
                    <input type="text" className='form-control' name='description' id='description' value={oneGarment.description} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Item Available:</label>
                    <select name="availability" id="availability" value={oneGarment.availability} onChange={changeHandler}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="btn btn-primary mt-3">Update Item</button>
            </form>
        </div>
    )
}

export default EditGarment;