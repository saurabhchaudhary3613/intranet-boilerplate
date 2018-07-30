import React from 'react';
import ReactDom from 'react-dom';
import Home from './scripts/components/Home';
import Products from './scripts/components/Products';
import Teams from './scripts/components/Teams';
import Themes from './scripts/components/Themes';
import QuickLinks from './scripts/components/QuickLinks';
import MyFavorites from './scripts/components/MyFavorites';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';
import './styles/style.scss';

const headerId = document.getElementById('header');
const homeElementId = document.getElementById('home');
const productElementId = document.getElementById('products');
const teamsElementId = document.getElementById('teams');
const themesElementId = document.getElementById('themes');
const quickLinksElementId = document.getElementById('quick-links');
const myFavoritesElementId = document.getElementById('my-favorites');
const footerId = document.getElementById('footer');

if (headerId) {
    ReactDom.render(<Header />, document.getElementById('header'));
}

if (homeElementId) {
    ReactDom.render(<Home />, document.getElementById('home'));
}
if (productElementId) {
    ReactDom.render(<Products />, document.getElementById('products'));
}
if (teamsElementId) {
    ReactDom.render(<Teams />, document.getElementById('teams'));
}
if (themesElementId) {
    ReactDom.render(<Themes />, document.getElementById('themes'));
}
if (quickLinksElementId) {
    ReactDom.render(<QuickLinks />, document.getElementById('quick-links'));
}
if (myFavoritesElementId) {
    ReactDom.render(<MyFavorites />, document.getElementById('my-favorites'));
}

if (footerId) {
    ReactDom.render(<Footer />, document.getElementById('footer'));
}
