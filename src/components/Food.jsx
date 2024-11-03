import { useState } from "react";
import React from "react";
import { data } from "../data/data";

const Food = () => {
    const [foods,setFoods]=useState(data)

    //filter type burgers etc
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            })
        );
    };

   


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-green-600 font-bold text-4xl text-center">Top Rated Anime </h1>

      <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div >
            <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=>setFoods(data)} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">All</button>
            <button onClick={()=>filterType('Action')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Action</button>
            <button onClick={()=>filterType('Romantic')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Romantic</button>
            <button onClick={()=>filterType('Horror')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Horror</button>
            <button onClick={()=>filterType('Thriller')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Thriller</button>
          </div>
        </div>
        {/* filter price */}
        {/* <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w-[390px] w-full">
                <button onClick={()=>filterPrice('$')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">$</button>
                <button onClick={()=>filterPrice('$$')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">$$</button>
                <button onClick={()=>filterPrice('$$$')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">$$$</button>
                <button onClick={()=>filterPrice('$$$$')} className=" m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">$$$$</button>
            </div>
        </div> */}
      </div>
        {/* display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item,index)=>(
            <div key={index} className="border rounded-lg shadow-lg hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} 
                    className="w-full h-[200px] object-cover rounded-t-lg" />
                    <div className="flex justify-between px-2 py-4">
                        <p className="font-bold">{item.name}</p>
                        <p>
                            <span className="bg-green-500 text-white p-1 rounded-full">{item.price}</span>
                        </p>
                    </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
