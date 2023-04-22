import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register", user, {withCredentials: true})
            .then(res => {console.log(res)
                navigate("/dashboard")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='col-md-5 mt-5 mx-auto'>
            <form action='' onSubmit={submitHandler}>
                <h3 className='text-center'>Register</h3>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>First Name:</label>
                    <input type="text" className='form-control' name='firstName' value={user.firstName} onChange={changeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Last Name:</label>
                    <input type="text" className='form-control' name='lastName' value={user.lastName} onChange={changeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Email:</label>
                    <input type="email" className='form-control' name='email' value={user.email} onChange={changeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Password:</label>
                    <input type="password" className='form-control' name='password' value={user.password} onChange={changeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Confirm Password:</label>
                    <input type="password" className='form-control' name='confirmPassword' value={user.confirmPassword} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-primary mt-3'>Register</button>
                </div>
            </form>
        </div>
    )

}

export default RegisterForm