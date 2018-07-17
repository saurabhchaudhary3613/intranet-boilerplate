import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className=" container footer-container">
                <a className="btn nav-btn">HOME</a>
                <a className="btn nav-btn">PRODUCTS</a>
                <a className="btn nav-btn">THEMES</a>
                <a className="btn nav-btn">TEAMS</a>
                <a className="btn nav-btn">QUICK LINKS</a>
                <a className="btn nav-btn">MY FAVORITES</a>
            </div>
        );
    }
}
