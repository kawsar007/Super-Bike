import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your password dit not match!!!");
            return;
        }
        registerUser(loginData.email, loginData.password);
    }

    return (
        <div className="register">
            {!isLoading && <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" onChange={handleOnChange} className="form-control" id="name" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" onChange={handleOnChange} className="form-control" id="email" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" onChange={handleOnChange} className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="rePassword" className="col-sm-2 col-form-label">Re-password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password2" onChange={handleOnChange} className="form-control" id="rePassword" />
                    </div>
                </div>
                <div className="d-grid col-4 mx-auto gap-2">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
                <Link style={{ textDecoration: 'none' }} to="/login">
                    <p sx={{ width: '75%', m: 1 }} type="submit" variant="text">Already Register ? Please Login</p>
                </Link>
                {isLoading && <div className="spinner-grow spinner" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
                {user?.email && <div class="alert alert-success" role="alert">
                    User Created Successfully!
                </div>}
                {authError && <div class="alert alert-danger" role="alert">
                    {authError}
                </div>}
            </form>}

        </div>
    )
}

export default Register;
