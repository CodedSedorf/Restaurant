import React, {useState, useEffect} from 'react';
import Cards from '../../components/Cards';
import { FaFilter } from "react-icons/fa"

const Shop = () => {
  const [menu, setmenu] = useState([])
  const [filteredItem, setfilteredItem] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [sortOption, setsortOption] = useState("default");

  //loading data
  useEffect(() => {
    //fetch data from the backend
    const fetchData = async ()=>{
      try{
        const response = await fetch("/Menu.json")
        const data = await response.json();
        // console.log(data);
        setmenu(data)
        setfilteredItem(data);

      } catch(error){
        console.log("Error fetching data", error);
      }
    }
    //Calling the function
    fetchData();
  }, []);

  //filtering data based on category
  const filteredItems = (category) =>{
      const filtered = category === "all" ? menu : menu.filter((item)=> item.category === category);


      setfilteredItem(filtered);
      setselectedCategory(category)

  }

// show all data function
const showAll = ()=>{
    setfilteredItem(menu);
    setselectedCategory("all")
}

//sorting based on A-Z, Z-A, Low-High pricing
const handleSortChange = (option) =>{
    setsortOption(option)

    let sortedItem = [...filteredItem];

    switch(option) {
      case "A-Z":
        sortedItem.sort((a, b)=> a.name.localeCompare(b.name))
        break;
      case "Z-A":
        sortedItem.sort((a, b)=> b.name.localeCompare(a.name))
        break;
      case "low-to-high":
        sortedItem.sort((a, b)=> a.Price - b.Price)
        break;
      case "high-to-low":
        sortedItem.sort((a, b)=> b.Price - a.Price)
        break;
      default:
        break;
    }


    setfilteredItem(sortedItem);
}
  








  return (
    <div className=''>
      {/* {Menu banner} */}
       <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-24 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
        <div className="py-48 flex flex-col justify-center items-center gap-8">
            <div className='text-center px-4 space-y-7'>
                <h2
                 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious<span className='text-green'> Food</span></h2>
                <p className='text-xl text-[#4a4a4a] md:w-4/5 mx-auto'>Come with family & feel the joy of mouthwatering food such as Abacha, Brown Sugar Spiced Salmon, Roasted Broccoli, Beef Bourgignon, Lasagne, Butternut, Pumpkin, Amala and more for a moderate cost</p>
                <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">Order Now</button>
            </div>
        </div>
      </div>


      {/* {menu shop section} */}
      <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-6 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
        {/* {sorting and filtering} */}
        <div>
          {/* {all category buttons} */}
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button onClick={showAll}
            className={selectedCategory === "all" ? "text-green text-decoration-line: underline" : ""}
            >All</button>
            <button onClick={()=>filteredItems("Recipe")}
            className={selectedCategory === "Recipe" ? "text-green text-decoration-line: underline" : ""}
            >Recipe</button>
            <button onClick={()=> filteredItems("Main")}>Main</button>
            <button onClick={()=>filteredItems("Popular")}>Popular</button>
            {/* <button>Sald</button> */}
          </div>

          <div>
            {/* {sorting base filtering} */}
            <div>
              <div className='bg-black p-2'>
                <FaFilter className='h-4 w-4 text-white'/>
              </div>

              {/* {sorting options} */}
              <select name="sort" id=""
              onChange={()=> handleSortChange(e.target.value)}
              value={sortOption}
              className='bg-black text-white px-2 py-1 rounded-sm'
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to high</option>
                <option value="high-to-low">High to low</option>
              </select>
            </div>

          </div>
        </div>

        {/* {products card} */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {
            filteredItem.map((item)=>(
              <Cards key={item._id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop