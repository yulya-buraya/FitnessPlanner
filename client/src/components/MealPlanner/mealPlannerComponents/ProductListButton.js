import React, { useCallback, useContext, useEffect, useState } from "react"
export const ProductListButton = ({ products, category }) => {
    const [isVisible, setVisible] = useState(false)
    return (
        <div>
        <div className="product-button"  onClick={()=>setVisible(!isVisible)}>{category}</div>
     {isVisible?<div className={`list-products`}>
         {console.log(isVisible)}
         { products.map((product, _index) => {
             if (product.category == category) {
              return <button className="product-name-btn" index={_index} value={product._id} >{product.name}</button>
             }
             return null
         })}
     </div> :null}
          
    </div>
    );
}