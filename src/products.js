import React from 'react';
import ReactDom from 'react-dom';
import Products from './scripts/components/Products';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';

//import './styles/style.scss';

const headerId = document.getElementById('header');
const elementId = document.getElementById('products');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}
if (elementId) {
    ReactDom.render(<Products />, document.getElementById('products'));
}
if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
