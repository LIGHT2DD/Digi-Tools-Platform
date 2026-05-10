import { ShoppingCart, UserKey } from "lucide-react";

const NavBar = ({ setView, cart = [] }) => {
  const cartCount = cart.reduce((s, p) => s + (p.qty || 1), 0);
  return (
    <nav className="flex justify-between items-center w-11/12 ">
      <div className="start p-4">
        <h1 className="text-[#4F39F6] font-bold text-2xl">DigiTools</h1>
      </div>
      <div className="center w-6/12">
        <ul className="flex justify-around items-center">
          <li>
            <button
              onClick={() => {
                setView && setView("Products");
                localStorage.setItem("view", "Products");
              }}
              className="text-[#101727] leading-4"
            >
              Products
            </button>
          </li>
          <li>
            <a href="" className="text-[#101727] leading-4">
              Features
            </a>
          </li>
          <li>
            <a href="" className="text-[#101727] leading-4">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="text-[#101727] leading-4">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="text-[#101727] leading-4">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="end flex gap-4 items-center w-3/12">
        <button className="flex font-semibold gap-4 text-base">
          {" "}
          <UserKey /> Login
        </button>
        <button
          onClick={() => {
            setView && setView("Cart");
            localStorage.setItem("view", "Cart");
          }}
          className="flex items-center justify-center font-semibold text-base cursor-pointer relative"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button
          onClick={() => {
            setView && setView("Cart");
            localStorage.setItem("view", "Cart");
          }}
          className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] "
        >
          Cart
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
