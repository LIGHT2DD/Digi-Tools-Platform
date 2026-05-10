import accImg from '../../assets/user.png'
import proImg from '../../assets/package.png'
import rocImg from '../../assets/rocket.png'


const Accounts = () => {
    return (
       <section className="bg-[#F9FAFC] mx-auto container mt-20 rounded-md">
       <div className="flex flex-col justify-center items-center p-20 ">
        <div className="top">
            <h2 className="font-extrabold text-5xl text-center ">Get Started in 3 Steps</h2>
            <p className="text-[#627382] mt-4 text-center mt-2">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="bottom grid grid-cols-3 mt-10 gap-5">
            <div className="flex flex-col justify-center items-center rounded-2xl bg-white  p-8 w-80 h-80">
                <span className=""></span>
                <img src={accImg} alt="" />
                <h3 className="font-bold text-2xl">Create Account</h3>
                <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

             <div className="flex flex-col justify-center items-center rounded-2xl bg-white  p-8 w-80 h-80">
                <span className=""></span>
                <img src={proImg} alt="" />
                <h3 className="font-bold text-2xl">Choose Product</h3>
                <p className="text-[#627382] mt-2">Browse our catalog and select the tools that fit your needs.</p>
            </div>

             <div className="flex flex-col justify-center items-center rounded-2xl bg-white  p-8 w-80 h-80">
                <span className="font-bold text-2xl"></span>
                <img src={rocImg} alt="" />
                <h3 className="font-bold text-2xl">Start Creating</h3>
                <p className="text-[#627382] mt-2">Download and start using your premium  tools immediately.</p>
            </div>
        </div>
       </div>
       </section>
    );
};

export default Accounts;