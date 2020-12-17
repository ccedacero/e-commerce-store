import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const NavBar = ({ count }) => {
    return (
        <header>
            <nav>
                <>
                    <ul className="rightMenuUser">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart<ShoppingCartIcon style={{ color: 'fff' }}></ShoppingCartIcon></Link>
                            <span>{count}</span>
                        </li>
                    </ul>
                </>
            </nav>
        </header>
    )
}

export default NavBar;