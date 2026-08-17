import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" className='nav-link'>Services</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search" />
                            <button class="btn btn-primary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br/>
            <br/>
            <br/>

        </>
    )
}

export default Navbar