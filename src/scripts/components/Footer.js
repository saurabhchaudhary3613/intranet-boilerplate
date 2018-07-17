import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className=" container footer-container">
                <a className="btn nav-btn" href="/">
                    HOME
                </a>
                <a className="btn nav-btn" href="/products.html">
                    PRODUCTS
                </a>
                <a className="btn nav-btn" href="/themes.html">
                    THEMES
                </a>
                <a className="btn nav-btn" href="/teams.html">
                    TEAMS
                </a>
                <a className="btn nav-btn">QUICK LINKS</a>
                <a className="btn nav-btn">MY FAVORITES</a>
            </div>
        );
    }
}
