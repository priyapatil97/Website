import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Howitwork from './components/Howitwork';
import Aboutus from './components/Aboutus';
import Support from './components/Support';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Howitwork />
     <Aboutus />
     <Support />
     <Services />
     <Contact />
     <Footer />
    </>
  );
}

export default Home;
