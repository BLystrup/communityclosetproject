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

    const logout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <div className='col-md-2 offset-9 navbar navbar-text mb-2'>
                <Link to="/dashboard">Back to Dashboard</Link>
                <button className='btn btn-link' onClick={logout}>Logout</button>
            </div>
            <h1 className="col-md-6 mb-5">{oneGarment.style}</h1>
            <img className='img-fluid img-thumbnail image mb-3' src={oneGarment.image} alt={oneGarment.style} />
            <p><strong>Brand:</strong> {oneGarment.brand}</p>
            <p>{oneGarment.description}</p>
            <p><strong>Size:</strong> {oneGarment.size}</p>
            <p><strong>Color:</strong> {oneGarment.color}</p>
            <p><strong>Fit:</strong> {oneGarment.fit}</p>
            <p><strong>Owner:</strong>{oneGarment.owner}</p>
            <button className="btn btn-light mt-3" onClick={navigateToEditGarment}>Edit this item</button>
        </div>
    )
}

export default OneGarment;