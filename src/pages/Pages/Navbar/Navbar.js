import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Super Bike</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="purchase">Purchase</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dashboard
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/pay">Pay</Link></li>
                  <li><Link className="dropdown-item" to="/my-order">My Order</Link></li>
                  <li><Link className="dropdown-item" to="/review">Review</Link></li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                  <li> <Link className="dropdown-item" onClick={logout} to="login">Logout</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="dashboard">Dashboard</Link>
              </li> */}
            </ul>
            <span className="navbar-text d-flex">
              {user?.email ? <Link className="nav-link" onClick={logout} to="login">Logout</Link>
                :
                <Link className="nav-link" to="login">Login</Link>
              }

              <Link className="nav-link" to="register">Register</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
