import React from 'react';
import Wave from 'react-wavify'
import './Footer.css';

const Footer = () => {
    return (
        <div>





    <div className='waver'>
              <Wave fill='#000000'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.15,
          points: 3
        }}
        />
     </div>

<footer className="Footer grid md:grid-cols-3 md:px-20 px-3 py-10 bg-black text-white">
                <div>
                    <span className="text-lg font-semibold text-white">Services</span>
                    <h3><a className="link link-hover">Figma To HTML</a></h3>
                    <h3><a className="link link-hover">Responsive Design</a></h3>
                    <h3><a className="link link-hover">Web Design</a></h3>
                    <h3><a className="link link-hover">Web DEvelopment</a></h3>
                </div>

                <div className='SocialIcon mt-8 md:mt-0'>
                    <h2 className="pb-3 text-lg font-semibold text-white">Information</h2>
                    <a href="#" target='blank'><i class=" fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#" target='blank'><i class="fa ml-4 fa-facebook" aria-hidden="true"></i></a>
                    <a href="#" target='blank'><i class="ml-4 fa fa-github" aria-hidden="true"></i></a>
                    <h3 className='mt-3'><a className=" link link-hover">Narsingdi, Dhaka, Bangladesh</a></h3>
                </div>

                <div className='mt-8 md:mt-0'>
                    <span className="text-lg font-semibold text-white">Newsletter</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button type="submit" class="btn btn-success absolute top-0 right-0 rounded-l-none
                            inline-flex items-center 
                            justify-start px-7  py-2  overflow-hidden font-medium transition-all 
                            bg-gradient-to-r from-emerald-500 to-blue-500  hover:bg-white group">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"> </span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"><span className='font-bold text-base'> Send Email</span><i class="fa text-lg ml-2 fa-envelope" aria-hidden="true"></i></span>

                            </button>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;