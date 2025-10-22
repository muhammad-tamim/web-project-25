import React from 'react';
import Navbar from '../../shared/components/structure/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../shared/components/structure/Footer';
import Container from '../../shared/components/structure/Container';
import DynamicTitle from '../../shared/components/DynamicTitle';

const MainLayout = () => {
    return (
        <div>
            {/* <DynamicTitle></DynamicTitle> */}
            <Navbar></Navbar>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;