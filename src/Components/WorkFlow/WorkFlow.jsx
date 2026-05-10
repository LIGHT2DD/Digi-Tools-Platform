
const WorkFlow = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20">
            <div className="p-15 flex flex-col justify-center items-center ">
                <h2 className="font-extrabold text-4xl text-white">Ready to Transform Your Workflow?</h2>
                <p className="text-white mt-4">Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.</p>

                <div className=" mt-4 flex gap-5">
                    <button className="btn rounded-full bg-white text-[#4F39F6]">Explore Products</button>
                    <button className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">View Prices</button>
                </div>
                <p className="text-white mt-2">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default WorkFlow;