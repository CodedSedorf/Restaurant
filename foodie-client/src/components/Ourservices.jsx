import React from 'react'
import giftCard from "../assets/images/gift-card.png";
import catering from "../assets/images/catering1.png";
import fastDelivery from "../assets/images/fast-delivery.png";
import orderOnline from "../assets/images/order-online.png";

const Ourservices = () => {
    const serviceLists = [
        {
            id: 1,
            title: "CATERING",
            des: "Delight your guests with our flavors and presentation",
            image: catering
        },
        {
            id: 2,
            title: "FAST DELIVERY",
            des: "We deliver your order promptly to your door",
            image: fastDelivery
        },
        {
            id: 3,
            title: "ONLINE ORDERING",
            des: "Explore menu & order with ease using our online ordering",
            image: orderOnline
        },
        {
            id: 4,
            title: "GIFT CARD",
            des: "We deliver your order promptly to your door",
            image: giftCard
        }
    ]
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% my-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='text-red uppercase tracking-wide font-medium text-lg' id='subtitle'>Our Story & Services</p>
                        <h2 className='text-2xl md:text-5xl font-medium my-2 md:leading-snug leading-snug' id='title'>Our Culinary Journey And Services</h2>
                        <p className='my-5 text-secondary leading-[30px]' >
                            "Rooted in passion, we curate unforgettable dinning experiences and offer exceptional services, blending culinary artistry with warm hospitality"
                        </p>

                        <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 item-center'>
                        {
                            serviceLists.map((service)=>(
                                <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                                    <img className='w-20 h-20 rounded-full mx-auto' src={service.image} alt=""/>
                                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                    <p className='text-#90bd95'>{service.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>

    </div>
  )
}

export default Ourservices