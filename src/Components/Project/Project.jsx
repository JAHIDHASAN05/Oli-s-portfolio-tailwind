import React from 'react';
import pic from './../../assets/img/assignment-toy-project.web.app_.png'
import './Project.css'

const Project = () => {
    return (
        <>
            {/* <div className=" ring-0 shadow-md border border-solid border-dark bg-light shadow-2xl dark:border-light dark:bg-dark"> {/* Replace shadow-md with your desired shadow class */}
            <h1 className="text-5xl text-center font-bold mt-10">
                My Project
             </h1>
            
             <section  className=' ms-40 mx-20 mt-10 mb-20'>
             <p className='mt-10 text-2xl'>My feature</p>
                <div className='PortfolioContainer grid grid-cols-1 gap-5 mt-5 sm:grid-cols-1 md:grid-cols-2'>  

                {/* <!-- Project preview Card 001 --> */}
    
                    <div className='portfolio border-0 bg-black h-[32.9rem] w-[38.8rem] rounded-[2.5rem] relative mb-10'>
                    <div className=' SiteInfo  border-[1px] border-black bg-white p-5 h-[32rem] w-[38rem] rounded-3xl absolute  ' >
                        <div className="Site h-72">
                            <img className='object-cover h-72 ' src={pic} alt="" />
                        </div>


                        <div className='h-32 mt-10 rounded-xl border-cyan-500 border-2 shadow-lg shadow-cyan-500/50'>
                            <h1 className='text-center  mt-5 text-xl'>Dance Online School</h1>


                            <div className='flex justify-around items-center gap-6 mt-5'>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                            </div>
                        </div>

                    </div>
                    </div>


                      {/* <!-- Project preview Card 002 --> */}

                    <div className='portfolio border-0 bg-black h-[32.9rem] w-[38.8rem] rounded-[2.5rem] relative mb-10'>
                    <div className=' SiteInfo  border-[1px] border-black bg-white p-5 h-[32rem] w-[38rem] rounded-3xl absolute  ' >
                        <div className="Site h-72">
                            <img  className=' pic-2 object-cover h-72 ' src={pic} alt="" />
                        </div>


                        <div className='h-32 mt-10 rounded-xl border-cyan-500 border-2 shadow-lg shadow-cyan-500/50'>
                            <h1 className='text-center  mt-5 text-xl'>Dance Online School</h1>


                            <div className='flex justify-around items-center gap-6 mt-5'>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                            </div>
                        </div>

                    </div>
                    </div>

                      {/* <!-- Project preview Card 003 --> */}

                    <div className='portfolio border-0 bg-black h-[32.9rem] w-[38.8rem] rounded-[2.5rem] relative mb-10'>
                    <div className=' SiteInfo  border-[1px] border-black bg-white p-5 h-[32rem] w-[38rem] rounded-3xl absolute  ' >
                        <div className="Site h-72">
                            <img className='object-cover h-72 ' src={pic} alt="" />
                        </div>


                        <div className='h-32 mt-10 rounded-xl border-cyan-500 border-2 shadow-lg shadow-cyan-500/50'>
                            <h1 className='text-center  mt-5 text-xl'>Dance Online School</h1>


                            <div className='flex justify-around items-center gap-6 mt-5'>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                            </div>
                        </div>

                    </div>
                    </div>


                      {/* <!-- Project preview Card 004 --> */}
                    <div className='portfolio border-0 bg-black h-[32.9rem] w-[38.8rem] rounded-[2.5rem] relative mb-10'>
                    <div className=' SiteInfo  border-[1px] border-black bg-white p-5 h-[32rem] w-[38rem] rounded-3xl absolute  ' >
                        <div className="Site h-72">
                            <img className='object-cover h-72 ' src={pic} alt="" />
                        </div>


                        <div className='h-32 mt-10 rounded-xl border-cyan-500 border-2 shadow-lg shadow-cyan-500/50'>
                            <h1 className='text-center  mt-5 text-xl'>Dance Online School</h1>


                            <div className='flex justify-around items-center gap-6 mt-5'>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                                    <button className="bg-sky-500 hover:bg-sky-700  rounded-2xl py-1 px-6">
                                                Save changes
                                    </button>
                            </div>
                        </div>

                    </div>
                    </div>











                   
                    
                   
                   



                   
                   
                </div>
               

             </section>
        </>
    );
};

export default Project;