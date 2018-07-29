import React from 'react';
import ReactDom from 'react-dom';
import QuickLinks from './scripts/components/QuickLinks';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';

const headerId = document.getElementById('header');
const elementId = document.getElementById('quick-links');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}
if (elementId) {
    ReactDom.render(<QuickLinks />, document.getElementById('quick-links'));
}
if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
