import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className=" container footer-container">
                <a className="btn nav-btn" href="/">
                    HOME
                </a>
                <a className="btn nav-btn" href="/products">
                    PRODUCTS
                </a>
                <a className="btn nav-btn" href="/themes">
                    INSIGHTS
                </a>
                <a className="btn nav-btn" href="/teams">
                    TEAMS
                </a>
                <a className="btn nav-btn" href="/quick-links">
                    QUICK LINKS
                </a>
                <a className="btn nav-btn" href="/my-favorites">
                    MY FAVORITES
                </a>
            </div>
        );
    }
}
