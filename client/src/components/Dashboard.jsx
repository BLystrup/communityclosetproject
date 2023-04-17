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
            <h1>Welcome to our Community Closet!</h1>
            <button onClick={navigateToGarmentForm}>Add a clothing item</button>
            <Link to="/">Logout</Link>
            <table className='table table-striped table-bordered'>
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
                                        <td><img src={garment.image} alt={garment.style} /></td>
                                        <td scope="row"><Link to={`/view/${garment._id}`}>{garment.style}</Link></td>
                                        <td>{garment.size}</td>
                                        <td>garment.owner</td>
                                        <td>{garment.availability}</td>
                                        <td><button onClick={(e) => {navigateToEditGarment(garment._id)}}>Edit</button><button onClick={(e) => {deleteGarment(garment._id)}}>Delete</button></td>
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