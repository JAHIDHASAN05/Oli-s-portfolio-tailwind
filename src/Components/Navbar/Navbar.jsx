import React from 'react';
import logo from "../../assets/img/logo.png"
const Navbar = () => {
    return (
        <>
        <nav className='flex justify-between items-center mx-44 p-8'>
            <img src={logo} alt="" />
            <ul className='text-lg font-medium flex gap-x-20'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Portfolio</a>
                <a href="">Project</a>
                <a href="">Blog</a>
            </ul>
        </nav>   
        </>
    );
};

export default Navbar;