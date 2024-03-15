import React from 'react'
import chefImage from "../assets/images/useChef.png";
import { FaStar } from 'react-icons/fa';


const Testimonial = () => {
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
                <img className='chef ' src={chefImage} alt="" />
            </div>
            <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <p className='text-red uppercase tracking-wide font-medium text-lg' id='subtitle'>Testimonials</p>
                    <h2 className='text-2xl md:text-5xl font-medium my-2 md:leading-snug leading-snug' id='title'>What Our Customers Say About Us</h2>
                    <blockquote className='my-5 text-secondary leading-[30px]' >
                        "I had the privilege of dining at Sedorf Foodie last night, and I'm still raving about the experience! The attention to detail in the presentation and service was impeccable"
                    </blockquote>
                    <div className='flex items-center gap-4 flex-wrap'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="w-12 bg-neutral text-neutral-content">
                                <span>+99</span>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-yellow-400'/>
                                <span className='font-medium'>4.9</span> <span className='text-[807e7e]'>(18.6k Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial