import { Star } from "lucide-react";


const RatingBar = () => {
    return (
        <section className="container mx-auto mt-10">   
            <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="ratings   flex justify-between items-center ">
                <div className="py-10 px-50">
                    <span className="font-extra bold text-6xl text-white">50K+</span>
                    <p className="font-regular  text-white text-2xl">Active Users</p>
                </div>
                 <div className="py-10 px-50">
                    <span className="font-extra bold text-6xl text-white">500+</span>
                    <p className="font-regular text-white text-2xl">Premium Tools</p>
                </div>
                 <div className="py-10 px-50">
                    <span className="font-extra bold text-6xl text-white flex items-center justify-center gap-2">4.9 <Star size={40} color="white" /></span>
                    <p className="font-regular  text-white text-2xl">Rating</p>
                </div>
            </div>
            
        </div></section>
     
    );
};

export default RatingBar;