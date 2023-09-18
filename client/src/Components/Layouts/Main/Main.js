import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../SharedFile/Navbar/Navbar';
import Footer from '../../SharedFile/Footer/Footer';
import MobileNavbar from '../../SharedFile/MobileNavbar/MobileNavbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <MobileNavbar></MobileNavbar>
        </div>
    );
};

export default Main;