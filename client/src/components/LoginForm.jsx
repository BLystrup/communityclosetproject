import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', user, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="col-md-5 mt-5 mx-auto">
            <form action="" onSubmit={submitHandler}>
                <h3 className='text-center'>Login</h3>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Email:</label>
                    <input type="email" className='form-control' name='email' value={user.email} onChange={changeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Password:</label>
                    <input type="password" className='form-control' name='password' value={user.password} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-primary mt-3'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;