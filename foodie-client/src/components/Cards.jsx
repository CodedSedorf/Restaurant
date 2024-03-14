import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Cards = ({item}) => {
    const [isHeartFilted, setisHeartFilted] = useState(false)
    const handleHeartClick = ()=>{
        setisHeartFilted(!isHeartFilted)
    }
  return (
       <div className="card w-96 bg-base-100 shadow-xl relative">
            <div className={`rating gap-1 absolute right-4 top-2 p-4 heartstar bg-green ${isHeartFilted ? "text-rose-500" : "text-white"}`} onClick={handleHeartClick} id='like'>
                {/* <IoIosHeartEmpty className='h-5 w-5 cursor-pointer'/> */}
                <FaHeart className='h-5 w-5 cursor-pointer'/>
            </div>
            <Link to={`/Menu/${item._id}`}>
                <figure>
                    <img className='hover:scale-105 transition-all direction-200 md:h-72 rounded-xl' src={item.image} alt="" />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/Menu/${item._id}`}>
                 <h2 className="card-title">{item.name}</h2>
                </Link>
                <p>Satisfy your Appetite</p>
                <div className="card-actions justify-between items-center mt-2 ">
                    <h5 className='font-semibold'><span className='text-red'>$</span>{item.Price}</h5>
                <button className="btn bg-green text-white">Buy Now</button>
                </div>
            </div>
        </div>
  )
}

export default Cards