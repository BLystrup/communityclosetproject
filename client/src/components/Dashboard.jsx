import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const GarmentList = () => {

    const [garmentList, setGarmentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/garments')
            .then(res => setGarmentList(res.data.garments))
            .catch(err => console.log(err))
    }, [])

    const navigateToGarmentForm = () => {
        navigate("/additem")
    }

    const logout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const navigateToEditGarment = (garmentId) => {
        navigate(`/edit/${garmentId}`)
    }

    const deleteGarment = (garmentId) => {
        axios.delete(`http://localhost:8000/api/garments/${garmentId}`)
            .then(res => {
                console.log(res);
                setGarmentList(garmentList.filter((garment, index) => garment._id !== garmentId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <div className='col-md-2 offset-9 navbar navbar-text mb-2'>
                <button className='btn btn-link' onClick={navigateToGarmentForm}>Add a clothing item</button>
                <button className='btn btn-link' onClick={logout}>Logout</button>
            </div>
            <h1 className="col-md-6 mb-5">Welcome to our Community Closet!</h1>
            <table className='mx-5 table table-striped table-hover table-bordered border-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Image</th>
                        <th scope='col'>Item</th>
                        <th scope='col'>Size</th>
                        <th scope='col'>Owner</th>
                        <th scope='col'>Available</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        garmentList.map((garment) => {
                            return(
                                    <tr key={garment._id}>
                                        <td><img className='img-fluid img-thumbnail thumbnails' src={garment.image} alt={garment.style} /></td>
                                        <td scope="row"><Link to={`/view/${garment._id}`}>{garment.style}</Link></td>
                                        <td>{garment.size}</td>
                                        <td>{garment.owner}</td>
                                        <td>{garment.availability}</td>
                                        <td><button className='btn btn-light' onClick={(e) => {navigateToEditGarment(garment._id)}}>Edit</button> | <button className='btn btn-danger' onClick={(e) => {deleteGarment(garment._id)}}>Delete</button></td>
                                    </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GarmentList;