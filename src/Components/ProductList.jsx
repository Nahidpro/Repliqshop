import React from "react";
import ProductCard from "./ProductCard";
import useStore from "../hooks/useStore";

function ProductList() {
 const {store} = useStore()

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 flex-wrap">
      { store.map((product) => <ProductCard key={product.id}
       product={product}
       /> )}
      
    </div>
  );
}

export default ProductList;
