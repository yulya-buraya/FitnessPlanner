import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { constructorActions } from "../../../store/Constructor/action";

export const ProductListButton = ({ products, category }) => {
    const [isVisible, setVisible] = useState(false)
    const dispatch = useDispatch();

    return (
        <div>
            <div className="product-button" onClick={() => setVisible(!isVisible)}>
                {category}
            </div>
            {isVisible ? <div className={`list-products`}>
                {products.map((product, _index) => {
                    if (product.category == category) {
                        return (
                            <button
                                className="product-name-btn"
                                key={_index}
                                onClick={() => (dispatch(constructorActions.addMealProduct(product)))}
                            >
                                {product.name}
                            </button>
                        );
                    }
                    return null
                })}
            </div> : null}

        </div>
    );
}