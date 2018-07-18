import React from 'react';
import ReactDom from 'react-dom';
import Header from './scripts/components/Header';
import Themes from './scripts/components/Themes';
import Footer from './scripts/components/Footer';

//import './styles/style.scss';

const headerId = document.getElementById('header');
const elementId = document.getElementById('themes');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}
if (elementId) {
    ReactDom.render(<Themes />, document.getElementById('themes'));
}
if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
