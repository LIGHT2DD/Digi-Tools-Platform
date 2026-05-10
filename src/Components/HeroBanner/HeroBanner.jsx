import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const HeroBanner = () => {
  return (
    <section className="mt-8 space-y-4">
      <div className="flex justify-between items-center">
        <div className="left-part flex-1 mt-3">
          <div class="inline-flex items-center gap-2 bg-[#E8E9FF] rounded-full px-4 py-2">
            <span class="relative flex h-3 w-3">
              <span class="absolute inline-flex h-full w-full rounded-full bg-[#7B3AF6] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7B3AF6]"></span>
            </span>
            <span class="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-medium">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h2 className="font-extrabold text-6xl text-neutral my-3 ">
            Supercharge Your <br /> Digital Workflow
          </h2>
          <p className=" text-[#627382] text-1.25 mt-3">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className="heroBtn mt-4 gap-4 flex items-center ">
            <button className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
              Explore Products
            </button>
            <button className="btn rounded-full h-10 btn-outline border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
              <Play color="#9514FA" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="right-part flex-1">
          <img src={bannerImg} alt="" className="w-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
