import React from 'react';
// import React, { useRef } from 'react';
import "./MyContact.css"
// import Lottie from 'react-lottie';
import contactImage from "./../../../public/ImgContact.json"
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

const MyContact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactImage,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // // input form data send email

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_r9jpbl4', 'template_5nhkivn', form.current, 'uZcLqaw9vYGzlt7Ks')
    //         .then((result) => {
    //             if (result.text === "OK") {
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Your work has been saved',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //             e.target.reset()
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

    return (
        <div className='bg-[#061127] py-14' id='contact'>
            <div className="ContactAll md:mx-20 mx-3">

                <div className="title text-left">
                    <h2>My Contact</h2>
                    <p className='text-white'>Shipon deb my Feature</p>
                </div>

                <div className="myInformation grid md:grid-cols-3 gap-10 mt-14">
                    <div className="myInfo flex items-center">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <div className="ml-4 text-white">
                            <p className='font-semibold'>Contact on Phone</p>
                            <h3>+8801751442793</h3>
                        </div>
                    </div>
                    <div className="myInfo flex items-center">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <div className="ml-4 text-white">
                            <p className='font-semibold'>Contact on Email</p>
                            <h3>shipondeb1133@gmail.com</h3>
                        </div>
                    </div>
                    <div className="myInfo flex items-center">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <div className="ml-4 text-white">
                            <p className='font-semibold'>Contact on Address</p>
                            <h3>Habigonj, Sylhet, Bangladesh</h3>
                        </div>
                    </div>
                </div>


                <div className="Contact mt-20 grid md:grid-cols-2 gap-8">

                    // <div className="">
                    //     <Lottie options={defaultOptions} />
                    // </div>

                    <div className=" text-white ContactDataInput">
                        <span className='borderLine'></span>

                        <form >
                            <h2>Your Name</h2>
                            <input type="text" required name="user_name" placeholder="Type here" className="input input-bordered input-primary w-full" />

                            <h2>Your Email</h2>
                            <input type="email" required name="user_email" placeholder="Type here" className="input input-bordered input-primary w-full " />

                            <h2>Your Message</h2>
                            <textarea className="textarea" required name="message" placeholder="Prace Your Mesage"></textarea>

                            <button type="submit" class="relative rounded-3xl inline-flex items-center justify-start px-7 mt-5 py-2  overflow-hidden font-medium transition-all bg-gradient-to-r from-emerald-500 to-blue-500  hover:bg-white group">

                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"> </span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"><span className='font-bold text-base'> Send Email</span><i class="fa text-lg ml-2 fa-envelope" aria-hidden="true"></i></span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyContact;