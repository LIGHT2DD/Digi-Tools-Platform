import { use } from "react";
import ProductItem from "./ProductItem";

const ProductItems = ({productPromise}) => {
  
    const productData=use(productPromise);
    return (
        <div className="grid grid-cols-3 mt-14 gap-5">
            {
                productData.map(products=><ProductItem key={products.id} products={products}/>)
            }
        </div>
    );
};

export default ProductItems;