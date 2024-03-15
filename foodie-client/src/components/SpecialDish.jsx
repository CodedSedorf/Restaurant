import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


const SpecialDish = () => {
    const [recipes, setrecipes] = useState([])
    const slider = React.useRef(null)


    const simpleNextArrow = (props) =>{
      const {className, style, onClick} = props;
      return(
        <div
          className={className}
          style={{...style, display: "block", background: "red"}}
          onClick={onClick}
        >
          Next
        </div>
      )
    }
    const simplePrevArrow = (props)=>{
      const {className, style, onClick} = props;
      return(
        <div
          className={className}
          style={{...style, display: "block", background: "green"}}
          onClick={onClick}
        >
          PREV
        </div>
      )
    }


    useEffect(() => {
      fetch("/Menu.json")
      .then(res => res.json()).then(data =>{
        // console.log(data);
        //filter data
        const specials = data.filter((item)=>item.category === "Recipe")
        console.log(specials);
        setrecipes(specials)
      })
    }, [])
    

    //settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <simpleNextArrow/>,
        prevArrow: <simplePrevArrow/>
      };
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% my-20 relative'>
        <div className="text-left">
            <p className='text-red uppercase tracking-wide font-medium text-lg'>Special Dishes</p>
            <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>Standout Dishes From Our Menu</h2>
        </div>
      
        <div className='md:absolute right-3 top-4 mb-10 md:mr-24'>
          <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'><FcPrevious /></button>
          <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'><FcNext /></button>
        </div>

      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
        {
          recipes.map((item, i)=>(
            <div className="slick-item">
              <Cards key={i} item={item}/>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default SpecialDish