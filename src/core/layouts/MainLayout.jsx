import React from 'react';
import Navbar from '../../shared/components/structure/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../shared/components/structure/Footer';
import Container from '../../shared/components/structure/Container';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;