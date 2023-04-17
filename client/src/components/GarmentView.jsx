import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const OneGarment = (props) => {

    const {id} = useParams();
    const [oneGarment, setOneGarment] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/garments/${id}`)
            .then(res => setOneGarment(res.data.garment))
            .catch(err => console.log(err))
    }, [])

    const navigateToEditGarment = () => {
        navigate(`/edit/${oneGarment._id}`)
    }

    return(
        <div>
            <Link to="/dashboard">Back to Dashboard</Link>
            <Link to="/">Logout</Link>
            <h1 className='mt-3'>{oneGarment.style}</h1>
            <p>Brand: {oneGarment.brand}</p>
            <p>Size: {oneGarment.size}</p>
            <p>Color: {oneGarment.color}</p>
            <p>Fit: {oneGarment.fit}</p>
            <p>{oneGarment.description}</p>
            <img src={oneGarment.image} alt={oneGarment.style} />
            <button className="mt-3" onClick={navigateToEditGarment}>Edit this item</button>
        </div>
    )
}

export default OneGarment;