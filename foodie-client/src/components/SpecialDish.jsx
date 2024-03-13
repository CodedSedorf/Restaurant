import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


const SpecialDish = () => {
    const [recipes, setrecipes] = useState([])
    const slider = React.useRef(null)

    useEffect(() => {
      fetch("/Menu.json")
      .then(res => res.json()).then(data =>{
        // console.log(data);
        //filter data
        const specials = data.filter((item)=>item.category === "Main")
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
        ]
      };
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% my-20'>
        <div className="text-left">
            <p className='text-red uppercase tracking-wide font-medium text-lg'>Special Dishes</p>
            <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>Standout Dishes From Our Menu</h2>
        </div>

      <Slider {...settings} className="mb-4">
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