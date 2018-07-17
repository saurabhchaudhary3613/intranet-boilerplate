import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className="container">
        <NavLink to="/" activeClassName="is-active" exact={true}>
            Homepage link
        </NavLink>
        <NavLink to="/listing" activeClassName="is-active">
            Listing Page link
        </NavLink>
    </nav>
);

export default Navigation;
