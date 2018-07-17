import React from 'react';
import Header from './components/Header';
//import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = () => (
    <div>
        <Header />
        {/* <Navigation /> */}
        <div id="home" className="container body-container">
            Homepage
        </div>
        <Footer />
    </div>
);

export default Home;
