import React from 'react';
import BannerBg from './../../assets/img/home-banner.png'
import logo from "./../../assets/img/logo.png"
import BannerPic from "./../../assets/img/home-right.png"
import './Banner.css'

const Banner = () => {
       
    return (
        <>

        <section className="bg-auto bg-no-repeat bg-center h-screen " style={{ backgroundImage: `url(${BannerBg})` }}>
            <div className=' banner-container mx-auto flex justity-center items-center ms-44 '>
            <div className=' font-bold  md:w-2/3  mt-24'>
                    <div className='flex'><h1 className='primary-info text-[40px]  mt-36'>HELL0, I AM ,   </h1> <div className="border-b border-gray-400 my-4 mb-4 w-[5rem] "></div></div>
                    <h1 className=' primary-title text-[60px] mb-5  font-sans font-extrabold' > OLIULLAH BHUIYAN</h1>
                    <p className=' about-title text-3xl mb-5'>JUNIOR FULL STACK DEVELOPER</p>
                    <a href="#" className="inline-block  py-4 px-10 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out" style={{ background: 'linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)' }}>
                            <span>Hire Me</span>
                    </a>
                    <button href="#" className=" border-2 border-purple-800 inline-block ms-5  py-4 px-10  font-semibold rounded-lg shadow-md " >
                            <span>GET CV</span>
                    </button>
                    

            </div>
            
            <div className='banner-img-container m-44 '>
                    <img className='relative top-20 right-0 object-contain' src={BannerPic}></img>
             </div>
            
            </div>
        </section>
            
        </>
    );
};

export default Banner;