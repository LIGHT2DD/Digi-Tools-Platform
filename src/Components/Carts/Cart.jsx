const Cart = ({ cart = [], removeFromCart, setView, view }) => {
  const productData = cart;

  const total = productData.reduce(
    (s, p) => s + (p.price || 0) * (p.qty || 1),
    0,
  );

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
              setView && setView("Products");
              localStorage.setItem("view", "Products");
            }}
            className={`btn ${view === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-neutral"} rounded-full text-white h-10 `}
          >
            Products
          </button>
          <button
            onClick={() => {
              setView && setView("Cart");
              localStorage.setItem("view", "Cart");
            }}
            className={`btn ${view === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "text-neutral"} rounded-full text-white h-10 `}
          >
            Cart ({productData.reduce((s, p) => s + (p.qty || 1), 0)})
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
        {productData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg text-gray-500">Your cart is empty</p>
            <button
              onClick={() => {
                setView && setView("Products");
                localStorage.setItem("view", "Products");
              }}
              className="mt-4 btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {productData.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-gray-50 rounded-md p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-gray-500">
                        ${p.price} x {p.qty || 1}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart && removeFromCart(p.id)}
                      className="text-sm text-pink-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">Total:</div>
              <div className="text-xl font-bold">${total}</div>
            </div>

            <div className="mt-6">
              <button className="w-full py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
