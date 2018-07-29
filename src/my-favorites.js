import React from 'react';
import ReactDom from 'react-dom';
import MyFavorites from './scripts/components/MyFavorites';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';

//import './styles/style.scss';

const headerId = document.getElementById('header');
const elementId = document.getElementById('my-favorites');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}
if (elementId) {
    ReactDom.render(<MyFavorites />, document.getElementById('my-favorites'));
}
if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
