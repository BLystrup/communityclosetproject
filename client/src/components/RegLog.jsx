import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const RegLog = () => {



    return (
        <div>
            <div className="row">
                <RegisterForm/>
                <LoginForm/>
            </div>
        </div>
    )
}

export default RegLog;