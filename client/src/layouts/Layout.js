import 'bootstrap/dist/css/bootstrap.css';
import NavbarCustom from '../components/Navbar.js';
import React from 'react';
import { Outlet } from 'react-router-dom';

console.log(NavbarCustom)

function Layout() {
    return (
        <React.Fragment>
            <NavbarCustom />
            <main className='App container-md'>
                {/* Render content */}
                <Outlet />
            </main>
            <footer className='container-md'>
                <hr />
                <h3>Footer</h3>
            </footer>
        </React.Fragment>
    )
}

export default Layout;