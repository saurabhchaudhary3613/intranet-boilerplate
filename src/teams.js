import React from 'react';
import ReactDom from 'react-dom';
import Header from './scripts/components/Header';
import Teams from './scripts/Teams';
import Footer from './scripts/components/Footer';

import './styles/style.scss';

const headerId = document.getElementById('header');
const elementId = document.getElementById('teams');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}
if (elementId) {
    ReactDom.render(<Teams />, document.getElementById('teams'));
}
if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
