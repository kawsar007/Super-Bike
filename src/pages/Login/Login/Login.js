import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, logout } = useAuth();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
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
                {
                    user.email ? <div className="d-grid gap-2">
                        <button className="btn btn-primary" onClick={logout} type="submit">Logout</button>
                    </div> : <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                }

                <Link style={{ textDecoration: 'none' }} to="/register">
                    <p sx={{ width: '75%', m: 1 }} type="submit" variant="text">New User ? Please Register</p>
                </Link>
                {isLoading && <div className="spinner-grow spinner" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
                {user?.email && <div class="alert alert-success" role="alert">
                    User Login Successfully!
                </div>}
                {authError && <div class="alert alert-danger" role="alert">
                    {authError}
                </div>}
            </form>
        </div>
    )
}

export default Login;
