const ProductItem = ({ products, addToCart }) => {
  const { name, price, tag, features } = products;

  return (
    <div className="card w-96 bg-base-100 shadow-sm ">
      <div className="card-body  ">
        <span className="badge badge-xs badge-warning">{tag}</span>

        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">${price}/mo</span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart && addToCart(products);
            }}
            className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
