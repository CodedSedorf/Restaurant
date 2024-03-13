import React from 'react'
import food1 from "../assets/images/pan-fried.jpeg";
import food2 from "../assets/images/spiced-salmon.jpeg";
import food3 from "../assets/images/salmon-cake.jpeg";
import food8 from "../assets/images/baked-salmon.jpeg";
import food5 from "../assets/images/roasted-broccoli.jpg";
import food6 from "../assets/images/mexican.jpg";
import food7 from "../assets/images/see-food.jpg";
import food4 from "../assets/images/semo.jpg";

const Categories = () => {
    const category = [
        {
            id: 1,
            title: "Recipes",
            description: "Pan-Fried Salmon",
            image: food1
        },
        {
            id: 2,
            title: "Recipes",
            description: "Brown Sugar Spiced Salmon",
            image: food2
        },
        {
            id: 3,
            title: "Recipes",
            description: "Salmon Cakes",
            image: food3
        },
        {
            id: 4,
            title: "Main",
            description: "Semo and Egusi",
            image: food4
        },
        {
            id: 4,
            title: "Recipes",
            description: "The Best Baked Salmon",
            image: food4
        },
        {
            id: 5,
            title: "Vegetables",
            description: "Easy Roasted Broccoli",
            image: food5
        },
        {
            id: 6,
            title: "Vegetables",
            description: "Irresistible Mexican Corn",
            image: food6
        },
        {
            id: 7,
            title: "Spicy",
            description: "Sea Food",
            image: food7
        },
        {
            id: 8,
            title: "Main",
            description: "Semo and Egusi",
            image: food8
        }
        
    ]
  return (
    //Section-container
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
      <div className='text-center'>
        <p className='text-red uppercase tracking-wide font-medium text-lg' id='subtitle'>Customer Favorites</p>
        <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug' id='title'>Popular Categories</h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {
          category.map((item, i) => (
            <div key={i} className="shadow-lg rounded-md bg-white py-6 w- mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={item.image} alt="Food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <p>{item.title}</p>
                  <h2 className="card-title">{item.description}</h2>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories