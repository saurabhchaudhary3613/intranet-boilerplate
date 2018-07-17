import React from 'react';
import ReactDom from 'react-dom';
import Listing from './scripts/Listing';
//import Header from './scripts/components/Header';

import './styles/style.scss';

const elementId = document.getElementById('setting');

if (elementId) {
    ReactDom.render(<Listing />, document.getElementById('setting'));
}
