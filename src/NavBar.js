import React, { Component } from 'react'
import './index.css';
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary border border-dark">
                <Link style={{"margin": "0px 20px"}} className="navbar-brand" to='/'>Fancy Products</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/cart">Cart</Link>
                    </div>
                </div>
            </nav>
        )
    }
}