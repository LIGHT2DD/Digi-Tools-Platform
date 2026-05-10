import { useState } from "react";



const Digital_Tools = () => {

  const [items,setItems]=useState('Products');
  console.log(items);

    return (
       <div className="flex flex-col justify-center items-center space-y-2 mt-14">
        <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
        <p className=" text-[#627382] mt-2">Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
        <div className="flex gap-3 bg-base-300 rounded-full w-45 mt-3">
            <button onClick={()=>setItems("Products")}
            className={`btn ${items==="Products" ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"text-neutral"} rounded-full text-white h-10 `}>Products</button>
            <button onClick={()=>setItems("Cart")}
            className={`btn ${items==="Cart" ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"text-neutral"} rounded-full text-white h-10 `}>Cart(0)</button>
        </div>
       </div>
    );
};

export default Digital_Tools;