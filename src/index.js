import React from 'react';
import ReactDom from 'react-dom';
import Home from './scripts/components/Home';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';

import './styles/style.scss';

const headerId = document.getElementById('header');
const elementId = document.getElementById('home');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}

if (elementId) {
    console.log('in...');
    ReactDom.render(<Home />, document.getElementById('home'));
}

if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
