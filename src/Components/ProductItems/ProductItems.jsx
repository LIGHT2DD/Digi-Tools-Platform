import { use } from "react";
import ProductItem from "./ProductItem";
import { useState } from "react";

const ProductItems = ({ productPromise, setView, view, cart, addToCart }) => {
  const [items, setItems] = useState("Products");
  console.log(items);

  const productData = use(productPromise);
  return (
    <section>
      <div className="flex flex-col justify-center items-center space-y-2 mt-14">
        <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
        <p className=" text-[#627382] mt-2">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex gap-3 bg-base-300 rounded-full w-45 mt-3">
          <button
            onClick={() => {
              setItems("Products");
              setView && setView("Products");
              localStorage.setItem("view", "Products");
            }}
            className={`btn ${items === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-neutral"} rounded-full text-white h-10 `}
          >
            Products
          </button>
          <button
            onClick={() => {
              setItems("Cart");
              setView && setView("Cart");
              localStorage.setItem("view", "Cart");
            }}
            className={`btn ${items === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-neutral"} rounded-full text-white h-10 `}
          >
            Cart({cart?.reduce((s, p) => s + (p.qty || 1), 0) || 0})
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-14 gap-5">
        {productData.map((products) => (
          <ProductItem
            key={products.id}
            products={products}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductItems;
