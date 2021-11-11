import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <form>
                <div class="mb-3 row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" />
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="rePassword" class="col-sm-2 col-form-label">Re-password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="rePassword" />
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Register</button>
                </div>
                <Link style={{ textDecoration: 'none' }} to="/login">
                    <p sx={{ width: '75%', m: 1 }} type="submit" variant="text">Already Register ? Please Login</p>
                </Link>
            </form>
        </div>
    )
}

export default Register;
