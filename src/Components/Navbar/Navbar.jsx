import React from 'react';
import logo from "../../assets/img/logo.png"
const Navbar = () => {

    const gradientText = {
        background: '-webkit-linear-gradient(45deg, #4b57de 30%, #854eee 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      };
    return (
        <>
        <nav className='flex justify-between items-center mx-44 p-8'>
        <div>
        <h1 className="text-4xl font-bold" style={gradientText}>
            OLIULLAH
         </h1>
        </div>
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