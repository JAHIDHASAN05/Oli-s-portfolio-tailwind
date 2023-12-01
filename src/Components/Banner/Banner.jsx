import React from 'react';
import BannerBg from './../../assets/img/home-banner.png'
import logo from "./../../assets/img/logo.png"
import BannerPic from "./../../assets/img/home-right.png"

const Banner = () => {
       
    return (
        <>

        <section className="bg-auto bg-no-repeat bg-center h-screen " style={{ backgroundImage: `url(${BannerBg})` }}>
            <div className='ms-44 px-8 flex justity-beetwen items-center gap-10 relative'>
            <div className=' font-bold w-2/3 mt-24'>
                    <h1 className='text-[40px]  mt-36'>HELL0, I AM ,  </h1>
                    <h1 className='text-[60px] mb-5  font-sans font-extrabold' > OLIULLAH BHUIYAN</h1>
                    <p className='text-3xl mb-5'>JUNIOR FULL STACK DEVELOPER</p>
                    <a href="#" className="inline-block  py-4 px-10 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out" style={{ background: 'linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)' }}>
                            <span>Hire Me</span>
                    </a>
                    <button href="#" className=" border-2 border-purple-800 inline-block ms-5  py-4 px-10  font-semibold rounded-lg shadow-md " >
                            <span>GET CV</span>
                    </button>
                    

            </div>
            
            <div>
                    <img className=' absolute top-20 right-0' src={BannerPic}></img>
             </div>
            
            </div>
        </section>
            
        </>
    );
};

export default Banner;