import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className=" container footer-container">
                <a className="btn">HOME</a>
                <a className="btn">PRODUCTS</a>
                <a className="btn">THEMES</a>
                <a className="btn">TEAMS</a>
                <a className="btn">QUICK LINKS</a>
                <a className="btn">MY FAVORITES</a>
            </div>
        );
    }
}
