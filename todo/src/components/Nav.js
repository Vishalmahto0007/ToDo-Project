import React from 'react';
import {NavLink} from 'react-router-dom';


function Nav() {
    return (
        <div>
            <div>
            <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                       <h3 style={{color:"white"}}>Vishal Mahto</h3>
                       <div><h3><NavLink to="/" style={{color:"white"}}>Todo</NavLink></h3></div>
                       
                       <div><h3><NavLink to="/allusers1" style={{color:"white"}}>All Users</NavLink></h3></div>
                       
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Nav;
