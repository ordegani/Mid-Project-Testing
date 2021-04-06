import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

function Navbar() {
    return (
        <div>
            <ul className="navUl">
                
                <li><Link className="link" to="/HelloPage">Hello</Link></li>
                <li><Link className="link" to="/Main">Main</Link></li>
                <li><Link className="link" to="/Recipe">Saved</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;