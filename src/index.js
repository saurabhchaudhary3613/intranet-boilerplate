import React from 'react';
import ReactDom from 'react-dom';
import Home from './scripts/Home';

import './styles/style.scss';

const elementId = document.getElementById('app');
const headerEl = document.getElementById('header');

if (elementId) {
    console.log('in...');
    ReactDom.render(<Home />, document.getElementById('app'));
}

