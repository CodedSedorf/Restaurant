import React from 'react'
import burger from "../assets/images/burger-food.png"
import turkey from "../assets/images/jollof.jpg"
import plate from "../assets/images/Amala.png"

const Banner = () => {
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-24 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
        <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            <div className='md:w-1/2'>
                <img className='h-100 w-100 object-contain mr-2' src={burger} alt="" />

                <div className='md:flex hidden flex-col md:flex-row items-center justify-around -mt-16 gap-4'>
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img className='h-20 w-20 rounded-2xl' src={turkey} alt="" />
                        <div className='space-y-1'>
                            <h5 className='font-medium mb-1'>Nigerian Jollof</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            </div>
                            <p className='text-red'>$18.00</p>
                        </div>
                    </div>
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img className='h-20 w-20 rounded-2xl' src={plate} alt="" />
                        <div className='space-y-1'>
                            <h5 className='font-medium mb-1'>Spicy Amala</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            </div>
                            <p className='text-red'>$20.00</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='md:w-1/2 space-y-10'>
                <h1 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Satisfy your <span className='text-green'>Appetite</span></h1>
                <p className='text-xl text-[#4a4a4a]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Banner