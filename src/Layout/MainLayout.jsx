import React from 'react';
import NavBar from '../Pages/Components/Shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <main className='grow'>
                <Outlet></Outlet>
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;